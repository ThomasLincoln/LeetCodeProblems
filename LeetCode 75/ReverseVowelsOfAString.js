/**
 * @param {string} s
 * @return {string}
 */

Input: s = "leetcode";
Output: "leotcede";

function isVowel(x) {
  let result;
  result =
    x == "a" ||
    x == "e" ||
    x == "i" ||
    x == "o" ||
    x == "u" ||
    x == "A" ||
    x == "E" ||
    x == "I" ||
    x == "O" ||
    x == "U";
  return result;
}

function swap(x, y, str) {
  let a = str[x];
  let b = str[y];
  let aux = a;
  str[x] = b;
  str[y] = aux;
  return str;
}

var reverseVowels = function (s) {
  let newString = s.split(""),
    auxString = s,
    numberOfSwaps,
    i = 0,
    j = s.length,
    firstVowel,
    secondVowel,
    numberOfVowels;

  // Get the number of vowels if have one
  if (s.match(/[aeiou]/gi) != null) {
    numberOfVowels = s.match(/[aeiou]/gi).length;
  } else {
    return s;
  }

  // Get the number of swaps
  if (numberOfVowels % 2 == 0) {
    numberOfSwaps = numberOfVowels / 2;
  } else {
    numberOfSwaps = parseInt((numberOfVowels - 1) / 2);
  }

  // Making swaps if it is needed
  console.log(numberOfSwaps);
  while (numberOfSwaps != 0) {
    firstVowel = false;
    secondVowel = false;
    // console.log("Indices: "+ i + j)
    while (i < j && firstVowel == false) {
      firstVowel = isVowel(newString[i]);
      if (!firstVowel) {
        i++;
      }
    }
    if (firstVowel) {
      while (j >= i && secondVowel == false) {
        secondVowel = isVowel(newString[j]);
        if (!secondVowel) {
          j--;
        }
      }
    }
    // console.log("I find the first vowel " + newString[i]);
    // console.log("I find the second vowel " + newString[j])
    // console.log(`I will change ${newString[i]} and ${newString[j]}`)
    if (firstVowel && secondVowel) {
      newString = swap(i, j, newString);
    }
    // console.log("I made a swap look at it: " + auxString)
    numberOfSwaps--;
    i++;
    j--;
  }
  auxString = newString.join("");
  return auxString;
};

// const test = "A new order began, a more Roman age bred Rowena.";
// const resposta = "a new order began, a more Roman age bred RowenA."
// console.log("input: " + test);
// console.log("output: " + reverseVowels(test) + resposta);
