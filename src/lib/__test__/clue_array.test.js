import { clueArray } from '../clue_array.js';

describe('Clue Array', () => {
	test('should return array of clues', () => {
		const clues = clueArray('shooting');
		expect(Array.isArray(clues)).toBe(true);
	});

	test('should return array of clues based on a specific murder method', () => {
		const clues = clueArray('poison');
		console.log(clues);
		expect(clues).toEqual(['empty bottle']);
	});
})