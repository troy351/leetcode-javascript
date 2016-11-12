/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const num = nums.slice().sort((a, b)=>a - b);

    let l = 0, r = num.length - 1;
    while (l < r) {
        if (num[l] + num[r] === target)
            // reverse for `num * 2 == target`
            return [nums.findIndex(v=>v === num[l]), nums.length - 1 - nums.reverse().findIndex(v=>v === num[r])];
        else if (num[l] + num[r] < target) l++;
        else r--;
    }
};