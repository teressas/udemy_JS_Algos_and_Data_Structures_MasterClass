/* Sliding Window - minSubArrayLen
* Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer
passed to the function. If there isn't one, return 0 instead.
Examples: 
minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52 ) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10], 39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10], 55 ) // 5
minSubArrayLen([4,3,3,8,1,2,3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10], 95) // 0
Time Complexity - O(n)
Space Complexity - O(1)
*/
/* Given an array of positive integers and a positive integer, look for a set of contiguous numbers 
where the sum is greater than or equal to the integer given and return the length of the subarray */

function minSubArrayLen(array, targetSum) {
    // create a variable to store a total, two variable pointer that starts at beginning of array, and a variable to store the current minLength
    let total = 0;
    let start = 0;
    let end = 0;
    let minLength = Infinity
    // have pointer called start loop through the array
    while (start < array.length) {
        // if the total is less than the target sum && the end pointer has not reached the end of the array then sum each number and increment end
        if (total < targetSum && end < array.length) {
            total += array[end]
            // console.log("t",total)
            end++
        }
        // else if the total is greater than or equal to the target sum 
        else if (total >= targetSum) {
            // then find the min length between the current min length and the index position of pointer end minus the index position of pointer start
            minLength = Math.min(minLength, end - start);
            // console.log(minLength)
            // minus the value at pointer start from the total
            total -= array[start]
            // increment start
            start++
        }
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
        else {
            break
        }
    }
    // return 0 if the min length is infinity else return the min length value
    return minLength === Infinity ? 0 : minLength
}



console.log(minSubArrayLen([1, 2, 3], 5)) // 2
console.log(minSubArrayLen([1,2,7],5)) // 1
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> [5,4] is the smallest subarray

//                    s              
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // 2 -> [4,3] is the smallest subarray
//                          e
// Total : 6    
// min: 3

console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52 )) // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 55)) // 5
console.log(minSubArrayLen([4,3,3,8,1,2,3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)) // 0
