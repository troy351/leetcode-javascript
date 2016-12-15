/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let p1 = headA;
    let p2 = headB;

    if (p1 === null || p2 === null) return null;

    while (p1 !== null && p2 !== null && p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;

        // Any time they collide or reach end together without colliding
        // then return any one of the pointers.
        if (p1 === p2) return p1;

        // If one of them reaches the end earlier then reuse it
        // by moving it to the beginning of other list.
        // Once both of them go through reassigning,
        // they will be equidistant from the collision point.
        if (p1 === null) p1 = headB;
        if (p2 === null) p2 = headA;
    }

    return p1;
};