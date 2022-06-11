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

function isValidBST(root: TreeNode | null): boolean {
    function helper(node, min, max) {
        if (node === null) {
            return true;
        }
        
        const value = node.val;
        
        if (value <= min || value >= max) {
            return false;
        }
        
        return helper(node.left, min, value) && helper(node.right, value, max);
    }
    
    return helper(root, -Infinity, Infinity)
    
};