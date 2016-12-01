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
var sumNumbers = function (root) {
    let result = 0;

    const search = (node, val)=> {
        if (node === null) return;
        if (node.left === node.right) {
            result += +(val + node.val);
            return;
        }

        search(node.left, val + node.val);
        search(node.right, val + node.val);
    };

    search(root, '');

    return result;
};