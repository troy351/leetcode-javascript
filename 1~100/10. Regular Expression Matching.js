/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    return backTrack(s, s.length, p, p.length);
};

function backTrack(s, i, p, j) {
    if (i === 0 && j === 0) return true;
    if (i !== 0 && j === 0) return false;
    if (i === 0 && j !== 0) {
        // matches '' with 'C*C*C*'
        if (p[j - 1] === '*') return backTrack(s, i, p, j - 2);
        return false;
    }

    // both i and j are not null
    if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        return backTrack(s, i - 1, p, j - 1);
    } else if (p[j - 1] === '*') {
        // '*' matches 0 time
        if (backTrack(s, i, p, j - 2)) return true;
        // '*' matches 1 time, decrease 1 time from string `s`
        if (s[i - 1] === p[j - 2] || p[j - 2] === '.') return backTrack(s, i - 1, p, j);
        return false;
    }
    return false;
}