/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let start = 0, end = nums.length - 1;

    while (start < end) {
        if (nums[start] < nums[end])
            return nums[start];

        const mid = (start + end) / 2 >> 0;

        if (nums[mid] >= nums[start]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }

    return nums[start];
};