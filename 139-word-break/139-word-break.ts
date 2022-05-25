function wordBreak(s: string, wordDict: string[]): boolean {
    const goal = s.length
    const dp = new Array(goal).fill(false)
    
    dp[goal] = true
    
    for(let i = goal-1; i>=0; i --){
        for(let word of wordDict){
            if((i + word.length) <= goal && s.substring(i+word.length, i) === word){
                dp[i] = dp[i + word.length]
            }
            if(dp[i]){
                break
            }
        }
    }
    
    return dp[0]
};