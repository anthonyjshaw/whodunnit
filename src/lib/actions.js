export const actions = {
	'Butler': { 
		normal: ['Cooking dinner', 'Getting the master\'s newspaper', 'Answering the door' ], 
		guilty: { 
			'shooting': 'cleaning the master\'s gun', 
			'set on fire': 'I was refilling his prized gold plated lighter with fluid... what a tragedy.', 
			'stabbing': '', 
			'poison': '', 
			'pushed out of window': ''
		}
	},
	'Lady Of The House': { 
		normal:['I was organizing something for his birthday...'], 
		guilty: { 
			'shooting': 'Well... I was admiring the ', 
			'set on fire': '', 
			'stabbing': '', 
			'poison': '', 
			'pushed out of window': ''
		} 
	},
	'Wayward Son': {
		normal: {"dining room": "doing some business deals", "garden": "Um, chilling with the flowers..."}, 
		guilty: { 
			'shooting': 'Yeah well... I was ', 
			'set on fire': '', 
			'stabbing': '', 
			'poison': '', 
			'pushed out of window': ''
		} 
	},
	'Maid': { 
		normal: { "dining room": 'I was setting the table'}, 
		guilty: { 
			'shooting': '', 
			'set on fire': '', 
			'stabbing': '', 
			'poison': '', 
			'pushed out of window': ''
		}
	},
	'French Teacher': { 
		normal: {"dining room": "Well, I was preparing my notes for the lady's house"}, 
		guilty: { 
			'shooting': 'Ah... I was discussing ', 
			'set on fire': '', 
			'stabbing': 'We were discussing Huis Clos', 
			'poison': '', 
			'pushed out of window': '' 
		}
	},
	'Business Partner': { 
		normal:[''], 
		guilty: { 
			'shooting': 'data', 
			'set on fire': 'date', 
			'stabbing': 'Yo', 
			'poison': '', 
			'pushed out of window': '' 
		}
	},
}