/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    if (n <= 0) return [];

    // create tree list with different shapes
    const dp = new Array(n + 1).fill(0).map(()=>[]);
    dp[0].push([null]);

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            for (let k = 0; k < dp[j].length; k++) {
                for (let l = 0; l < dp[i - 1 - j].length; l++) {
                    dp[i].push([1, ...dp[j][k], ...dp[i - 1 - j][l]]);
                }
            }
        }
    }

    const result = [];
    let value, pos;

    // create tree and fill number according to list
    const createTree = (nodes)=> {
        const node = new TreeNode(null);
        node.left = nodes[++pos] ? createTree(nodes) : null;
        node.val = value++;
        node.right = nodes[++pos] ? createTree(nodes) : null;
        return node;
    };

    for (let i = 0; i < dp[n].length; i++) {
        value = 1;
        pos = 0;
        result.push(createTree(dp[n][i]));
    }

    return result;
};