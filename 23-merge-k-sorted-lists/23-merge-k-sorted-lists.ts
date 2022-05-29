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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (!lists || lists.length === 0) return null;

    function mergeTwoSortedLists(l1, l2) {
        let dummy = new ListNode();
        let tmp = dummy;

        while (l1 && l2) {
            if (l1.val <= l2.val) {
                tmp.next = l1;
                l1 = l1.next;
            } else {
                tmp.next = l2;
                l2 = l2.next;
            }
            tmp = tmp.next;
        }
        if (l1) tmp.next = l1;
        if (l2) tmp.next = l2;

        return dummy.next;
    }

    while (lists.length > 1) {
        let mergedList = [];
        for (let i = 0; i < lists.length; i += 2) {
            const l1 = lists[i];
            const l2 = i + 1 < lists.length ? lists[i + 1] : null;
            const mList = mergeTwoSortedLists(l1, l2);
            mergedList.push(mList);
        }

        lists = mergedList;
    }
    return lists[0];
};