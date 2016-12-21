/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function (p) {
    // count[i] is the maximum unique substring end with ith letter.
    // 0 - 'a', 1 - 'b', ..., 25 - 'z'.
    const count = Array.from({length: 26}).fill(0);

    // store longest contiguous substring ends at current position.
    let maxLengthCur = 0;

    for (let i = 0; i < p.length; i++) {
        if (i > 0 && (p.charCodeAt(i) - p.charCodeAt(i - 1) === 1 || p.charCodeAt(i - 1) - p.charCodeAt(i) === 25)) {
            maxLengthCur++;
        } else {
            maxLengthCur = 1;
        }

        const index = p.charCodeAt(i) - 97;
        count[index] = Math.max(count[index], maxLengthCur);
    }

    // Sum to get result
    return count.reduce((a, b) => a + b, 0);
};