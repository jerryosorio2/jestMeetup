describe('Objects Test', () => {
	it('Object validation', () => {
		const data = { username: 'jerry_osorio' };
		const data2 = { username: 'jerry' };
		const data3 = { username: 'jerry' };
		expect(data2).toEqual(data3);
		expect(data).not.toEqual(data3);
	});
});
