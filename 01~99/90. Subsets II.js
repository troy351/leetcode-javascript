/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    nums.sort((a, b)=>a - b);
    const result = [[]];

    for (let i = 0; i < nums.length; i++) {
        // duplicate count
        let count = 1;
        while (nums[i] === nums[i + 1]) {
            i++;
            count++;
        }

        const length = result.length;
        for (let j = 0; j < length; j++) {
            const solution = result[j].slice();
            for (let k = 0; k < count; k++) {
                solution.push(nums[i]);
                result.push(solution.slice());
            }
        }
    }

    return result;
};