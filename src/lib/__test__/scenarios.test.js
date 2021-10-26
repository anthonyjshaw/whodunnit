import { relationships } from "../relationships";
import { scenarios } from "../scenarios";

describe('Scenarios', () => {
	test('should return an object', () => {
		const scenario = scenarios('Butler', "Butler", 'shooting');
		console.log(scenario);
		expect(typeof scenario).toBe("object");
	});

})