import { KlasaMessage } from 'klasa';

import { cancelTask, getActivityOfUser } from '../../settings/settings';
import { RaidsOptions } from '../../types/minions';
import chatHeadImage from '../../util/chatHeadImage';

export async function cancelTaskCommand(msg: KlasaMessage) {
	const currentTask = getActivityOfUser(msg.author.id);

	if (!currentTask) {
		return msg.channel.send(
			`${msg.author.minionName} isn't doing anything at the moment, so there's nothing to cancel.`
		);
	}

	if ((currentTask as any).users && (currentTask as any).users.length > 1) {
		return msg.channel.send('Your minion is on a group activity and cannot cancel!');
	}

	if (currentTask.type === 'Inferno') {
		return msg.channel.send(`${msg.author.minionName} is in the Inferno, they can't leave now!`);
	}

	if (currentTask.type === 'GroupMonsterKilling') {
		return msg.channel.send(
			`${msg.author.minionName} is in a group PVM trip, their team wouldn't like it if they left!`
		);
	}

	if (currentTask.type === 'BarbarianAssault') {
		return msg.channel.send(
			`${msg.author.minionName} is currently doing Barbarian Assault, and cant leave their team!`
		);
	}

	if (currentTask.type === 'SoulWars') {
		return msg.channel.send(`${msg.author.minionName} is currently doing Soul Wars, and cant leave their team!`);
	}

	if (currentTask.type === 'MonkeyRumble') {
		return msg.channel.send({
			files: [
				await chatHeadImage({
					content: 'You no allowed to leave the arena! You finish fight!',
					head: 'marimbo'
				})
			]
		});
	}

	if (currentTask.type === 'Raids') {
		const data = currentTask as RaidsOptions;
		if (data.users.length > 1) {
			return msg.channel.send(
				`${msg.author.minionName} is currently doing the Chamber's of Xeric, they cannot leave their team!`
			);
		}
	}

	await msg.confirm(
		`${msg.author} ${msg.author.minionStatus}\n Please confirm if you want to call your minion back from their trip. ` +
			"They'll **drop** all their current **loot and supplies** to get back as fast as they can, so you won't receive any loot from this trip if you cancel it, and you will lose any supplies you spent to start this trip, if any."
	);

	await cancelTask(msg.author.id);

	return msg.channel.send(`${msg.author.minionName}'s trip was cancelled, and they're now available.`);
}