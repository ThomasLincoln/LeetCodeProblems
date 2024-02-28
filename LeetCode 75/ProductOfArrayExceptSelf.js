/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
 * solution is based on get the product between all single values and your left neighbourhoods
 * and in the next step, we do the same with the right side
 *
 * And finally we do the product between the two arrays
 *
 */

const input = [0, 0]

var productExceptSelf = function(nums) {
  let n = nums.length
  let prefix = new Array(n).fill(1);

  // produto do lado esquerdo de todos eles
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      prefix[i] = 1
    } else {
      prefix[i] = nums[i - 1] * prefix[i - 1]
    }
  }

  let sufix = new Array(n).fill(1);

  // produto do lado direito de todos eles
  for (let i = n - 1; i >= 0; i--) {
    if (i === n - 1) {
      sufix[i] = 1
    } else {
      sufix[i] = nums[i + 1] * sufix[i + 1]
    }
  }

  const resposta = []

  for (let i = 0; i < n; i++) {
    resposta[i] = prefix[i] * sufix[i]
  }

  return resposta
};


