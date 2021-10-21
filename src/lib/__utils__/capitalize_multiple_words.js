import { capitalize } from "./capitalize";

const capitalizeMultipleWords = (s) => {
	if (s.split(' ').length === 1) {
		return capitalize(s);
	} else {
		const sentence = s.split(' ');
		return sentence.map(e => capitalize(e)).join(' '); 
	}
}

export { capitalizeMultipleWords };