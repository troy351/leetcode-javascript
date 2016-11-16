/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const cur = new Array(word1.length + 1).fill(0).map((v, i)=>i);

    for (let j = 1; j <= word2.length; j++) {
        let pre = cur[0];
        cur[0] = j;
        for (let i = 1; i <= word1.length; i++) {
            const temp = cur[i];
            cur[i] = word1[i - 1] === word2[j - 1] ? pre : Math.min(pre, cur[i], cur[i - 1]) + 1;
            pre = temp;
        }
    }

    return cur[word1.length];
};