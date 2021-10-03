describe('Numbers test', () => {
	it('Numbers Test', () => {
		expect(10).toBeGreaterThan(5);
		expect(10).toBeGreaterThanOrEqual(10);
		expect(10).toBeLessThan(15);
		expect(10).toBeLessThanOrEqual(10);
		expect(10).toBe(10);
		expect(10).toEqual(10);
		expect(10 / 3).toBeCloseTo(3.33);
	});
});
