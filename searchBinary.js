/* Binary Search
* Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.
*/

function binarySearch(sortedArr, value) {
    // create a left pointer at the start of the array
    let left = 0;
    // create a right pointer at the end of the array
    let right = sortedArr.length - 1;
    // create a pointer in the middle
    let middle = Math.floor((sortedArr[left] + sortedArr[right]) / 2)
    // console.log(middle)
    // while the left pointer comes before the right pointer
    while(left < right) {
        // if you find the value you want, return the index
        if(middle === value) return sortedArr.indexOf(value)
        // if the value is too large, move the right pointer down
        else if(value > sortedArr[left]) right-- 
        // if the value is too small, move the left pointer up
        else left++
        return sortedArr.indexOf(value)
    }
    // if you never find the value, return -1
    return -1 
}
//                m
//            i    
console.log(binarySearch([1,2,3,4,5], 2)) // 1
//                    j
console.log(binarySearch([1,2,3,4,5], 3)) // 2
console.log(binarySearch([1,2,3,4,5], 5)) // 4
console.log(binarySearch([1,2,3,4,5], 6)) // -1
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 10)) // 2
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 95)) // 16
console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99], 100)) // -1