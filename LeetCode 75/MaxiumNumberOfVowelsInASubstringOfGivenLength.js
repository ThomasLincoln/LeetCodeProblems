/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var maxVowels = function(s, k) {

  let maxCount = 0;
  let inicio = 0;
  let count = 0;

  for (let index = 0; index < s.length; index++) {
    if (isVowel(s[index])) {
      count++;
    }
    if (index - inicio + 1 > k) {
      if (isVowel(s[inicio])) {
        count--;
      }
      inicio++;
    }
    maxCount = Math.max(count, maxCount)
    if (maxCount == k) {
      return maxCount
    }

  }
  return maxCount
};

function isVowel(s) {
  if (s === "a" || s === "e" || s === "i" || s === "o" || s === "u") {
    return true
  } else {
    return false
  }
}

const s = "abciiidef", k = 2
const resposta = maxVowels(s, k)
console.log(resposta)
