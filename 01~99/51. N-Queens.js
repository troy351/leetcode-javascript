/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const column = new Array(n).fill(true), cross = new Array(n * 2 - 1).fill(true), xcross = cross.slice();
    const result = [], position = [];

    const search = (r, c)=> {
        if (r === n) {
            const map = [];
            for (let i = 0; i < n; i++) {
                const line = new Array(n).fill('.');
                line[position[i]] = 'Q';
                map.push(line.join(''));
            }
            result.push(map);
            return;
        }

        if (c === n) return;

        if (column[c] && cross[n - (r - c) - 1] && xcross[r + c]) {
            column[c] = false;
            cross[n - (r - c) - 1] = false;
            xcross[r + c] = false;

            position[r] = c;
            search(r + 1, 0);

            column[c] = true;
            cross[n - (r - c) - 1] = true;
            xcross[r + c] = true;
        }
        search(r, c + 1);
    };

    search(0, 0);

    return result;
};