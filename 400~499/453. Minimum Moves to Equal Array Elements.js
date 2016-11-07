/**
 * Note: incrementing n - 1 elements by 1 equals decrementing 1 element by 1.
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    var sum = 0, min = Number.MAX_VALUE;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        min = Math.min(min, nums[i]);
    }
    return sum - min * nums.length;

    // one line version
    // return nums.reduce(function (a, b) {return a + b;}) - nums.length * Math.min.apply(null, nums);
};