function isPalindrome(x: number): boolean {
    if(x < 0){
        return false
    }
    const numberToString = x.toString()
      
    const str = numberToString.replace(/\W/g, '');
    const res = Array.prototype.map.call(str, function(c) {
        return c;
    }).reverse().join('');

    return str.toLowerCase() === res.toLowerCase();
    
};