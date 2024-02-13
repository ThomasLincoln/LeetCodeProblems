/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

/* Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
*/

var mergeAlternately = function (word1, word2) {
  const tamanho1 = word1.length;
  const tamanho2 = word2.length;
  let newWord = "";

  if (tamanho1 >= tamanho2) {
    for (let i = 0; i < tamanho1; i++) {
      if(i < tamanho1){
        newWord = newWord + word1[i];
      }
      if(i < tamanho2){
        newWord = newWord + word2[i];
      }
    }
  } else {
    for (let i = 0; i < tamanho2; i++) {
      if(i < tamanho1){
        newWord = newWord + word1[i];
      }
      if(i < tamanho2){
        newWord = newWord + word2[i];
      }
    }
  }
  return newWord;
};
