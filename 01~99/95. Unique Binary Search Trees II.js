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
    const deepCopy = (root)=> {
        if (root === null) return null;
        const node = new TreeNode(null);
        node.left = deepCopy(root.left);
        node.right = deepCopy(root.right);
        return node;
    };

    if (n <= 0) return [];

    const dp = new Array(n + 1).fill(0).map(()=>[]);
    dp[0].push(null);

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            for (let k = 0; k < dp[j].length; k++) {
                for (let l = 0; l < dp[i - 1 - j].length; l++) {
                    const node = new TreeNode(null);
                    node.left = deepCopy(dp[j][k]);
                    node.right = deepCopy(dp[i - 1 - j][l]);
                    dp[i].push(node);
                }
            }
        }
    }

    let value = 0;
    const setValue = (root)=> {
        if (root.left !== null) {
            setValue(root.left);
        }
        root.val = value++;
        if (root.right !== null) {
            setValue(root.right);
        }

    };

    for (let i = 0; i < dp[n].length; i++) {
        value = 1;
        setValue(dp[n][i]);
    }

    return dp[n];
};