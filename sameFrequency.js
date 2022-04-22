/* Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
Your solution must have the following two complexities: Time: O(n)
*/
function sameFrequency(num1, num2) {
    // change num into string so you can iterate through the string
    let strNum1 = num1.toString()
    let strNum2 = num2.toString()
    // if the lengths of both numbers are not equal then return false
    if(strNum1.length != strNum2.length) return false
    // var intArr = Array.from(String(num1));
    // console.log(intArr)
    // loop through each digit in num1 and store the frequency of each digit into an object
    const lookup = {}
    for (let val of strNum1) {
        // console.log(val);
        lookup[val] ? lookup[val] += 1 : lookup[val] = 1;
    }
    console.log(lookup)
    // loop through the num2 if the digit doesn't exist in the object then return false, otherwise minus 1 from the object
    for (let val of strNum2) {
        if (!lookup[val]) {
            return false
        }
        else {
            lookup[val] -= 1
        }
        console.log(lookup)
    }
    // return true after the loop finishes
    return true
}

// given two numbers find out if the occurence of each digit in one number matches the occurence of digits in the other number

console.log(sameFrequency(182,281)) // true
// 182 {1:1, 8:1, 2:1} , 281{2:1,8:1,1:1}
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false
console.log(sameFrequency(0,0)) // true