/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                for (let k = 0; k < matrix.length; k++)
                    matrix[k][j] = matrix[k][j] === 0 ? 0 : null;
                for (let k = 0; k < matrix[0].length; k++)
                    matrix[i][k] = matrix[i][k] === 0 ? 0 : null;
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === null) {
                matrix[i][j] = 0;
            }
        }
    }
};