import { capitalize } from "../__utils__/capitalize";

describe('Capitalize', () => {
	test('should capitalize the first character of a string', () => {
		const capitalizeTest = capitalize('dave');
		expect(capitalizeTest).toBe('Dave');
	})
})