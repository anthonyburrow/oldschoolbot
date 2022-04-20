import getOSItem from '../../util/getOSItem';
import { DisassemblySourceGroup } from '..';

const i = getOSItem;

export const Spear: DisassemblySourceGroup = {
	name: 'Spear',
	items: [
		{ item: i('Bronze spear'), lvl: 1 },
		{ item: i('Iron spear'), lvl: 10 },
		{ item: i('Steel spear'), lvl: 20 },
		{
			item: i('Black spear'),
			lvl: 25
		},
		{ item: i('Mithril spear'), lvl: 30 },
		{ item: i('Rune spear'), lvl: 50 },
		{ item: i('Leaf-bladed spear'), lvl: 55 },
		{ item: i('Dragon spear'), lvl: 60 },
		{
			item: i("Guthan's warspear"),
			lvl: 70
		},
		{
			item: i('Zamorakian spear'),
			lvl: 75,
			special: { always: true, parts: [{ type: 'zamorak', chance: 100, amount: 12 }] }
		},
		{ item: i("Vesta's spear"), lvl: 78 }
	],
	parts: { blade: 30, sharp: 30 }
};
