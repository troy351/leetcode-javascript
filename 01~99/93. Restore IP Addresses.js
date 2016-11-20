/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    const result = [], solution = [];

    const search = (pos, n)=> {
        if (n * 3 < s.length - pos || s.length - pos < n) return;
        if (n === 0 && pos === s.length) {
            result.push(solution.join('.'));
            return;
        }

        solution.push(s.substr(pos, 1));
        search(pos + 1, n - 1);
        solution.pop();

        if (s[pos] === '0') return;

        solution.push(s.substr(pos, 2));
        search(pos + 2, n - 1);
        solution.pop();

        const three = s.substr(pos, 3);
        if (+three <= 255) {
            solution.push(three);
            search(pos + 3, n - 1);
            solution.pop();
        }
    };

    search(0, 4);

    return result;
};