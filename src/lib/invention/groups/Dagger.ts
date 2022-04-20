import getOSItem from '../../util/getOSItem';
import { DisassemblySourceGroup } from '..';

const i = getOSItem;

export const Dagger: DisassemblySourceGroup = {
	name: 'Dagger',
	items: [
		{
			item: i('Black dagger'),
			lvl: 25
		},
		{
			item: i('White dagger'),
			lvl: 25
		},
		{ item: i('Dragon dagger'), lvl: 60 },
		{ item: i('Toktz-xil-ek'), lvl: 60 },
		{ item: i('Bronze dagger'), lvl: 1 },
		{ item: i('Iron dagger'), lvl: 10 },
		{ item: i('Steel dagger'), lvl: 20 },
		{ item: i('Mithril dagger'), lvl: 30 },
		{ item: i('Rune dagger'), lvl: 50 }
	],
	parts: { blade: 30, base: 35, sharp: 30 }
};