/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function kthSmallest(root: TreeNode | null, k: number): number {
    const stack = [];
    let count = 1;
    let node = root;

      while (node || stack.length) {
        while (node) {
          stack.push(node);
          node = node.left;
        }
        node = stack.pop();
        if (count === k) return node.val;
        else count++;
        node = node.right;
      }
};