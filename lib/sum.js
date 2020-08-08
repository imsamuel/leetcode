/**
 * Return the sum of all numbers from a given array of numbers.
 *
 * @param {number[]} nums
 */

const sum = (nums) => {
  return nums.reduce((total, num) => {
    return total + num;
  }, 0);
};

module.exports = sum;
