/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const createTree = (head, start, end)=> {
        if (start > end) return null;
        if (start === end) return new TreeNode(preorder[head]);

        const node = new TreeNode(preorder[head]);
        const index = inorder.indexOf(preorder[head]);
        node.left = createTree(head + 1, start, index - 1);
        node.right = createTree(head + index - start + 1, index + 1, end);

        return node;
    };

    if (inorder.length === 0) return null;
    return createTree(0, 0, inorder.length - 1);
};