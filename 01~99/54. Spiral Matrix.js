/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix.length === 0) return [];

    let top = 1, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;
    let x = 0, y = 0;
    const result = [];

    while (true) {
        // left to right
        while (y <= right) result.push(matrix[x][y++]);
        y--;
        x++;
        right--;
        if (top > bottom) break;

        // top to bottom
        while (x <= bottom) result.push(matrix[x++][y]);
        x--;
        y--;
        bottom--;
        if (right < left) break;

        // right to left
        while (y >= left) result.push(matrix[x][y--]);
        y++;
        x--;
        left++;
        if (top > bottom) break;

        // bottom to top
        while (x >= top) result.push(matrix[x--][y]);
        x++;
        y++;
        top++;
        if (right < left) break;

    }

    return result;
};