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
var maxDepth = function (root) {
    let depth = 0;

    const dig = (node, level)=> {
        if (node === null) return;
        if (level > depth) depth = level;
        dig(node.left, level + 1);
        dig(node.right, level + 1);
    };

    dig(root, 1);
    return depth;
};