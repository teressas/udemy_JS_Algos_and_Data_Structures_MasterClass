/* Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence
of characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
Examples: 
isSubsequence('hello', 'hello world') // true
isSubsequence('sing', 'sting') // true
isSubsequence('abc','abracadabra') // true
isSubsequence('abc', 'acb') // false (order matters)
Your solution must have at least the following complexities:
Time Complexity - O(N + M)
Space Complexity - O(1)
*/

/* Given two strings check if the same order of all characters in the first string appear in the second string. There can be characters in between the order in the second string. */

function isSubsequence(str1, str2) {
    // create a variable to store a count every time we get a match of characters in both strings
    let match = "";
    // have a pointer start at index 0 of str1
    let i = 0;
    // have another pointer start at index 0 of str2
    let j = 0;
    // if str1 doesn't exist then return true
    if(!str1) return true;
    // loop through the 2nd string 
    while (j < str2.length) {
        // if the index value of str1 equals index value at str2 then increment i to keep checking
        if (str1[i] === str2[j]) {
            match += str2[j]; 
            i++
        }
        // console.log(match)
        if(i === str1.length && match.length === str1.length) {
            return true;
        }
        j++
    }
    return false;
}

console.log(isSubsequence('hello', 'hello world')) // true
//                            i     
console.log(isSubsequence('sing', 'sting')) // true
//                                     j                    
console.log(isSubsequence('abc', 'abracadabra')) // true
console.log(isSubsequence('abc', 'acb')) // false (order matters)
console.log(isSubsequence('', 'abc')) // true