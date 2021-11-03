import suspects from "./suspect_array";

export const culpritClues = {

	"Butler": {
		normal: { name: 'white gloves', description: 'Pair of white gloves. Seems to have been well worn.' },
		guilty: [
			{ name: 'note from bank manager', description: 'Reads: You owe £20000. Please pay by the end of the month.' },
			{ name: 'glasses case', description: "Glasses case with embossed mustache"}
		]
	},

	"Lady Of The House": {
		normal: {name: 'sun hat', description: 'Sun hat. Seems to be very fashionable'},
		guilty: [
			{ name: 'letter of divorce', description: 'Reads: "Irreconcilable differences"' },
			{ name: 'contract for apartment rental', description: "Reads: Move in date - 20th October" }
		]
	},

	"Wayward Son": {
		normal: {name: 'signet ring', description: 'Ornate signet ring'},
		guilty: [
			{name: 'second will', description: `Will reads: "I leave everything to my son."`},
			{name: 'car keys', description: "Set of car keys. Inscription reads: \"Live in the Fast Lane.\""}
		]
	},

	"Maid": {
		normal: {name: 'duster', description: 'feather duster'},
		guilty: [
			{name: 'hospital bills', description: 'Reads: £5000 for hospital visit'},
			{name: '', description: ''}
		]
	},

	"French Teacher": {
		normal: { name: '', description: '' },
		guilty: [
			{ name: 'beret', description: "Cherry coloured beret" },
			{ name: 'notebook', description: "Cover reads: \"Où est mon stylo?\"" }

		]
	},

	"Business Partner": {
		normal: {name: '', description: ''},
		guilty: [
			{ name: 'bankruptcy note', description: "Reads: Bankruptcy note" },
			{ name: 'pocket watch', description: "golden pocket watch"}
		]
	},
}

const normalClues = [];

suspects.forEach(e => {
	normalClues.push(culpritClues[e.name].normal);
});

export { normalClues };