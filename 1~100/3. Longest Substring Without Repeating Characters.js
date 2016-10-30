/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s === '') {
        return 0;
    }
    // trick for string includes the end charactor
    s += s[s.length - 1];

    var map = new Map();
    var start = 0, i = 0, max = 0;
    while (i < s.length) {
        if (map.has(s[i])) {
            if (i - start > max) {
                max = i - start;
            }

            // start from where the duplicate character shows
            start = map.get(s[i]) + 1;
            i = start;
            map.clear();
        }

        map.set(s[i], i);
        i++;
    }

    return max;
};