/**
 * Definition for a binary tree node.
 * function (val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    let lowestNode = null;

    const search = (node)=> {
        if (node.left === node.right) {
            lowestNode = node;
            return;
        }

        let rightBranch = null;
        if (node.left) {
            rightBranch = node.right;
            node.right = node.left;
            node.left = null;
        }

        search(node.right);

        if (rightBranch) {
            lowestNode.right = rightBranch;
            search(rightBranch);
        }
    };

    if (root === null) return;
    search(root);
};