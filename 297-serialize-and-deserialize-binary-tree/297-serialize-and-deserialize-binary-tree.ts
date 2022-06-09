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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
     let data = []

    function callDFS(node) {
        if(!node) {
            data.push('#')
            return
        }
        data.push(node.val)
        callDFS(node.left);
        callDFS(node.right);
    }
    callDFS(root);
    return data.join(',');
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    let updatedData = data.split(',');
    let idx = 0;
    
    function callDFS() {
        const val = updatedData[idx];
        idx++
        if(val === '#') return null;
        const node = new TreeNode(+val);
        
        node.left = callDFS();
        node.right = callDFS();
        return node;
    }
    return callDFS();
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */