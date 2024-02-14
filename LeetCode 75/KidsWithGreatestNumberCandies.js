/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

var kidsWithCandies = function (candies, extraCandies) {
  const maior = Math.max.apply(0, candies);
  return resposta = candies.map((x) => {
   return x + extraCandies >= maior
  })
};

