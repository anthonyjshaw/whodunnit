export const culpritClues = {

	"Butler": {
		normal: [],
		guilty: [
			{ name: 'note to bank manager', description: 'Reads: You owe £20000. Please pay by the end of the month.' }
		]
	},

	"Lady Of The House": {
		normal: [''],
		guilty: [
			{ name: 'letter of divorce', description: 'Reads: "Irreconcilable differences"' },
			{ name: 'contract for apartment rental', description: "Reads: Move in date - 20th October" }
		]
	},

	"Wayward Son": {
		normal: [''],
		guilty: [{name: 'second will', description: `Will reads: "I leave everything to my son."`}]
	},

	"Maid": {
		normal: [''],
		guilty: [{name: 'hospital bills', description: 'Reads: £5000 for hospital visit'}]
	},

	"French Teacher": {
		normal: [''],
		guilty: [{name: 'beret', description: "Cherry coloured beret"}]
	},

	"Business Partner": {
		normal: [''],
		guilty: [{name: 'bankruptcy note', description: "Reads: Bankruptcy note"}]
	},
}

