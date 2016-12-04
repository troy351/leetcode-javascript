/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function (p) {
    if (p.length === 0) return 0;

    p += p[p.length - 1];
    const sub = new Array(26).fill(0).map(() => new Set()), charCode = p.split('').map(v => v.charCodeAt(0) - 97);
    let start = 0, end = 0;
    while (true) {
        while (charCode[end + 1] - charCode[end] === 1 || charCode[end] - charCode[end + 1] === 25) end++;
        if (end === p.length - 1) break;
        let pos = start;
        while (pos <= end) {
            for (let j = pos; j <= end; j++) {
                sub[charCode[pos]].add(j - pos);
            }
            pos++;
            if (charCode[pos] === charCode[start]) break;
        }
        end++;
        start = end;
    }

    let count = 0;
    sub.forEach(set => count += set.size);
    return count;
};