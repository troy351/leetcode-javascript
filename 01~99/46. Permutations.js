/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const result = [];

    const getPermutations = (n)=> {
        if (n === nums.length - 1) {
            result.push(nums.slice());
        } else {
            for (let i = n; i < nums.length; i++) {
                [nums[i], nums[n]] = [nums[n], nums[i]];
                getPermutations(n + 1);
                [nums[i], nums[n]] = [nums[n], nums[i]];
            }
        }
    };

    getPermutations(0);

    return result;
};