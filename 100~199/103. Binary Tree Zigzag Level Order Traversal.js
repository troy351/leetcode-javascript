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
var zigzagLevelOrder = function (root) {
    const result = [], stack = [root];
    let odd = false;

    while (stack.length) {
        const count = stack.length, level = [];
        odd = !odd;

        for (let i = 0; i < count; i++) {
            const node = stack.shift();
            if (node) {
                if (odd) level.push(node.val);
                else level.unshift(node.val);
                stack.push(node.left, node.right);
            }
        }

        if (level.length) result.push(level);
    }

    return result;
};