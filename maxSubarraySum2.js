/* Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
Note that a subarry must consist of consecutive elements from the original array. 
In the first example below, [100,200,300] is a subarray of the original array, but [100, 300] is not.
maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20],4) // 39
maxSubarraySum([-3,4,0,-2.6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
Time Complexity - O(n)
Space Complexity - O(1)
*/

/* Based on the number given, find the same amount of values in the array that make the maximum sum. */

function maxSubarraySum(arr, num) { 
    // if the given array length is less than the number then return null
    if(arr.length < num) return null;
    // create two variables, one to store the max sum and another to store the temp max sum
    let maxSum = 0
    let tempMaxSum = 0
    // loop through the array until the index of number is reached
    for(let i = 0; i < num; i++) {
        // calculate the sum of the index values from the 1st index to number index
        maxSum += arr[i]
        // store and return that number as the max sum
        console.log("a",maxSum)
        // return maxSum
    }
    // have the temp max sum variable equal to the max sum
    tempMaxSum = maxSum
    console.log("d",tempMaxSum)
    // loop through the entire array, have i start at number index
    for(let i = num; i < arr.length; i++) {
        // calculate a new temp value by taking the temp max sum minus the index value of 0 plus the value of the number index
        tempMaxSum = tempMaxSum - arr[i - num] + arr[i]
        console.log("b",tempMaxSum)
        // compare the two max sum variables to find the greater value
        // make the greater value the value of max sum and keep checking
        maxSum = Math.max(tempMaxSum , maxSum)
        console.log("c",maxSum)
    }
    // return the max value
    return maxSum
}

//                                  [ max ]
// console.log(maxSubarraySum([100,200,300,400], 2))
//                                       i 
//                                  [ temp ]  
//                             [  max ]
// console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20],4)) // 39
//                                    i
//                             [ temp ]

// console.log(maxSubarraySum([-3,4,0,-2.6,-1], 2)) // 5

// console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null