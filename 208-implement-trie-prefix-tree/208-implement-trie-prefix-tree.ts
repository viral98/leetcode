class TrieNode{
    public val:string
    public children: TrieNode[]
    public isEnd: boolean
    
    constructor(val = null){
        this.val = val;
        this.children = [];
        this.isEnd = false;
    }
}

class Trie {
    public root: TrieNode
    
    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let cur = this.root; //each time insert, starting from top root
        
        for (let c of word) {
            if (!cur.children[c]) {
                cur.children[c] = new TrieNode(c);
            }
            cur = cur.children[c]; //search children's children  next node/pointer
        }
        
        cur.isEnd = true; //finish inserting full word
    }

    search(word: string): boolean {
        let cur = this.root; //each time search, starting from top root
        
        for (let c of word) {
            if (!cur.children[c]) return false;
            else cur = cur.children[c];
        }
        
        return cur.isEnd; //check if can find full word, see curNode.isEnd
    }

    startsWith(prefix: string): boolean {
        let cur = this.root;
        
        for (let c of prefix) {
            if (!cur.children[c]) return false;
            else cur = cur.children[c];
        }
        
        return true; //find the prefix word
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */