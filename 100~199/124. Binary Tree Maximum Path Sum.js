/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
    let maxSum = Number.MIN_SAFE_INTEGER;

    const calcPathSum = (node)=> {
        if (node === null) return 0;
        const leftSum = Math.max(calcPathSum(node.left), 0);
        const rightSum = Math.max(calcPathSum(node.right), 0);
        maxSum = Math.max(maxSum, node.val + leftSum + rightSum);
        return node.val + Math.max(leftSum, rightSum);
    };

    calcPathSum(root);
    return maxSum;
};