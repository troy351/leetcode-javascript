/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    const row = [];
    for (let rowNum = 0; rowNum <= rowIndex; rowNum++) {
        for (let i = row.length - 1; i > 0; i--) {
            row[i] += row[i - 1];
        }
        row.push(1);
    }

    return row;
};