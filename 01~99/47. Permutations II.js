/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const result = [];
    nums.sort((a, b)=>a - b);

    const swap = (nums, a, b)=> {
        const temp = nums[a];
        nums[a] = nums[b];
        nums[b] = temp;
    };

    const getPermutations = (nums, n)=> {
        if (n === nums.length) {
            result.push(nums.slice());
        } else {
            const num = nums.slice();
            for (let i = n; i < num.length; i++) {
                if (i !== n && num[i] === num[n]) continue;
                swap(num, i, n);
                getPermutations(num, n + 1);
            }
        }
    };

    getPermutations(nums, 0);

    return result;
};