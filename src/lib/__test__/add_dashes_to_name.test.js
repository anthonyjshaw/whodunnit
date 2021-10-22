import addDashesToName from "../__utils__/add_dashes_to_name.js"

describe('Add Dashes to Name', () => {
	test('should return a string', () => {
		expect(typeof addDashesToName('David Jones')).toBe('string');
	});

	test('should replace all spaces in the name with Dashes', () => {
		const dashTest = addDashesToName('David Michael Jones');
		console.log(dashTest);
		expect(dashTest).toBe('David-Michael-Jones');
	});
});