/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
  nums.sort((a, b) => a - b)


  const sizeOfNums = nums.length
  let indexEsquerda = 0
  let indexDireita = sizeOfNums - 1
  let resposta = 0

  while (indexEsquerda < indexDireita) {
    let valorEsquerda = nums[indexEsquerda]
    let valorDireita = nums[indexDireita]

    let soma = valorEsquerda + valorDireita

    if (soma === k) {
      indexEsquerda++
      indexDireita--
      resposta++
    } else if (soma > k) {
      indexDireita--
    } else {
      indexEsquerda++
    }
  }

  return resposta
};


const nums = [4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4], k = 2;
const resposta = maxOperations(nums, k)
console.log(resposta)
