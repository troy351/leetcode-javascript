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
var preorderTraversal = function (root) {
    const pre = [];
    if (root === null) return pre;
    const nodes = [];
    nodes.push(root);
    while (nodes.length > 0) {
        const node = nodes.pop();
        pre.push(node.val);
        if (node.right !== null) nodes.push(node.right);
        if (node.left !== null) nodes.push(node.left);
    }
    return pre;
};