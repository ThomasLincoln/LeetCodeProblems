/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
/*
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
*/

var canPlaceFlowers = function (flowerbed, n) {
  
  if (flowerbed.length == 1 && flowerbed[0] == 0 && n == 1) {
    return true;
  }

  let i = 0;
  while (i <= flowerbed.length && n != 0) {
    if (flowerbed[i] == 0) {
      if (i == 0) {
        if (flowerbed[i + 1] == 0) {
          flowerbed[i] = 1;
          n--;
        }
      } else if (i == flowerbed.length - 1) {
        if (flowerbed[i - 1] == 0) {
          flowerbed[i] = 1;
          n--;
        }
      } else if (
        flowerbed[i] == 0 &&
        flowerbed[i + 1] != 1 &&
        flowerbed[i - 1] != 1
      ) {
        flowerbed[i] = 1;
        n--;
      }
    }
    i++;
  }
  return n == 0;
};

