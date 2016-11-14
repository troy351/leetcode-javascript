/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    const column = new Array(n).fill(true), cross = new Array(n * 2 - 1).fill(true), xcross = cross.slice();
    const position = [];
    let result = 0;

    const search = (r, c)=> {
        if (r === n) {
            result++;
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