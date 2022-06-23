class LRUCache {
    private hashMap: Map<number, number>
    private capacity: number
    
    constructor(capacity: number) {
        this.hashMap = new Map()
        this.capacity = capacity
    }

    get(key: number): number {
        let value = -1
        if (this.hashMap.has(key)) {
            value = this.hashMap.get(key)
			// reorder by deleting and re-inserting 
            this.hashMap.delete(key)
            this.hashMap.set(key, value)
        } 
        return value
    }

    put(key: number, value: number): void {
        this.hashMap.delete(key)
        this.hashMap.set(key, value)
        if (this.hashMap.size > this.capacity) {
			// delete the first key in hashMap
            this.hashMap.delete(this.hashMap.keys().next().value)
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */