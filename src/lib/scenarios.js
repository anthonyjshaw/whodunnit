import { locations } from './locations.js';
import { actions } from './actions.js';
import { relationships } from './relationships.js';
import { culpritLocations } from './culprit_locations.js';
import suspects from './suspect_array.js';
import { otherCharacters } from './other_characters.js';

export const scenarios = (suspect, culprit, method) => {
	if (suspect === culprit) {
		return {
			action: actions[culprit].guilty[method], 
			location: culpritLocations[culprit].guilty[method],
			relationships: relationships[culprit].guilty[method],
			otherCharacters: otherCharacters[culprit].guilty
		}
	} else {
		return {
			action: actions[suspect].normal[Math.floor(Math.random * actions[suspects].normal.length)],
			locations: locations[Math.floor(Math.random() * locations.length)],
		}
	}
}




