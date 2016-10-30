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
    var head = new ListNode(0);
    var next = new ListNode(0);
    head.next = next;

    var carry = 0;

    while (true) {
        l1 = l1 === null ? new ListNode(0) : l1;
        l2 = l2 === null ? new ListNode(0) : l2;

        var result = l1.val + l2.val + carry;
        carry = Math.floor(result / 10);
        next.val = result % 10;

        l1 = l1.next;
        l2 = l2.next;
        if (l1 === null && l2 === null) {
            break;
        }

        var tmp = new ListNode(0);
        next.next = tmp;
        next = tmp;
    }

    if (carry !== 0) {
        tmp = new ListNode(carry);
        next.next = tmp;
    }

    return head.next;
};