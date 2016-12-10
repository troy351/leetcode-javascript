/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    if (head === null || head.next === null) return head;

    const merge = (h1, h2) => {
        const fakeHead = new ListNode(Number.MIN_SAFE_INTEGER);
        let c = fakeHead;
        while (h1 !== null && h2 !== null) {
            if (h1.val < h2.val) {
                c.next = h1;
                h1 = h1.next;
            } else {
                c.next = h2;
                h2 = h2.next;
            }
            c = c.next;
        }
        c.next = h1 !== null ? h1 : h2;
        return fakeHead.next;
    };


    let fast = head.next.next, slow = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    const rightPart = sortList(slow.next);
    slow.next = null;
    return merge(sortList(head), rightPart);
};