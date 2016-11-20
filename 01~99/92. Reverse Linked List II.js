/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    const list = [];
    let node = head;
    while (node !== null) {
        list.push(node);
        node = node.next;
    }

    for (let i = n - 1; i >= m; i--) {
        list[i].next = list[i - 1];
    }

    if (list[m - 2]) list[m - 2].next = list[n - 1];
    else head = list[n - 1];

    list[m - 1].next = list[n] ? list[n] : null;

    return head;
};