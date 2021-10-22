import { clueArray } from '../clue_array.js';

describe('Clue Array', () => {
	test('should return array of clues', () => {
		const clues = clueArray('shooting');
		console.log(clues);
		expect(Array.isArray(clues)).toBe(true);
	});
})