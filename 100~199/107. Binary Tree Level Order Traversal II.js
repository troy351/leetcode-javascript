/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    const result = [], stack = [root];

    while (stack.length) {
        const count = stack.length, level = [];

        for (let i = 0; i < count; i++) {
            const node = stack.shift();
            if (node) {
                level.push(node.val);
                stack.push(node.left, node.right);
            }
        }

        if (level.length) result.unshift(level);
    }

    return result;
};