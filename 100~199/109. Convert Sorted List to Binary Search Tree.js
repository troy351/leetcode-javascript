/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    const buildTree = (head, tail)=> {
        if (head === tail) return null;

        // get mid node, the slow one
        let slow = head, fast = head;
        while (fast !== tail && fast.next !== tail) {
            slow = slow.next;
            fast = fast.next.next;
        }

        const node = new TreeNode(slow.val);
        node.left = buildTree(head, slow);
        node.right = buildTree(slow.next, tail);

        return node;
    };

    return buildTree(head, null);
};