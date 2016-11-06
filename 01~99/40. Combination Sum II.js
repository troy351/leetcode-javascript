/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    // sort candidates
    candidates.sort(function (a, b) {
        return a - b;
    });

    for (var end = candidates.length - 1; end >= 0; end--) {
        if (candidates[end] <= target) break;
    }

    var results = [], result = [], repetition = {};
    findCombination(target, end);

    function findCombination(n, pos) {
        // out of range
        if (pos < -1 || n < 0) return;
        // found a solution
        if (n === 0) {
            if (repetition[result.toString()] === undefined) {
                results.push(result.slice());
                repetition[result.toString()] = 1;
            }
            return;
        }

        while (candidates[pos] > n) pos--;

        for (var i = pos; i >= 0; i--) {
            result.push(candidates[i]);
            findCombination(n - candidates[i], i - 1);
            result.pop();
        }
    }

    return results;
};