/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let indexEsquerda = 0;
  let indexDireita = k;
  let maxAverage = -Infinity

  let soma = 0

  for (let i = 0; i < indexDireita; i++) {
    soma += nums[i]
  }

  while (indexDireita <= nums.length) {
    maxAverage = Math.max(soma / k, maxAverage)
    soma -= nums[indexEsquerda]
    soma += nums[indexDireita]
    indexDireita++;
    indexEsquerda++;
  }
  return maxAverage
};


const nums = [-1], k = 1;
const resposta = findMaxAverage(nums, k)
console.log(resposta)
