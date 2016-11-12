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
var swapPairs = function (head) {
    if (head === null || head.next === null) return head;

    let curNode = head;
    let last = head;
    head = head.next;

    while (curNode !== null && curNode.next !== null) {
        const temp = last.next = curNode.next;
        curNode.next = temp.next;
        temp.next = curNode;
        last = curNode;
        curNode = curNode.next;
    }

    return head;
};