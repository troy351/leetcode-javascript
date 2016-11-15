/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    let pos = 0;
    const result = [];

    while (pos < words.length) {
        let len = words[pos].length, count = 0;// count is for slot count
        const strs = [words[pos++]];
        while (pos < words.length && len + words[pos].length + 1 <= maxWidth) {
            len += words[pos].length + 1;
            strs.push(words[pos++]);
            count++;
        }

        let res = strs[0];
        if (count > 0) {
            const spaces = maxWidth - (len - count);
            const slot = new Array(Math.floor(spaces / count) + 1).join(' ');

            for (let i = 1; i < count + 1; i++) {
                if (pos === words.length) res += ' ' + strs[i];
                else res += i <= spaces % count ? slot + ' ' + strs[i] : slot + strs[i];
            }
        }

        res += new Array(maxWidth - res.length + 1).join(' ');
        result.push(res);
    }

    return result;
};