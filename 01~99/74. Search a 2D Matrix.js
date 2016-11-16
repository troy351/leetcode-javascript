/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const row = matrix.length, column = matrix[0].length;

    // get row
    let left = 0, right = row - 1;
    while (left < right - 1) {
        const mid = (left + right) >> 1;
        if (matrix[mid][column - 1] < target) {
            left = mid;
        } else {
            right = mid;
        }
    }

    let r = matrix[left][column - 1] >= target ? left : right;

    //get column
    left = 0;
    right = column - 1;
    while (left < right - 1) {
        const mid = (left + right) >> 1;
        if (matrix[r][mid] < target) {
            left = mid;
        } else {
            right = mid;
        }
    }

    return matrix[r][left] === target || matrix[r][right] === target;
};