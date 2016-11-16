/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const result = [], solution = [];

    const search = (n)=> {
        result.push(solution.slice());

        for (let i = n + 1; i < nums.length; i++) {
            // skip duplicate
            while (nums[i] === nums[i + 1]) i++;
            solution.push(nums[i]);
            search(i);
            solution.pop();
        }
    };

    search(-1);

    return result;
};