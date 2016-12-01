/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const result = [], combination = [];

    const getPartition = (s, idx) => {
        if (idx === s.length) {
            result.push(combination.slice());
            return;
        }

        for (let i = idx; i < s.length; i++) {
            let l = idx, r = i;
            while (l < r && s[l] === s[r]) {
                l++;
                r--;
            }
            if (l >= r) {
                combination.push(s.substr(idx, i - idx + 1));
                getPartition(s, i + 1);
                combination.pop();
            }
        }
    };

    getPartition(s, 0);

    return result;
};