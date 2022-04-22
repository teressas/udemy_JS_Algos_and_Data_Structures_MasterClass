/* Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns
the length of the longest substring with all distinct characters.
Test Cases:
findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)
*/

function findLongestSubstring(string) {
    // have a variable to store the longest string
    let longest = 0;
    // have a variable to store the max amount of characters that already occurred
    let start = 0;
    // create a new object to store the each character in the string as the key and the occurance as the value
    let seen = {}
    // loop through the string
    for(let i = 0; i < string.length; i++) {
        let char = string[i];
        // if the character already exists in the object
        if(seen[char]) {
            // find the max value of the reoccuring character
            start = Math.max(start, seen[char]);
            console.log("s:",start)
            console.log(seen)
        }

        // compare the current longest to the value of the current index plus one
        // when the loop reaches a character that has already occurred 
        // we take the current index subtract it from the number of characters already occurred and adds one to include the next index
        longest = Math.max(longest, i - start + 1) 
        // store the key to the object and make the object the current index plus one to determine the next longest count
        seen[char] = i + 1;
        console.log("l:",longest)
        console.log(i - start + 1)
        console.log(seen)   
    }
    return longest
}
//                     i
// console.log(findLongestSubstring('thecatinthehat')) // 7
//                            j
// longestStr = hecatin

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6