/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const result = [], row = [];

    for (let rowNum = 0; rowNum < numRows; rowNum++) {
        for (let i = row.length - 1; i > 0; i--) {
            row[i] += row[i - 1];
        }
        row.push(1);
        result.push(row.slice());
    }

    return result;
};