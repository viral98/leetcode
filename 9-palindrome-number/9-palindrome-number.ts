function isPalindrome(x: number): boolean {
    const original = x
    
   let reversed = 0
   
   if(x < 10 && x >= 0) {
       return true
   }
    
    if(x % 10 === 0 || x < 0) {
       return false
   }
    
    while(x !== 0 ) {
        reversed = reversed * 10 + x % 10
        x = Math.trunc(x/10)
    }
    
    return !(original - reversed)
    
};