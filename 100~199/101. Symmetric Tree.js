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
var isSymmetric = function (root) {
    const search = (child1, child2)=> {
        // both null
        if (child1 === child2) return true;
        // one null, the other not
        if (!(child1 && child2)) return false;

        if (child1.val === child2.val) return search(child1.left, child2.right) && search(child1.right, child2.left);
        return false;
    };

    if (root === null) return true;
    return search(root.left, root.right);
};