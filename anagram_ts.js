/* Compare two strings and if the occurence of each letter in string1 equals to the occurence of each letter in string2 then the second string is an anagram of the first string.
* strings will most likely be in a different order
* assume all inputs will be single word; no punctations, spaces, specia; no lowercase letters
validAnagram('','') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty)', 'qeywrt') // true
validAnagram('texttwisttime','timetwisttext') // true
*/
function validAnagram(str, str2){
    // the length of the 2 strings must equal
    if(str.length !== str2.length){
        return false
    }
    // create two new objects to count the occurance of each letter in string 1 and string 2
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    // loop through string 1 & 2 and for each occurance of one letter set count to 1 or increment the count
    for(let letter of str){
        frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) +1
        // console.log("1",frequencyCounter1)
    }
    for(let letter of str2){
        frequencyCounter2[letter] = (frequencyCounter2[letter] || 0) +1
        // console.log("2",frequencyCounter2)
    }
    // if the count of one letter in string 1 doesn't match the count of that same letter in string 2 then return false
    for(let key in frequencyCounter1){
        if(frequencyCounter1[key] !== frequencyCounter2[key]){
            return false
        } 
    }
    
    // return true if it matches
    return true
    
}
console.log(validAnagram('',''))
console.log(validAnagram('aaz', 'zza'))
console.log(validAnagram('anagram', 'nagaram'))
console.log(validAnagram("rat","car"))
console.log(validAnagram('awesome', 'awesom'))
console.log(validAnagram('qwerty)', 'qeywrt'))
console.log(validAnagram('texttwisttime','timetwisttext'))