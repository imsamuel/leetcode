/**
 * Return the sum of all numbers from a given array of numbers.
 *
 * @param {number[]} nums
 * @return {number}
 */

const sum = (nums) => nums.reduce((total, num) => total + num, 0);

module.exports = sum;
