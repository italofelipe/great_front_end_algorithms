/**

CHALLENGE LINK: https://www.greatfrontend.com/questions/javascript/array-square

Implement a custom Array function, Array.prototype.square() which creates a new array with the results of squaring every element within the array the .square() method is called on.

// Example:
[-2].square(); // [4]
[1, 2, 3, 4].square(); // [1, 4, 9, 16]

**/

/**
 * @return {Array<number>}
 */
Array.prototype.square = function () {
  // Using map to create a new array with each element squared
  return this.map(num => Math.pow(num, 2));
};

console.log("resultado:", [2, 4, 6].square())