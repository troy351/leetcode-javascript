/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let total = 0, start = 0, max = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < gas.length; i++) {
        total += gas[i] - cost[i];
        if (total < max) {
            max = total;
            start = i;
        }
    }
    return total < 0 ? -1 : (start + 1) % gas.length;
};

console.log(canCompleteCircuit([4], [5]));