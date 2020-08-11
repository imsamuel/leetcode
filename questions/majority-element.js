// https://leetcode.com/problems/majority-element
//
// Given an array of size n, find the majority element. The majority element is the element that
// appears more than [n/2] times.
//
// You may assume that the array is non-empty and the majority element always exists in the array.
//
// Example 1:
// Input: [3, 2, 3]
// Output: 3
//
// Example 2:
// Input: [2, 2, 1, 1, 1, 2, 2]
// Output: 2

/**
 * Return the majority element (appears more than n/2 times) from a given array of integers.
 *
 * @param {number[]} nums
 * @return {number}
 * @throws Will throw an error if array does not contain a majority element.
 */
const majorityElement = (nums) => {
  const numToCount = {};
  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    if (numToCount[num] !== undefined) {
      numToCount[num] += 1;
    } else {
      numToCount[num] = 1;
    }

    if (numToCount[num] > nums.length / 2) {
      return num;
    }
  }

  throw new Error('array has to contain a majority element');
};

module.exports = majorityElement;
