/* Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values 
in the array. There can be negative numbers in the array, but it will always be sorted. 
// take a sorted array and return a count of the unique values
countUniqueValues([1,1,1,1,1,2]) // 2
                   i 
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
                     j   
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
countUniqueValues([1,1,1,2,3,3,4,4,5,6])
Time Complexity - O(n)
Space Complexity - O(n)
*/
function countUniqueValues(array) {
    // if the array is empty return 0
    if(array.length == 0) return 0
    // have a pointer called i start at index 0
    let i = 0
    // have a for loop start at index 1
    for (let j = 1; j < array.length; j++) {
        // if the value at the 0 index is less than the value at the 1st index
        if (array[i] !== array[j]) {
            i++
            array[i] = array[j]
        }
    }
    // when j reaches the end of the array, return the current position plus 1
    return i + 1
}
// Result
/*                                            i 
console.log(countUniqueValues([1, 2, 3, 4, 5, 6, 4, 4, 5, 6]))
                                                          j */
console.log(countUniqueValues([1, 1, 1, 2, 3, 3, 4, 4, 5, 6]))
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))
console.log(countUniqueValues([-2, -1, -1, 0, 1]))