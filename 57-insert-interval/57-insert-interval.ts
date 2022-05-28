
  
const START = 0;
const END = 1;

function insert(intervals: number[][], newInterval: number[]): number[][] {
    if(intervals.length === 0) return [newInterval];
    const result = [];
    
    for(const interval of intervals) {
        if(newInterval[END] < interval[START]) {
            result.push(newInterval);
            newInterval = interval;
            
        } else if(newInterval[START] > interval[END]) {
            result.push(interval);
        } else {
            newInterval[START] = Math.min(newInterval[START], interval[START]);
            newInterval[END] = Math.max(newInterval[END], interval[END]);
        }
        
    }
    result.push(newInterval);
    
    return result;
};