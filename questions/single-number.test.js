const singleNumber = require('./single-number');

test('returns the number that appears once', () => {
  const cases = [
    {
      given: [2, 2, 1],
      want: 1,
    },
    {
      given: [4, 1, 2, 1, 2],
      want: 4,
    },
  ];

  cases.forEach((c) => {
    const { given, want } = c;
    expect(singleNumber(given)).toBe(want);
  });
});
