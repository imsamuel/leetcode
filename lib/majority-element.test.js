const majorityElement = require('./majority-element');

test('returns the majority element from an array of integers', () => {
  const cases = [
    {
      given: [3, 2, 3],
      want: 3,
    },
    {
      given: [2, 2, 1, 1, 1, 2, 2],
      want: 2,
    },
    {
      given: [1],
      want: 1,
    },
  ];

  cases.forEach((c) => {
    const { given, want } = c;
    expect(majorityElement(given)).toBe(want);
  });
});

test('throws an error if array does not contain a majority element', () => {
  expect(() => majorityElement([1, 2, 3])).toThrow();
});
