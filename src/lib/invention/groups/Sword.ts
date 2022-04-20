import getOSItem from '../../util/getOSItem';
import { DisassemblySourceGroup } from '..';

const i = getOSItem;

export const Sword: DisassemblySourceGroup = {
	name: 'Sword',
	items: [
		{ item: i('Bronze 2h sword'), lvl: 1 },
		{ item: i('Iron 2h sword'), lvl: 10 },
		{ item: i('Steel 2h sword'), lvl: 20 },
		{
			item: i('Black sword'),
			lvl: 25
		},
		{
			item: i('White sword'),
			lvl: 25
		},
		{ item: i('Leaf-bladed sword'), lvl: 55 },
		{ item: i('Toktz-xil-ak'), lvl: 60 },
		{ item: i('Bronze sword'), lvl: 1 },
		{ item: i('Iron sword'), lvl: 10 },
		{ item: i('Steel sword'), lvl: 20 },
		{ item: i('Mithril sword'), lvl: 30 },
		{ item: i('Mithril 2h sword'), lvl: 30 },
		{ item: i('Rune sword'), lvl: 50 },
		{ item: i('Rune 2h sword'), lvl: 50 },
		{ item: i('Dragon 2h sword'), lvl: 60 },
		{ item: i('Dragon sword'), lvl: 60 },
		{
			item: i('Armadyl godsword'),
			lvl: 75,
			special: { always: true, parts: [{ type: 'armadyl', chance: 100, amount: 12 }] }
		},
		{
			item: i('Bandos godsword'),
			lvl: 75,
			special: { always: true, parts: [{ type: 'bandos', chance: 100, amount: 12 }] }
		},
		{
			item: i('Saradomin godsword'),
			lvl: 75,
			special: { always: true, parts: [{ type: 'saradomin', chance: 100, amount: 12 }] }
		},
		{
			item: i('Saradomin sword'),
			lvl: 75,
			special: { always: true, parts: [{ type: 'saradomin', chance: 100, amount: 12 }] }
		},
		{
			item: i('Zamorak godsword'),
			lvl: 75,
			special: { always: true, parts: [{ type: 'zamorak', chance: 100, amount: 12 }] }
		},
		{ item: i('Godsword blade'), lvl: 75 }
	],
	parts: { blade: 30, metallic: 30, base: 35, dextrous: 2 }
};
