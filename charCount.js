/* Write a function which takes in a string and returns counts of each character in the string. */
charCount("aaaa"); // output: {a:4}
charCount("hello"); // output: {h:1, e:1, l:2, o:1}
charCount("Your PIN number is 1234!") // output: {1:1, 2:1, 3:1, 4:1, b:1, e:1, ...}
/*
function charCount(str){
    // do something
    // return an object with keys that are lowercase alphanumeric characters in the string; 
} */

//////////////////////////////// Break it down & Solve / Simplify ////////////////////////////////
/*function charCount(str){
    // make object to return at end
    var result = {};
    // loop over string, for each character...
    for(var i=0; i < str.length; i++){
        // check if exact number/letter is in the object
        var char = str[i].toLowerCase(); 
        // if the char is a number/letter AND is a key in the object, add one to the count
        if(result[char] > 0){
            result[char]++;
        } 
        // if the char is a number/letter AND not in the object, add it to the object and set value to 1
        else {
            result[char] = 1; 
        }
    }
        // if the character is something else (i.e. space, period, etc.) don't do anything
    // return object at the end
    return result
} */


///////////////////////////////// Look Back & Refactor /////////////////////////////////
/* Painpoints
1. don't use For Loop; use For Of
*/
function charCount(str) {
    let obj = {};
    for (let char of str) {
        char = char.toLowerCase();
        /* /[a-z0-9]/ - regular expression pattern (regexp)
        * performance can vary depending on what you're doing and the browser that you're using
        * Chrome has some issues a while back
        * commonly used to check a valid credit card number
        */
        if (isAlphaNumeric(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj
}

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0)
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
    }
    return true;
}

console.log(charCount("hello"));
console.log(charCount("Hi there!"));