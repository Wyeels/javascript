var isPalindrome = function(x) {
    let reverse = parseFloat(
        x
        .toString()
        .split('')
        .reverse()
        .join('')
    )

    console.log(x)
    console.log(reverse)
    if (reverse == x) {
        return true
    } else {
        return false
    }

};

console.log(isPalindrome(404))