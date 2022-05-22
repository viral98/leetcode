function eraseOverlapIntervals(intervals: number[][]): number {
    // sort by earliest finish time
    intervals.sort((a, b) => a[1] - b[1]);
    let prev = intervals[0], remove = 0;
    
    for(let i = 1; i < intervals.length; i++) {
        const prevE = prev[1];
        const currS = intervals[i][0];
        if(prevE <= currS) prev = intervals[i];
        else remove++;
    }
    return remove;
};