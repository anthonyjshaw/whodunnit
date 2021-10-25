import { locations } from "./locations";


export const culpritLocations = {
	normal: locations[Math.floor(Math.random() * locations.length)],

	"Butler": {
		guilty: { 'shooting': 'lounge', 'poison': '', 'stabbing': '', 'pushed out of the window': 'dining room' }
	},

	"Lady Of The House": {
		guilty: {'shooting': 'garden', 'poison': 'bedroom', 'set on fire': 'lounge', "pushed out of window": 'study'}
	},

	"French Teacher": {
		guilty: {'stabbing': 'dining room', 'shooting': 'kitchen', 'poison': 'garden', 'pushed out of window': 'lounge'}
	},

	"Business Partner": {
		guilty: {'shooting': 'dining room', "poison": 'dining room', 'stabbing': 'kitchen', 'set on fire': 'garden'}
	},

	"Maid": {
		guilty: { 'shooting': 'kitchen', 'poison': '' }
	}



}


// function getLocation(suspect, culprit) {
// 	if (suspect === culprit) {
// 		return culpritLocations[culprit]
// 	}
// }