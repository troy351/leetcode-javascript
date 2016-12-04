/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function (s1, n1, s2, n2) {
    const rapport = [], rest = [];
    let b = -1, posRest = 0, rap = 0, last = -1;
    rapport[0] = rest[0] = 0;
    for (let i = 1; i <= s2.length + 1; i++) {
        for (let j = 0; j < s1.length; j++) {
            if (s2[posRest] === s1[j]) {
                posRest++;
                if (posRest === s2.length) {
                    rap++;
                    posRest = 0;
                }
            }
        }

        for (let k = 0; k < i; k++) {
            if (posRest === rest[k]) {
                b = k;
                last = i;
                break;
            }
        }

        rapport[i] = rap;
        rest[i] = posRest;
        if (b >= 0)break;
    }
    let interval = last - b;
    if (b >= n1) return rapport[n1];
    return ((n1 - b) / interval * (rapport[last] - rapport[b]) + rapport[b] + rapport[(n1 - b) % interval]) / n2 >> 0;
};