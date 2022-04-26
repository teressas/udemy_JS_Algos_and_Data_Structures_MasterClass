/* Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrom (reads the same forward and backward.) Otherwise it returns false. */
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

// function isPalindrome(str) {
//     let result = ""
//     // base case: if string is empty or string length is less than 2 characters then return false
//     if(str.length < 3) return false;
//     // reverse the string if the reversed string equals the given string then return true
//     result += isPalindrome(str.slice(1)) + str[0]
//     console.log(result)
//     if(str === result) return true
// }

function isPalindrome(str) {
    if(str.length === 1) return true
    if(str.length === 2) return str[0] === str[1]
    // console.log(str[0], str.slice(-1))
    if(str[0] === str.slice(-1)){
        return isPalindrome(str.slice(1,-1))
    } 
        return false
}
console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false