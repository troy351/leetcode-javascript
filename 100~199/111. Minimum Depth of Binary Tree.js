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
var minDepth = function (root) {
    let minDepth = Number.MAX_SAFE_INTEGER;

    const dfs = (node, depth)=> {
        if (node === null) return;
        if (node.left === node.right && depth < minDepth) minDepth = depth;
        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    };

    dfs(root, 1);

    return minDepth === Number.MAX_SAFE_INTEGER ? 0 : minDepth;
};