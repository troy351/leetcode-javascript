/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function (root) {
    const tempChild = new TreeLinkNode(0);
    let currentChild;

    while (root) {
        tempChild.next = null;
        currentChild = tempChild;
        while (root) {
            if (root.left) {
                currentChild.next = root.left;
                currentChild = currentChild.next;
            }
            if (root.right) {
                currentChild.next = root.right;
                currentChild = currentChild.next;
            }
            root = root.next;
        }
        root = tempChild.next;
    }
};