import {locations} from './locations.js';
import { actions } from './actions.js';
import { relationships } from './relationships.js';
import { culpritLocations } from './culprit_locations.js';

export const scenarios = (suspect, culprit, method) => {
	if (suspect === culprit) {
		return {
			action: actions[culprit].guilty[method], 
			location: culpritLocations[culprit],
			relationships: [],
			otherCharacters: []
		};
	}
}

console.log(scenarios('Butler', 'Butler', 'shooting').action);