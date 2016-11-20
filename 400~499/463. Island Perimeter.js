/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let perimeters = 0;
    let used = new Array(grid.length).fill(0).map(v=>new Array(grid[0].length).fill(false));

    const search = (x, y)=> {
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] === 0 || used[x][y] === true) return;
        used[x][y] = true;
        let edges = 4;
        // left
        if (y > 0 && grid[x][y - 1] === 1) edges--;
        // right
        if (y < grid[0].length - 1 && grid[x][y + 1] === 1) edges--;
        // top
        if (x > 0 && grid[x - 1][y] === 1) edges--;
        // bottom
        if (x < grid.length - 1 && grid[x + 1][y] === 1) edges--;

        perimeters += edges;

        search(x - 1, y);
        search(x + 1, y);
        search(x, y - 1);
        search(x, y + 1);
    };

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                search(i, j);
                return perimeters;
            }
        }
    }

    return perimeters;
};