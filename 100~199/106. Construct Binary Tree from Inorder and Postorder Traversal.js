/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    const createTree = (tail, start, end)=> {
        if (start > end) return null;
        if (start === end) return new TreeNode(postorder[tail]);

        const node = new TreeNode(postorder[tail]);
        const index = inorder.indexOf(postorder[tail], start);
        node.left = createTree(tail - (end - index + 1), start, index - 1);
        node.right = createTree(tail - 1, index + 1, end);

        return node;
    };

    if (inorder.length === 0) return null;
    return createTree(inorder.length - 1, 0, inorder.length - 1);
};