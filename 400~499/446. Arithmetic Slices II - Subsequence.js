/**
 * May get TIME LIMIT EXCEEDED, still need to find a more efficient algorithm
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function (A) {
    let res = 0;
    const dp = [];

    for (let i = 0; i < A.length; i++) {
        dp[i] = new Map();

        for (let j = 0; j < i; j++) {
            const diff = A[i] - A[j];

            if (diff > 2147483647 || diff < -2147483648) continue;

            if (j === 0) {
                dp[i].set(diff, 1);
                continue;
            }

            let count = 1;
            if (dp[j].has(diff)) {
                const temp = dp[j].get(diff);
                count += temp;
                res += temp;
            }

            dp[i].set(diff, (dp[i].get(diff) || 0) + count);
        }
    }

    return res;
};