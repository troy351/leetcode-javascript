/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const result = [], solution = [];

    const search = (count, number)=> {
        if (count === 0) {
            result.push(solution.slice());
            return;
        }

        for (let i = number + 1; i <= n; i++) {
            solution.push(i);
            search(count - 1, i);
            solution.pop();
        }
    };

    search(k, 0);

    return result;
};