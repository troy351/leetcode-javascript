/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const result = [];

    const swap = (a, b)=> {
        const temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    };

    const getPermutations = (n)=> {
        if (n === nums.length - 1) {
            result.push(nums.slice());
        } else {
            for (let i = n; i < nums.length; i++) {
                swap(i, n);
                getPermutations(n + 1);
                swap(i, n);
            }
        }
    };

    getPermutations(0);

    return result;
};