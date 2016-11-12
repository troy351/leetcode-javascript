/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let probe = head;
    let nth = head;
    while (n-- > 0) {
        probe = probe.next;
    }

    // remove first node (i.e., `head`)
    if (probe === null) return head.next;

    while (probe.next !== null) {
        probe = probe.next;
        nth = nth.next;
    }
    nth.next = nth.next.next;

    return head;
};