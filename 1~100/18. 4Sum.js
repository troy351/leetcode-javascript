/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort(function (a, b) {
        return a - b;
    });
    var map = new Map();
    var result = [];
    var current = Number.MAX_VALUE;

    for (var i = 0; i < nums.length; i++) {
        if (current === nums[i]) continue;
        var tNums = nums.slice();
        current = nums[i];
        tNums.splice(i, 1);
        threeSum(tNums, target - current);
    }

    return result;

    // used code from question 15, made some small changes
    function threeSum(nums, target) {
        var i = 0;
        while (i < nums.length - 2) {
            var j = i + 1;
            var k = nums.length - 1;
            while (j < k) {
                var sum = nums[i] + nums[j] + nums[k];
                if (sum === target) {
                    var key = [nums[i], nums[j], nums[k], current].sort();
                    if (!map.get(key.toString())) {
                        // result.push(key);
                        map.set(key.toString(), 1);
                    }
                    result.push(key);
                }
                if (sum <= target) while (nums[j] == nums[++j] && j < k);
                if (sum >= target) while (nums[k--] == nums[k] && j < k);
            }
            while (nums[i] == nums[++i] && i < nums.length - 2);
        }
    }
};