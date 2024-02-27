/**
 * @param {string} s
 * @return {string}
 */

const input = "  the    sky   is blue";
const output = "blue is sky the";

var reverseWords = function (s) {
  let answer = s;
  answer = answer.replace(/\s+/g, " ").trim();
  palavrasReviradas = answer.split(" ").reverse();
  answer = palavrasReviradas.join(" ")
  return answer;
};

// const resposta = reverseWords(input);
// console.log(resposta);
// if (resposta === output) {
//   console.log(true);
// } else {
//   console.log(false);
// }
