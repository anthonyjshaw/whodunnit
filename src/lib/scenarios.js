import { actions } from './actions.js';
import { relationships } from './relationships.js';
import { culpritLocations } from './culprit_locations.js';
import { otherCharacters } from './other_characters.js';

export const scenarios = (suspect, culprit, method) => {

	const obj = {action: "", location: "", relationship: "", otherCharacter: ""};

	if (suspect === culprit) {
		obj.location = culpritLocations[culprit].guilty[method];
		obj.action = actions[culprit].guilty[method];
		obj.relationship = relationships[culprit].guilty;
		obj.otherCharacter = otherCharacters[culprit].guilty;
	} else {
		obj.location = culpritLocations.normal;
		obj.action = actions[suspect].normal[obj.location];
		obj.relationship = relationships[suspect].normal;
		obj.otherCharacter = otherCharacters[suspect].normal;
	}
	return obj;
}




