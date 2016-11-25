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
var isValidBST = function (root) {
    let value = Number.MIN_SAFE_INTEGER;
    let result = true;

    const validNode = (node)=> {
        if (!result || node === null) return;

        validNode(node.left);

        if (node.val <= value) {
            result = false;
        } else {
            value = node.val;
        }

        validNode(node.right);
    };

    validNode(root);
    return result;
};