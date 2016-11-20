/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    if (root === null) return [];

    const stack = [root], result = [];
    while (stack.length > 0) {
        const node = stack.pop();
        if (typeof node === 'object') {
            if (node.right) stack.push(node.right);
            stack.push(node.val);
            if (node.left) stack.push(node.left);
        } else {
            result.push(node);
        }
    }

    return result;
};