/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let maxherepre = nums[0];
    let minherepre = nums[0];
    let maxsofar = nums[0];
    let maxhere, minhere;

    for (let i = 1; i < nums.length; i++) {
        maxhere = Math.max(maxherepre * nums[i], minherepre * nums[i], nums[i]);
        minhere = Math.min(maxherepre * nums[i], minherepre * nums[i], nums[i]);
        maxsofar = Math.max(maxhere, maxsofar);
        maxherepre = maxhere;
        minherepre = minhere;
    }

    return maxsofar;
};