/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    var row = [], column = [], block = [];
    var i, j;
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                var num = parseInt(board[i][j]) - 1;

                if (row[i])
                    if (1 << num & row[i]) return false;
                    else row[i] = row[i] | (1 << num);
                else row[i] = 1 << num;

                if (column[j])
                    if (1 << num & column[j]) return false;
                    else column[j] = column[j] | (1 << num);
                else column[j] = 1 << num;

                var bn = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (block[bn])
                    if (1 << num & block[bn]) return false;
                    else block[bn] = block[bn] | (1 << num);
                else block[bn] = 1 << num;
            }
        }
    }
    return true;
};