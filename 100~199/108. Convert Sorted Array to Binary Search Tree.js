/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    const buildTree = (start, end)=> {
        if (start > end) return null;
        if (start === end) return new TreeNode(nums[start]);

        const mid = (start + end) / 2 >> 0;
        const node = new TreeNode(nums[mid]);
        node.left = buildTree(start, mid - 1);
        node.right = buildTree(mid + 1, end);

        return node;
    };

    return buildTree(0, nums.length - 1);
};