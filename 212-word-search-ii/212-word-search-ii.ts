class TrieNode {
    neighbors: Map<string, TrieNode>;
    word: string | null;

    constructor(){
        this.neighbors = new Map<string, TrieNode>();
        this.word = null;
    }
}

class Trie {    
    root: TrieNode;

    constructor(){
        this.root = new TrieNode();
    }

    insert(word: string){
        let currNode = this.root;
        for(const char of word){
            if(!currNode.neighbors.has(char)){
                currNode.neighbors.set(char, new TrieNode());
            }
            currNode = currNode.neighbors.get(char);
        }
        currNode.word = word;
    }
}

function findWords(board: string[][], words: string[]): string[] {
    const res = [];
    const trie = new Trie();
    
    // Create a Trie out of the list of words
    for(const word of words){
        trie.insert(word);
    }
    
    // Go through each cell and search/backtrack if the letter is the start of a word in the Trie
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(trie.root.neighbors.has(board[i][j])){
                search(board, trie.root, i, j, res);
            }
        }
    }
    
    return res;
};

function search(board: string[][], root: TrieNode, currRow: number, currCol: number, res: string[]) {
    const currLetter = board[currRow][currCol]; // Save current letter to undo visitation mark
    let currNode = root.neighbors.get(currLetter); // Traverse through the Trie
    
    // If the letter doesn't exist in the Trie then we can exit early
    if(!currNode){
        return;
    }
    
    // If we've reached a word, push it to the result and mark it as null so we don't add duplicates
    if(currNode.word){
        res.push(currNode.word);
        currNode.word = null;
    }
    
    // Mark the current cell as visited. If don't want to modify the input we can use a boolean m x n grid instead. 
    board[currRow][currCol] = "#";
	
	// Check adjacent cells
    if(currRow - 1 >= 0){
        search(board, currNode, currRow - 1, currCol, res)
    }
    if(currCol + 1 < board[currRow].length){
        search(board, currNode, currRow, currCol + 1, res)
    }
    if(currRow + 1 < board.length){
        search(board, currNode, currRow + 1, currCol, res)
    }
    if(currCol - 1 >= 0){
        search(board, currNode, currRow, currCol - 1, res)
    }
    
    board[currRow][currCol] = currLetter;  // Undo visitation mark
    
    // Optimization: Prune the leaf nodes to reduce computation since this reduces the number of elements in Trie
    if(currNode.neighbors.size === 0){
        root.neighbors.delete(currLetter);
    }
}