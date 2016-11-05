/**
 * 1. Start from its last element, traverse backward to find the first one with index i that satisfy num[i-1] < num[i].
 * 2. Do the same as above, find j between i and length-1 that satisfy nums[j] > nums[i-1], for nums[i .. length-1] is in descending order, so just find first one then break.
 * 3. Exchange nums[i-1] with nums[j]
 * 4. Reverse nums[i .. length-1]
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    for (var i = nums.length - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            for (var j = nums.length - 1; j >= i; j--) {
                if (nums[j] > nums[i - 1]) break;
            }
            exchange(j, i - 1);
            break;
        }
    }

    var mid = (nums.length + i - 1) / 2;
    for (; i < mid; i++) {
        exchange(i, mid * 2 - i);
    }

    function exchange(a, b) {
        var temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    }
};