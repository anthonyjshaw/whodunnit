import { locations } from "./locations";


export const culpritLocations = {

	"Butler": {
		normal: locations[Math.floor(Math.random() * locations.length)],
		guilty: { 'shooting': 'lounge', 'poison': '', 'stabbing': '', 'pushed out of the window': 'dining room' }
	},

	"Lady Of The House": {
		normal: locations[Math.floor(Math.random() * locations.length)],
		guilty: {'shooting': 'garden', 'poison': 'bedroom', 'set on fire': 'lounge', "pushed out of window": 'study', "stabbing": 'kitchen'}
	},

	"French Teacher": {
		normal: locations[Math.floor(Math.random() * locations.length)],
		guilty: {'stabbing': 'dining room', 'shooting': 'kitchen', 'poison': 'garden', 'pushed out of window': 'lounge'}
	},

	"Business Partner": {
		normal: locations[Math.floor(Math.random() * locations.length)],
		guilty: {'shooting': 'dining room', "poison": 'dining room', 'stabbing': 'kitchen', 'set on fire': 'garden', 'pushed out of window': 'bedroom'}
	},

	"Maid": {
		normal: locations[Math.floor(Math.random() * locations.length)],
		guilty: { 'shooting': 'kitchen', 'poison': ''  }
	},

	"Wayward Son": {
		normal: locations[Math.floor(Math.random() * locations.length)],
		guilty: {"shooting": 'bedroom', 'poison': 'kitchen', 'set on fire': 'garden', 'pushed out of window': 'lounge' }
	}


}

