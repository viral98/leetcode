const INVALID = "0"

function numDecodings(s: string): number {
    const n = s.length
    const dp = new Array(n+1).fill(0);
    if(s[0] == '0')return 0; // not possible decoding with leading zero
    
    dp[n] = 1;
    for(let i=n-1; i>=0; --i){
        if(s[i] == INVALID){
            dp[i] = 0;
        }else{
            dp[i] += dp[i+1];// single digit
            
            if(i+1 < n && (s[i]=='1' || s[i]=='2') ){//double digit for [0...26] only
                if(s[i] == '1' || (s[i+1]>='0' && s[i+1]<'7')){
                     dp[i] += dp[i+2];
                } 
            }
        }
    }
    return dp[0];
};