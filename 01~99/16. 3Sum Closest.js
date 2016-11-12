/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort(function (a, b) {
        return a - b;
    });

    let i = 0, closest = Number.MAX_VALUE;

    while (i < nums.length - 2) {
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            var sum = nums[i] + nums[j] + nums[k];
            if (Math.abs(sum - target) < Math.abs(closest - target)) closest = sum;
            if (sum <= target) while (nums[j] === nums[++j] && j <= k);
            if (sum >= target) while (nums[k--] === nums[k] && j <= k);
        }
        while (nums[i] === nums[++i] && i < nums.length - 2);
    }

    return closest;
};