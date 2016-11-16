/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let found = false;
    const used = new Array(board.length).fill(0).map(()=>new Array(board[0].length));

    const search = (x, y, pos)=> {
        if (found || pos === word.length) {
            found = true;
            return;
        }
        // out of boundary or used
        if (x < 0 || x >= board.length || y < 0 || y >= board[0].length || used[x][y]) return;

        if (board[x][y] === word[pos]) {
            used[x][y] = true;
            search(x - 1, y, pos + 1);
            search(x + 1, y, pos + 1);
            search(x, y - 1, pos + 1);
            search(x, y + 1, pos + 1);
            used[x][y] = false;
        }
    };

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (word[0] === board[i][j]) {
                used.forEach(v=>v.fill(false));
                search(i, j, 0);
                if (found) return found;
            }
        }
    }

    return found;
};