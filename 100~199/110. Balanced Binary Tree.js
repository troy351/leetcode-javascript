/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    const getHeight = (node)=> {
        if (node === null) return 0;

        const leftHeight = getHeight(node.left);
        if (leftHeight===-1) return -1;
        const rightHeight = getHeight(node.right);
        if (rightHeight===-1) return -1;

        if (Math.abs(leftHeight - rightHeight) > 1) return -1;
        return Math.max(leftHeight, rightHeight) + 1;
    };

    return getHeight(root) !== -1;
};