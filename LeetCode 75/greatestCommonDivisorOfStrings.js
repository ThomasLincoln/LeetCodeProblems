/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var gcdOfStrings = function (str1, str2) {
  let resultado = "";
  for (let i = 1; i <= str2.length; i++) {
    const candidate = str2.slice(0, i);
    const auxString = str1.replaceAll(candidate, "")
    const auxString2 = str2.replaceAll(candidate, "")
    if (auxString === "" && auxString2 === "") {
      resultado = candidate
    }
  }
  return resultado;
};
