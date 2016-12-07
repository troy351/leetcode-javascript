/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (head === null || head.next === null) return;

    // find the middle node: O(n)
    let p1 = head, p2 = head.next;
    while (p2 && p2.next) {
        p1 = p1.next;
        p2 = p2.next.next;
    }

    // cut from the middle and reverse the second half: O(n)
    let head2 = p1.next;
    p1.next = null;

    p2 = head2.next;
    head2.next = null;
    while (p2) {
        p1 = p2.next;
        p2.next = head2;
        head2 = p2;
        p2 = p1;
    }

    // merge two lists: O(n)
    for (p1 = head, p2 = head2; p1;) {
        [p1.next, p2] = [p2, p1.next];
        p1 = p1.next;
    }
};