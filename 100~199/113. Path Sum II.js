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
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    const result = [], solution = [];

    const search = (node, remain)=> {
        if (node === null) return;
        if (remain === node.val && node.left === node.right) {
            result.push([...solution, node.val]);
            return;
        }
        solution.push(node.val);
        search(node.left, remain - node.val);
        search(node.right, remain - node.val);
        solution.pop();
    };

    search(root, sum);

    return result;
};