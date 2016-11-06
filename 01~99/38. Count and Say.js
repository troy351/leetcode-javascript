/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    var s = '1';
    while (n > 1) {
        var i = 0;
        var ss = '';
        while (i < s.length) {
            var count = 1;
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

console.log(countAndSay(50).length)