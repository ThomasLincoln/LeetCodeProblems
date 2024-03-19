/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const substring = "axc",
  str = "ahbgdc";
// Output: true

var isSubsequence = function (s, t) {
  const len = t.length;
  let vectorAux = s;

  let i = 0;
  let j = 0;
  // Usar um while para percorrer toda a string, caso ele acha a letra,
  let letraInicial = s[j];
  while (i < len) {
    if (t[i] === letraInicial) {
      // console.log(t[i]);
      vectorAux = vectorAux.slice(1)
      j++;
      letraInicial = s[j];
    }
    i++;
  }
  if(vectorAux === ""){
    return true
  }

  // ele remove ela da string original e atualiza e segue para busca da próxima
  // Caso no final a string esteja vazia, retorna true
  return false;
};

const resultado = isSubsequence(substring, str);
console.log(resultado)
