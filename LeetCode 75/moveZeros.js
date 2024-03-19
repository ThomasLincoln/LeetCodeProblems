/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const input = [0, 1, 0, 3, 12];
// Output: [1,3,12,0,0]

var moveZeroes = function (nums) {
  let auxArray = [];
  let zerosCount = 0;
  let fast = 0;
  let slow = 0;
  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }

  for (let index = slow; index < nums.length; index++) {
    nums[index] = 0;
  }
  return nums;
};

const resultado = moveZeroes(input);
console.log(resultado);
