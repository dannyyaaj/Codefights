function matrixElementsSum(matrix) {
let total = 0;

let bannedIndex = [];
  for (let i = 0; i < matrix.length; i ++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j] === 0){
        bannedIndex.push(j);
      }
      else if(bannedIndex.indexOf(j) === -1) {
        total += matrix[i][j];
      }
    }
  }
return total;
}

console.log(matrixElementsSum(
  [[1, 1, 1, 0], 
  [0, 5, 0, 1], 
  [2, 1, 3, 10]]));