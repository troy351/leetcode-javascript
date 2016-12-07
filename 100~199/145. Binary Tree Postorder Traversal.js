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
var postorderTraversal = function (root) {
    const post = [];
    if (root === null) return post;
    const nodes = [];
    nodes.push(root);
    while (nodes.length > 0) {
        const node = nodes.pop();
        post.unshift(node.val);
        if (node.left !== null) nodes.push(node.left);
        if (node.right !== null) nodes.push(node.right);
    }
    return post;
};