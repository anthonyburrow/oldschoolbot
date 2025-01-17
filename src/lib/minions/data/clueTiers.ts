import { Time } from 'e';
import { Clues } from 'oldschooljs';
import { BeginnerClueTable } from 'oldschooljs/dist/simulation/clues/Beginner';
import { EasyClueTable } from 'oldschooljs/dist/simulation/clues/Easy';
import { EliteClueTable } from 'oldschooljs/dist/simulation/clues/Elite';
import { HardClueTable } from 'oldschooljs/dist/simulation/clues/Hard';
import { MasterClueTable } from 'oldschooljs/dist/simulation/clues/Master';
import { MediumClueTable } from 'oldschooljs/dist/simulation/clues/Medium';

import itemID from '../../util/itemID';
import { ClueTier } from '../types';

const { Beginner, Easy, Medium, Hard, Elite, Master } = Clues;

const ClueTiers: ClueTier[] = [
	{
		name: 'Beginner',
		table: Beginner,
		id: 23_245,
		scrollID: 23_182,
		timeToFinish: Time.Minute * 4.5,
		mimicChance: false,
		allItems: BeginnerClueTable.allItems
	},
	{
		name: 'Easy',
		table: Easy,
		id: 20_546,
		scrollID: 2677,
		timeToFinish: Time.Minute * 6.5,
		milestoneReward: {
			itemReward: itemID('Large spade'),
			scoreNeeded: 500
		},
		mimicChance: false,
		allItems: EasyClueTable.allItems
	},
	{
		name: 'Medium',
		table: Medium,
		id: 20_545,
		scrollID: 2801,
		timeToFinish: Time.Minute * 9,
		milestoneReward: {
			itemReward: itemID('Clueless scroll'),
			scoreNeeded: 400
		},
		mimicChance: false,
		allItems: MediumClueTable.allItems
	},
	{
		name: 'Hard',
		table: Hard,
		id: 20_544,
		scrollID: 2722,
		timeToFinish: Time.Minute * 12.5,
		mimicChance: false,
		allItems: HardClueTable.allItems
	},
	{
		name: 'Elite',
		table: Elite,
		id: 20_543,
		scrollID: 12_073,
		timeToFinish: Time.Minute * 15.7,
		milestoneReward: {
			itemReward: itemID('Heavy casket'),
			scoreNeeded: 200
		},
		mimicChance: 35,
		allItems: EliteClueTable.allItems
	},
	{
		name: 'Master',
		table: Master,
		id: 19_836,
		scrollID: 19_835,
		timeToFinish: Time.Minute * 19.3,
		milestoneReward: {
			itemReward: itemID('Scroll sack'),
			scoreNeeded: 100
		},
		mimicChance: 15,
		allItems: MasterClueTable.allItems
	}
];

export default ClueTiers;
