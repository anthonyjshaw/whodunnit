import { scenarios } from "../scenarios";

describe('Scenarios', () => {
	test('should return an object', () => {
		const scenario = scenarios('Butler', "Butler", 'shooting');
		console.log(scenario);
		expect(typeof scenario).toBe("object");
	});

	test('should return object if suspect is not culprit', () => {
		const scenario = scenarios('Lady Of The House', 'Maid', 'stabbing');
		console.log(scenario);
		expect(typeof scenario).toBe('object');
	});

});