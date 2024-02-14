/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var gcdOfStrings = function (str1, str2) {
  const tamanhoMaximo = Math.min(str1.length, str2.length)
  for (let i = tamanhoMaximo; i >=0; i--) {
    const candidate = str2.slice(0, i);
    const auxString = str1.replaceAll(candidate, "");
    if (auxString === "") {
      const auxString2 = str2.replaceAll(candidate, "");
      if (auxString2 === "") {
        return candidate;
      }
    }
  }
  return "";
};
