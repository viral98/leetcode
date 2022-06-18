/**
Here, we use the dp variable with the key of amount, i.e. dp[1] means how many coins does it take to sum to 1.
We then compute how many coins does it take to get each amount value (i.e. if the input amount is 7, we calculate everything from 0 to 7)
Say, we have an array of [1,3,4,5] and we are trying to calculate the dp[7]

When the internal for loop runs over each coin, we encounter the first coin, of value 1
So, we say, we used this one coin of value one, we still need coin(s) that come up to value 6 to satisfy our amount

so we do dp[7] = 1 + dp[6]

where the 1 represents the number of coins we've used and NOT the value
**/
function coinChange(coins: number[], amount: number): number {
    //Could have initialised with anything here, but amount+1 is technically the largest value in our program
    const dp = Array(amount +1).fill(amount+1)
    
    dp[0] = 0
    
    for(let i=0; i<dp.length; i++){
        for(let coin of coins){
            if(i-coin >= 0){
                //This could possibly be a solution
                
                dp[i] = Math.min(dp[i], dp[i-coin]+1)
            }
        }
    }
    
    return dp[amount] !== amount+1 ? dp[amount] : -1
};