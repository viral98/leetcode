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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {

    type PossibleTreeType = TreeNode | null
    
    if(!subRoot){
        return true
    }
    if(!root){
        return false
    }
    
    if(isSameTree(root, subRoot)){
        return true
    }else{
        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
    }
    
    
    function isSameTree(t:PossibleTreeType, s:PossibleTreeType): boolean{
        if(!t && !s){
            return true
        }
        if(s && t && s.val === t.val){
            return isSameTree(t.left, s.left) && isSameTree(t.right, s.right)
        }
        return false
    }
};