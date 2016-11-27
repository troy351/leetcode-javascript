/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    let found = false;

    const search = (node, remain)=> {
        if (found || node === null) return;
        if (remain === node.val && node.left === node.right) {
            found = true;
            return;
        }
        search(node.left, remain - node.val);
        search(node.right, remain - node.val);
    };

    search(root, sum);

    return found;
};