function climbStairs(n: number): number {
    let distanceToEndOfSlidingWindow = 0
    let distanceFromCurrentPositionToEndOfSlidingWindow = 1
    
    for(let i = 1; i <= n; i++){
        let previousDistanceToEndOfSlidingWindow = distanceToEndOfSlidingWindow
        let currentDistanceToEndOfSlidingWindow = distanceFromCurrentPositionToEndOfSlidingWindow
        distanceToEndOfSlidingWindow = currentDistanceToEndOfSlidingWindow
        distanceFromCurrentPositionToEndOfSlidingWindow = previousDistanceToEndOfSlidingWindow + currentDistanceToEndOfSlidingWindow
    }
    
    return distanceFromCurrentPositionToEndOfSlidingWindow
};