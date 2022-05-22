function merge(intervals: number[][]): number[][] {
    if (intervals.length == 0) return [];
    
    //The sort means the complexity goes to O(Nlog(N))
    intervals.sort((a,b) => a[0] - b[0]);
    let stack = [];
    stack.push(intervals[0]);
    
    for (let i = 1; i < intervals.length; i++) {
        const prev = stack.pop();
        const cur = intervals[i];
        
        const previousEndTime = prev[1]
        const previousStartTime = prev[0]
        const currentEndTime = cur[1]
        const currentStartTime = cur[0]
        
        if (previousEndTime >= currentStartTime) {
            stack.push( [previousStartTime, Math.max(previousEndTime,currentEndTime)] );
        } else {
            stack.push(prev, cur);
        }
    }
    
    return stack;
    // Space Complexity: O(N)
};