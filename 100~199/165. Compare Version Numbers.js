/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    const v1 = version1.split('.').map(v => +v);
    const v2 = version2.split('.').map(v => +v);
    const length = Math.max(v1.length, v2.length);

    for (let i = 0; i < length; i++) {
        const l1 = v1[i] || 0;
        const l2 = v2[i] || 0;
        if (l1 > l2) {
            return 1;
        } else if (l1 < l2) {
            return -1;
        }
    }

    return 0;
};