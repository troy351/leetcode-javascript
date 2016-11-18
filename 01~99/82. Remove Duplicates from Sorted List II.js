/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let node = head;
    let result = new ListNode(null), resNode = result;

    while (true) {
        // find node until no duplicate
        let hasDuplicate = false;
        while (node !== null && node.next !== null && node.val === node.next.val) {
            node = node.next;
            hasDuplicate = true;
        }

        if (node === null) break;

        if (!hasDuplicate) {
            resNode.next = new ListNode(node.val);
            resNode = resNode.next;
        }

        node = node.next;
    }

    return result.next;
};