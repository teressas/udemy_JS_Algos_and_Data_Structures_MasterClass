/* Sliding Window
* This pattern involves creating a window which can be either an array or number from
one position to another. Depending on a certain condition, the window either increases or closes (and a new window is created)
Very useful for keeping track of a subset of data in an array/string etc.
Example 1: Write a function to find the longest sequence of unique characters
e.g "hellothere!" -> "hel", "lother"
*/
/* Write a function called maxSubarraySum which accepts an array of integers and a number called n.
The function should calculate the maximum sum of n consecutive elements in the array.
Test Cases: 
maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 7
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null
// arrays are not sorted
*/
function maxSubarraySum(array, n) {
    // create two variables to store the max sum and the sum of the current n numbers
    let maxSum = 0;
    let tempSum = 0;
    // if the array length is less than n return null
    if(array.length < n) return null
    // loop through the array until the index of n
    for(let i = 0; i < n; i++) {
        // add each value to get the max sum of the first n numbers
        maxSum += array[i];
        console.log("24",maxSum)
    }
    // make the temp sum equal the max sum to compare the next n numbers
    tempSum = maxSum;
    console.log(tempSum)
    // loop through entire array starting the index at n
    for(let i = n; i < array.length; i++) {
        console.log("29",array[i - n])
        console.log("30",array[i])
        // take the current temp sum minus the first value used to create the current max sum and then add the current index
        // 2,6,9 = 17 -> 17 - array[3-3] + array[3]
        tempSum = tempSum - array[i - n] + array[i]
        // find the max number between maxSum and tempSum
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum;
}
console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))