/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const head = new ListNode(0);
    let next = new ListNode(0);
    head.next = next;

    var carry = 0;

    while (true) {
        l1 = l1 || new ListNode(0);
        l2 = l2 || new ListNode(0);

        const result = l1.val + l2.val + carry;
        carry = Math.floor(result / 10);
        next.val = result % 10;

        l1 = l1.next;
        l2 = l2.next;
        if (l1 === null && l2 === null) {
            break;
        }

        next.next = new ListNode(0);
        next = next.next;
    }

    if (carry !== 0) {
        next.next = new ListNode(carry);
    }

    return head.next;
};