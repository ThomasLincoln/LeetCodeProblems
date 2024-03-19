/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {

  const n = height.length

  let indexBarraEsquerda = 0;
  let indexBarraDireita = n - 1;
  let area = 0;

  while (indexBarraEsquerda < indexBarraDireita) {
    let alturaEsquerda = height[indexBarraEsquerda]
    let alturaDireita = height[indexBarraDireita]

    const alturaFinal = decidirAltura(alturaEsquerda, alturaDireita)
    const larguraFinal = indexBarraDireita - indexBarraEsquerda

    area = Math.max(alturaFinal * larguraFinal, area)

    if (alturaEsquerda <= alturaDireita) {
      indexBarraEsquerda++;
    } else {
      indexBarraDireita--;
    }
  }
  return area
};


const decidirAltura = (altura1, altura2) => {
  if (altura1 >= altura2) {
    return altura2
  } else {
    return altura1
  }
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
const resposta = maxArea(height)
console.log(resposta)
