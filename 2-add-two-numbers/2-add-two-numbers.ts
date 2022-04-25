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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const outputList = new ListNode();
  let tail = outputList;
  let carry = 0;

  while (l1 || l2 || carry) {
    const valueOfL1 = l1 ? l1.val : 0;
    const valueOfL2 = l2 ? l2.val : 0;
    const intermediateOutput = valueOfL1 + valueOfL2 + carry;

    tail.next = new ListNode(intermediateOutput%10);
    tail = tail.next;
    carry = intermediateOutput >= 10 ? 1 : 0;
    l1 = l1&&l1.next;
    l2 = l2&&l2.next;
  }

  return outputList.next;
};