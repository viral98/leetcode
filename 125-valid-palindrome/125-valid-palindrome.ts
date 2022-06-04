function isPalindrome(s: string): boolean {
    var start = 0
    var end = s.length - 1
    while (start < end) {
        var startChar = s.charCodeAt(start)
        var endChar = s.charCodeAt(end)
    
        if (!isLetter(startChar)) {
            start++
            continue
        }
        if (!isLetter(endChar)) {
            end--
            continue
        }
    
        if (toLowerCase(startChar) !== toLowerCase(endChar)) {
            return false 
        } 
        start++
        end--
  }
  return true
};

const isLetter = function(code) {
    if (((code >= 48) && (code <= 57))  // numbers
    || ((code >= 65) && (code <= 90))  // uppercase
    || ((code >= 97) && (code <= 122))) {  // lowercase
        return true
    }
    else {
        return false
    }
}

const toLowerCase = function(code) {
    if (code >= 65 && code <= 90) {
        return code + 32    
    }
    else {
        return code
    }
}