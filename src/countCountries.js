/**
 * given a zero-indexed matrix A consisting of N rows and M columns of integers, returns the number of different
 * countries to which the areas of the map described by matrix A belong.
 * 
 * Two areas on the map belong to the same country if the following conditions are met:

        they have the same number;
        it is possible to travel from one area to the other orthogonally (that is, by moving only north, south, west or east) 
        without moving over areas of a different number.
 * 
 * @param {number[][]} islands - a 2d array of numbers representing land masses
 */
function countCountries(islands) {
  if (!(islands && islands.length)) return 0;
  let countriesCount = 0;
  for (let i = 0; i < islands.length; i++) {
    for (let j = 0; j < islands[i].length; j++) {
      const land = islands[i][j];
      if (typeof land !== "number") continue;
      countriesCount++;

      recursivelyNullSurroundings(islands, i, j);
    }
  }
  return countriesCount;
}

function recursivelyNullSurroundings(islands, row, col) {
  const val = islands[row][col];
  islands[row][col] = null;
  const up = islands[row - 1]?.[col];
  if (up === val) recursivelyNullSurroundings(islands, row - 1, col);
  const right = islands[row]?.[col + 1];
  if (right === val) recursivelyNullSurroundings(islands, row, col + 1);
  const down = islands[row + 1]?.[col];
  if (down === val) recursivelyNullSurroundings(islands, row + 1, col);
  const left = islands[row]?.[col - 1];
  if (left === val) recursivelyNullSurroundings(islands, row, col - 1);
}

module.exports = countCountries;
