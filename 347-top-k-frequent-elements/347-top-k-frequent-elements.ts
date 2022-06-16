function topKFrequent(nums: number[], k: number): number[] {
    const frequencies = {}
    
    for (const num of nums) {
        frequencies[num] = frequencies[num] + 1 || 1
    }
    
    
    const buckets = Array.from( new Array(nums.length + 1), function() { return []; } );
    
    
    for (const key in frequencies) {
        const frequency = frequencies[key]
        const number = parseInt(key)
        buckets[frequency].push(number)
    }
    
    
    const result = []
    for (let i=buckets.length - 1; i>= 0; i--) {
        const bucket = buckets[i]
        
        for (let j=0; j < bucket.length; j++) {
            result.push(bucket[j])
        }
    }
        
    
    return result.slice(0, k)
};