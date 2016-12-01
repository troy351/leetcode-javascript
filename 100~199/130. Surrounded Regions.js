/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    if (board.length === 0 || board[0].length === 0) return;

    const stack = [];

    // left and right border
    for (let i = 0; i < board.length; i++) {
        if (board[i][0] === 'O') stack.push({x: i, y: 0});
        if (board[i][board[0].length - 1] === 'O') stack.push({x: i, y: board[0].length - 1});
    }

    // top and bottom border
    for (let i = 0; i < board[0].length; i++) {
        if (board[0][i] === 'O') stack.push({x: 0, y: i});
        if (board[board.length - 1][i] === 'O') stack.push({x: board.length - 1, y: i});
    }

    while (stack.length) {
        const {x, y} = stack.pop();
        if (board[x][y] !== 'O') continue;
        board[x][y] = 'T';
        if (x + 1 < board.length && board[x + 1][y] === 'O') stack.push({x: x + 1, y: y});
        if (x > 0 && board[x - 1][y] === 'O') stack.push({x: x - 1, y: y});
        if (y + 1 < board[0].length && board[x][y + 1] === 'O') stack.push({x: x, y: y + 1});
        if (y > 0 && board[x][y - 1] === 'O') stack.push({x: x, y: y - 1});

    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            switch (board[i][j]) {
                case 'O':
                    board[i][j] = 'X';
                    break;
                case 'T':
                    board[i][j] = 'O';
                    break;
            }
        }
    }
};