// https://leetcode.com/problems/two-sum
//
// Given an array of integers, return indices of the two numbers such that
// they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may
// not use the same element twice.
//
// Example:
// Given nums = [2, 7, 11, 15], target = 9
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1]

/**
 * Return the indices of the two numbers that add up to the given target.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const numToIndex = {};
  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    if (numToIndex[target - num] !== undefined) {
      return [numToIndex[target - num], i];
    }

    numToIndex[num] = i;
  }

  throw new Error('array does not contain numbers that add up to target');
};

module.exports = twoSum;
