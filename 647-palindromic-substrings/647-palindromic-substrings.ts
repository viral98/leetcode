function countSubstrings(s: string): number {
     let count = 0;
    for(let i = 0; i < s.length; i += 1){
        helper(s, i, i) //found all single number length Palindromic
        helper(s, i, i+1) //found all even number length Palindromic
    }
    return count
    
    function helper(s, low, high){
        while(low>=0 && high<=s.length && s[low]===s[high]){
            count += 1
            low -= 1
            high += 1
        }
    }
};