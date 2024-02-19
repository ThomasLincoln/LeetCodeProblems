/**
 * @param {string} s
 * @return {string}
 */

Input: s = "leetcode";
Output: "leotcede";

function isVowel(x) {
  var result;

  result = x == "a" || x == "e" || x == "i" || x == "o" || x == "u";
  return result;
}

function swap(x, y, string) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    newString += i === x ? string[y] : i === y ? string[x] : string[i];
  }

  return newString;
}

function findFirstVowel(s, i, j) {
  while (i < j) {
    if (isVowel(s[i])) {
      return i;
    }
    i++;
  }
}

function findLastVowel(s, i, j) {
  while (j > i) {
    if (isVowel(s[j])) {
      return j;
    }
    j--;
  }
}

var reverseVowels = function (s) {
  let newString = s;
  const size = s.length;
  let i = 0,
  j = size - 1;
  
  while (i < j) {
    i = findFirstVowel(newString, i, j);
    // console.log(`First Vowel ${s[i]}`);

    j = findLastVowel(newString, i, j);
    // console.log(`Last Vowel ${s[j]}`)

    newString = swap(i, j, newString);
    console.log(newString);
    i--;
    j--;
  }
  
  return newString;
};

console.log(reverseVowels("leetcode"));
