/**
 * @param {number[]} nums
 * @return {boolean}
 */
var makesquare = function (nums) {
    if (nums.length < 4) return false;
    const totalLength = nums.reduce((a, b) => a + b, 0);
    if (totalLength % 4 !== 0) return false;

    // sort in ascending order
    nums.sort((a, b) => b - a);
    const used = new Array(nums.length).fill(false);
    let found;

    const dfs = (i, remain) => {
        if (found) return;

        while (used[i] || nums[i] > remain) i++;
        // out of range
        if (i >= nums.length) return;

        used[i] = true;
        if (remain === nums[i]) {
            found = true;
            return;
        }

        for (let j = i + 1; j < nums.length; j++) {
            dfs(j, remain - nums[i]);
            // skip repeated number
            while (nums[j] === nums[j + 1]) j++;
        }

        // prevent trace back when border found
        if (found) return;
        used[i] = false;
    };

    for (let i = 1; i <= 3; i++) {
        found = false;
        dfs(0, totalLength / 4);
        if (!found) return false;
    }

    return true;
};