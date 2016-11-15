/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (head === null || head.next === null || k === 0) return head;

    // find tail
    let length = 1,tail = head;
    while (tail.next !== null) {
        tail = tail.next;
        length++;
    }

    k %= length;
    if (k === 0) return head;

    // connect tail to head
    tail.next = head;
    for (let i = 0; i < length - k; i++) tail = tail.next;

    const result = tail.next;
    tail.next = null;

    return result;
};