/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    // sort candidates
    candidates.sort((a, b)=> a - b);

    let end;
    for (end = candidates.length - 1; end >= 0; end--) {
        if (candidates[end] <= target) break;
    }

    const results = [], result = [], repetition = new Set();

    const findCombination = (n, pos) => {
        // out of range
        if (pos < -1 || n < 0) return;
        // found a solution
        if (n === 0) {
            if (!repetition.has(result.toString())) {
                results.push(result.slice());
                repetition.add(result.toString());
            }
            return;
        }

        while (candidates[pos] > n) pos--;

        for (let i = pos; i >= 0; i--) {
            result.push(candidates[i]);
            findCombination(n - candidates[i], i - 1);
            result.pop();
        }
    };

    findCombination(target, end);

    return results;
};