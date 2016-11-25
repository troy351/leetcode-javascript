/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const result = [];
    nums.sort((a, b)=>a - b);

    const getPermutations = (nums, n)=> {
        if (n === nums.length) {
            result.push(nums.slice());
        } else {
            const num = nums.slice();
            for (let i = n; i < num.length; i++) {
                if (i !== n && num[i] === num[n]) continue;
                [num[i], num[n]] = [num[n], num[i]];
                getPermutations(num, n + 1);
            }
        }
    };

    getPermutations(nums, 0);

    return result;
};