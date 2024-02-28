/**
 * @param {number[]} nums
 * @return {boolean}
 */

const input = [20, 100, 10, 12, 5, 13];
// Output: true
// Explanation: Any triplet where i < j < k is valid.

var increasingTriplet = function (nums) {
  const aux = Array.from(nums);
  const n = aux.length;

  let ni = Infinity,
    nj = Infinity,
    nk = Infinity;

  for (let i = 0; i < n; i++) {
    if (ni >= aux[i]) {
      ni = aux[i];
    } else if (nj >= aux[i]) {
      nj = aux[i];
    } else if (nk >= aux[i]) {
      nk = aux[i];
    }
    if (nk < Infinity) {
      if (ni < nj && nj < nk) {
        return true;
      }
    }
  }

  return false;
};

const resposta = increasingTriplet(input);
console.log(resposta);
