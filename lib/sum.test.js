const sum = require('./sum');

test('returns the sum of numbers from an array', () => {
  const cases = [
    {
      given: [],
      want: 0,
    },
    {
      given: [9],
      want: 9,
    },
    {
      given: [1, 2],
      want: 3,
    },
    {
      given: [-12, -4],
      want: -16,
    },
  ];

  cases.forEach((c) => {
    const { given, want } = c;
    expect(sum(given)).toBe(want);
  });
});
