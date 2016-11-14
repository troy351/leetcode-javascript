/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const row = new Array(9).fill(0), column = row.slice(), block = row.slice();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                const num = +board[i][j] - 1;

                if (1 << num & row[i]) return false;
                else row[i] = row[i] | (1 << num);

                if (1 << num & column[j]) return false;
                else column[j] = column[j] | (1 << num);

                const bn = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (1 << num & block[bn]) return false;
                else block[bn] = block[bn] | (1 << num);
            }
        }
    }

    return true;
};