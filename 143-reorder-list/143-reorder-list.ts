/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    let slow = head, fast = head
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }

    // reverse the second half the linked list
    let prev = null, curr = slow
    
    while (curr !== null) {
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }

    // connect the nodes accordingly
    let end = prev, start = head
    
    while (end.next !== null) {
        let temporaryStart = start.next
        let temporaryEnd = end.next
        start.next = end
        end.next = temporaryStart
        start = temporaryStart
        end = temporaryEnd
    }
    
};