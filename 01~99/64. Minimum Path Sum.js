/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const m = grid.length, n = grid[0].length;
    const map = new Array(m).fill(0).map((v)=>v = []);

    map[0][0] = grid[0][0];
    for (let i = 1; i < m; i++) {
        map[i][0] = map[i - 1][0] + grid[i][0];
    }

    for (let i = 1; i < n; i++) {
        map[0][i] = map[0][i - 1] + grid[0][i];
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            map[i][j] = grid[i][j] + Math.min(map[i - 1][j], map[i][j - 1]);
        }
    }

    return map[m - 1][n - 1];
};