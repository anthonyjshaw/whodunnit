import camelCaseName from "../__utils__/camel_case_name";

describe('Camel Case Name', () => {
	test('should return a string', () => {
		expect(typeof camelCaseName('David Jones')).toBe('string');
	});

	test('should return same string if length is less than 2', () => {
		expect(camelCaseName('David')).toBe('David');
	});

	test('should return a camelCase version of the name', () => {
		expect(camelCaseName('david jones')).toBe('davidJones');
	});
})