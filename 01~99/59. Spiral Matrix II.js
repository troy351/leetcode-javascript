/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    if (n === 0) return [];

    let top = 1, bottom = n - 1, left = 0, right = n - 1;
    let x = 0, y = 0, count = 0;
    const matrix = new Array(n).fill([]).map(v=>v = []);

    while (true) {
        // left to right
        while (y <= right) matrix[x][y++] = ++count;
        y--;
        x++;
        right--;
        if (top > bottom) break;

        // top to bottom
        while (x <= bottom) matrix[x++][y] = ++count;
        x--;
        y--;
        bottom--;
        if (right < left) break;

        // right to left
        while (y >= left) matrix[x][y--] = ++count;
        y++;
        x--;
        left++;
        if (top > bottom) break;

        // bottom to top
        while (x >= top) matrix[x--][y] = ++count;
        x++;
        y++;
        top++;
        if (right < left) break;

    }

    return matrix;
};