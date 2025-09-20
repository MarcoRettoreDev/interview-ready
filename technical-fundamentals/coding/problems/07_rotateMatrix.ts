// 7. *Rotate Matrix*:

// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

type Matrix = number[][];

export default function rotateMatrix(matrix: Matrix) {
  // [1,2,3]
  // [4,5,6]
  // [7,8,9]
  // =>
  // [1,4,7]
  // [2,5,8]
  // [3,6,9]

  // row,col  col, row
  // 0,1 -> 1, 0
  // 0,2 -> 2, 0
  //
  // 1,0 -> 0, 1
  // 1,2 -> 2, 1
  //
  // 2,0 -> 0, 2
  // 2,1 -> 1, 2

  for (let row = 0; row < matrix.length; row++) {
    for (let col = row + 1; col < matrix[row].length; col++) {
      if (col !== row) {
        let temp = matrix[col][row];
        matrix[col][row] = matrix[row][col];
        matrix[row][col] = temp;
      }
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    matrix[row].reverse();
  }

  return matrix;
}
