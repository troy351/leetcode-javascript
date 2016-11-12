/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let s = '1';

    while (n > 1) {
        let i = 0, ss = '';

        while (i < s.length) {
            let count = 1;
            while (i + 1 < s.length && s[i] === s[i + 1]) {
                count++;
                i++;
            }

            ss += count + s[i];
            i++;
        }

        s = ss;
        n--;
    }

    return s;
};