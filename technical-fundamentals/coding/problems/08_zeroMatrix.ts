// 8. *Zero Matrix*:

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

type Matrix = number[][];

export default function zeroMatrix(matrix: Matrix) {
  let zeroIndexes: [number, number][] = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const n = matrix[row][col];
      if (n === 0) {
        zeroIndexes.push([row, col]);
      }
    }
  }

  for (let i = 0; i < zeroIndexes.length; i++) {
    const [row, col] = zeroIndexes[i];
    matrix[row] = new Array(matrix[row].length).fill(0);
    for (let j = 0; j < matrix[row].length; j++) {
      matrix[j][col] = 0;
    }
  }
}
