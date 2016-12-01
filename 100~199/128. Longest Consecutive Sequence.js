/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;

    const visited = new Set(nums);
    let longest = 1;
    nums.forEach(num=> {
        if (visited.delete(num)) {
            let length = 1, val = num;
            while (visited.delete(--val)) length++;
            val = num;
            while (visited.delete(++val)) length++;
            longest = Math.max(longest, length);
        }
    });
    return longest;
};