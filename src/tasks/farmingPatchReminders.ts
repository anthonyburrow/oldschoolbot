import { MessageButton } from 'discord.js';
import { Time } from 'e';
import { KlasaMessage, Task, TaskStore } from 'klasa';

import { PerkTier } from '../lib/constants';
import { FarmingPatchTypes, PatchData } from '../lib/minions/farming/types';
import { UserSettings } from '../lib/settings/types/UserSettings';
import Farming from '../lib/skilling/skills/farming';
import { stringMatches } from '../lib/util';
import getUsersPerkTier from '../lib/util/getUsersPerkTier';

declare module 'klasa' {
	interface KlasaClient {
		__farmingPatchReminders: NodeJS.Timeout;
	}
}

let basePlantTime = 1_626_556_507_451;

export default class extends Task {
	public constructor(store: TaskStore, file: string[], directory: string) {
		super(store, file, directory);
	}

	async init() {
		if (this.client.__farmingPatchReminders) {
			clearTimeout(this.client.__farmingPatchReminders);
		}
		const ticker = async () => {
			try {
				const now = Date.now();
				for (const user of this.client.users.cache.values()) {
					if (getUsersPerkTier(user) < PerkTier.Four) continue;
					if (!user.settings.get(UserSettings.FarmingPatchReminders)) continue;
					for (const patchType of Object.values(FarmingPatchTypes)) {
						const key = `farmingPatches.${patchType}`;
						const patch: PatchData = user.settings.get(key) as unknown as any;
						if (!patch) continue;
						if (patch.plantTime < basePlantTime) continue;

						const storeHarvestablePlant = patch.lastPlanted;
						const planted = storeHarvestablePlant
							? Farming.Plants.find(plants => stringMatches(plants.name, storeHarvestablePlant)) ??
							  Farming.Plants.find(
									plants =>
										stringMatches(plants.name, storeHarvestablePlant) ||
										stringMatches(plants.name.split(' ')[0], storeHarvestablePlant)
							  )
							: null;
						const difference = now - patch.plantTime;
						if (!planted) continue;
						if (difference < planted.growthTime * Time.Minute) continue;
						if (patch.wasReminded) {
							console.log(`Wouldnt DM ${user} because already reminded.`);
							continue;
						}
						await user.settings.update(key, { ...patch, wasReminded: true });

						const message = await user.send({
							content: `${user.username}, the ${planted.name} planted in your ${patchType} patches is ready to be harvested!`,
							components: [
								[
									new MessageButton()
										.setLabel('Harvest & Replant')
										.setStyle('PRIMARY')
										.setCustomID('HARVEST'),
									new MessageButton()
										.setLabel('Disable Reminders')
										.setStyle('SECONDARY')
										.setCustomID('DISABLE')
								]
							]
						});
						try {
							const selection = await message.awaitMessageComponentInteraction({
								time: Time.Minute * 5
							});
							if (selection.customID === 'HARVEST') {
								message.author = user;
								this.client.commands.get('farm')?.run(message as KlasaMessage, [planted.name]);
							}
							if (selection.customID === 'DISABLE') {
								await user.settings.update(UserSettings.FarmingPatchReminders, false);
								await user.send(
									'Farming patch reminders have been disabled. You can enable them again using `+farm --enablereminders`.'
								);
							}
							message.edit({ components: [] });
						} catch {}
					}
				}
			} catch (err) {
				console.error(err);
			} finally {
				this.client.__farmingPatchReminders = setTimeout(ticker, Number(Time.Minute));
			}
		};
		ticker();
	}

	async run() {}
}