/**
 * @param {character[]} chars
 * @return {number}
 */

const input = ["a", "a", "b", "b", "c", "c", "c"];
//Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
//Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

var compress = function (chars) {
  if (!chars.length) return 0;
  let letraAtual = chars[0]
  let count = 0;
  let index2 = 0;
  for(let i = 0; i<= chars.length; ++i){ //++i pq a gente qr ler o valor e só depois avançar, pra nao perder o último
    if(letraAtual == chars[i]){
      count++;
    }else{
      chars[index2] = letraAtual
      if(count > 1){
        const countString = count.toString()
        for(let j = 0; j < countString.length; ++j){
          chars[++index2] = countString[j]
        }
      }
      index2++;
      letraAtual = chars[i]
      count = 1;
    }
  }

  return index2;
};

const resposta = compress(input);
console.log(resposta);
