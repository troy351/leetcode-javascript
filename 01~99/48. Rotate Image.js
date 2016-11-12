/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    for (let layer = 0; layer < matrix.length / 2; layer++) {
        const first = layer;
        const last = matrix.length - 1 - layer;

        for (let i = layer; i < last; i++) {
            const offset = i - layer;
            const temp = matrix[first][i];
            // left bottom to left top
            matrix[first][i] = matrix[last - offset][first];
            // right bottom to left bottom
            matrix[last - offset][first] = matrix[last][last - offset];
            // right top to right bottom
            matrix[last][last - offset] = matrix[i][last];
            // left top to right top
            matrix[i][last] = temp;
        }
    }
};