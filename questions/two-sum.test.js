const twoSum = require('./two-sum');

test('returns the indices of the two numbers that add up to target', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});
