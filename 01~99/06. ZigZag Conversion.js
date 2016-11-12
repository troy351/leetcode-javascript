/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    const span = numRows * 2 - 2;
    if (span === 0) return s;

    let result = '';
    for (let i = 0; i < numRows; i++) {
        for (let j = i; j < s.length; j += span) {
            result += s[j];
            if (i !== 0 && i !== numRows - 1 && j + span - 2 * i < s.length) {
                result += s[j + span - 2 * i];
            }
        }
    }

    return result;
};

/*
 What is ZigZag pattern?

 *     *     *     *     *     *     *     *     *     *     *     *     *     *     *
 *    **    **    **    **    **    **    **    **    **    **    **    **    **    **
 *   * *   * *   * *   * *   * *   * *   * *   * *   * *   * *   * *   * *   * *   * *
 *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *
 * *   * *   * *   * *   * *   * *   * *   * *   * *   * *   * *   * *   * *   * *   *
 **    **    **    **    **    **    **    **    **    **    **    **    **    **    *
 *     *     *     *     *     *     *     *     *     *     *     *     *     *     *

 */