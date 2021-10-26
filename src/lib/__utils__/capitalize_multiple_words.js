import { capitalize } from "./capitalize";

const capitalizeMultipleWords = (str) => {
	if (str.split(' ').length === 1) {
		return capitalize(str);
	} else {
		const sentence = str.split(' ');
		return sentence.map(e => capitalize(e)).join(' '); 
	}
}

export { capitalizeMultipleWords };