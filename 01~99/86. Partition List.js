/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    if (head === null) return null;

    const smallList = new ListNode(null), bigList = new ListNode(null);
    let node = head, slNode = smallList, blNode = bigList;

    while (node !== null) {
        if (node.val < x) {
            slNode.next = node;
            slNode = node;
        } else {
            blNode.next = node;
            blNode = node;
        }
        node = node.next;
    }

    slNode.next = bigList.next;
    blNode.next = null;

    return smallList.next;
};