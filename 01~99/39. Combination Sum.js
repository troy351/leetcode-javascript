/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    // sort candidates
    candidates.sort(function (a, b) {
        return a - b;
    });

    for (var end = candidates.length - 1; end >= 0; end--) {
        if (candidates[end] <= target) break;
    }

    var results = [], result = [];
    findCombination(target, end);

    function findCombination(n, pos) {
        // out of range
        if (pos < 0 || n < 0) return;
        // found a solution
        if (n === 0) {
            results.push(result.slice());
            return;
        }

        while (candidates[pos] > n) pos--;

        for (var i = pos; i >= 0; i--) {
            result.push(candidates[i]);
            findCombination(n - candidates[i], i);
            result.pop();
        }
    }

    return results;
};