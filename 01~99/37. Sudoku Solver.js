/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    var found = false;
    var candidates = findCandidates();

    solve();

    function solve() {
        if (found || isFull()) {
            found = true;
            return;
        }

        var cell = findMinCandidatesCell();
        if (cell !== null) {
            // try every possible number in current cell
            for (var i = 0; i < cell.values.length; i++) {
                // set cell to new number
                board[cell.x][cell.y] = cell.values[i] + '';

                // remove current number from candidates, because it's been used
                var t1 = 1 << (cell.values[i] - 1) ^ 0x1FF;
                candidates.row[cell.x] &= t1;
                candidates.column[cell.y] &= t1;
                candidates.block[Math.floor(cell.x / 3) * 3 + Math.floor(cell.y / 3)] &= t1;

                solve();

                // put back current number into candidates
                var t2 = 1 << (cell.values[i] - 1);
                candidates.row[cell.x] |= t2;
                candidates.column[cell.y] |= t2;
                candidates.block[Math.floor(cell.x / 3) * 3 + Math.floor(cell.y / 3)] |= t2;

                if (found) return;
            }
            // every possible numbers are checked, so put the cell back to '.'
            board[cell.x][cell.y] = '.';
        }
    }

    // find the empty cell which may contains least possible numbers
    function findMinCandidatesCell() {
        var minCount = Number.MAX_VALUE;
        var cell = null;
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                if (board[i][j] === '.') {
                    // get remain numbers combine row/column/block
                    var c = candidates.row[i] & candidates.column[j] & candidates.block[Math.floor(i / 3) * 3 + Math.floor(j / 3)];
                    // if no number can be filled in this cell, return null
                    if (c === 0) return null;
                    // find the cell contains least values, and save these values
                    var count = 0, value = 0, values = [];
                    while (c > 0) {
                        value++;
                        if ((c & 1) === 1) {
                            count++;
                            values.push(value);
                        }
                        c >>>= 1;
                    }
                    if (count < minCount) {
                        minCount = count;
                        cell = {x: i, y: j, values: values};
                    }
                }
            }
        }

        return cell;
    }

    // find all possible numbers in every row/column/block, saved as binary
    // e.g. `row[i] = 200` row i still lack of 4,6,8 because 200(10) = 11001000(2)
    function findCandidates() {
        var row = [], column = [], block = [];
        var i, j;
        for (i = 0; i < 9; i++) {
            for (j = 0; j < 9; j++) {
                if (board[i][j] !== '.') {
                    var num = parseInt(board[i][j]) - 1;

                    if (row[i]) row[i] |= 1 << num;
                    else row[i] = 1 << num;

                    if (column[j]) column[j] |= 1 << num;
                    else column[j] = 1 << num;

                    var bn = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                    if (block[bn]) block[bn] |= 1 << num;
                    else block[bn] = 1 << num;
                }
            }
        }

        for (i = 0; i < 9; i++) {
            row[i] ^= 0x1FF;
            column[i] ^= 0x1FF;
            block[i] ^= 0x1FF;
        }

        return {row: row, column: column, block: block};
    }

    // check if the board is full (without '.') or not.
    function isFull() {
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                if (board[i][j] === '.') return false;
            }
        }
        return true;
    }
};