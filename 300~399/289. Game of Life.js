/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    // coordinates for eight neighbors
    const dx = [-1, -1, -1, 0, 1, 1, 1, 0];
    const dy = [-1, 0, 1, 1, 1, 0, -1, -1];

    // state:
    // 0 : dead to dead
    // 1 : live to live
    // 2 : live to dead
    // 3 : dead to live
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let count = 0;
            // count live neighbors
            for (let k = 0; k < 8; k++) {
                const x = i + dx[k], y = j + dy[k];
                if (x >= 0 && x < board.length && y >= 0 && y < board[0].length && (board[x][y] == 1 || board[x][y] == 2)) {
                    ++count;
                }
            }

            // board[i][j] only could be 1 or 0 before next state
            if (board[i][j] === 1 && (count < 2 || count > 3)) {
                board[i][j] = 2;
            } else if (board[i][j] === 0 && count === 3) {
                board[i][j] = 3;
            }
        }
    }

    for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board[0].length; ++j) {
            board[i][j] %= 2;
        }
    }
};