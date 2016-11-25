/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    let cur = root, prev, first, second;

    while (cur !== null) {
        if (prev && cur.val <= prev.val) {
            if (!first) first = prev;
            second = cur;
        }

        if (cur.left === null) {
            prev = cur;
            cur = cur.right;
        } else {
            let pred = cur.left;
            while (pred.right !== null && pred.right !== cur) pred = pred.right;
            if (pred.right === null) {
                pred.right = cur;
                cur = cur.left;
            } else {
                pred.right = null;
                prev = cur;
                cur = cur.right;
            }
        }
    }

    [first.val, second.val] = [second.val, first.val];
};