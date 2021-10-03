import { sum, subtract, multiply, divide } from '../src/calculator.js';

describe('Calculator Test', () => {
	it('Sum Test', () => {
		expect(sum(10, 5)).toBe(15);
	});

	it('Subtract Test', () => {
		expect(subtract(10, 5)).toBe(5);
	});

	it('Multiply Test', () => {
		expect(multiply(10, 5)).toBe(50);
	});

	it('Divide Test', () => {
		expect(divide(10, 5)).toBe(2);
	});
});
