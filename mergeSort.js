/* Merge Sort
Time Complexity (Best): O(n log n)
Time Complexity (Average): O(n log n)
Time Complexity (Worse): O(n log n)
Space Complexity: O(n)
*/

/* merging arrays function */
function merge(arr1, arr2) {
    // create an empty array, take a look at the smallest values in each input array
    let result = [];
    let i = 0;
    let j = 0;
    // while there are still values we haven't looked at...
    while (i < arr1.length && j < arr2.length) {
        // if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++
        }
        // if the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on the next value in the second array
        else {
            result.push(arr2[j]);
            j++
        }
        // console.log("21", result)
    }
    // Once we exhaust one array, push in all remaining values from the other array.
    while (i < arr1.length) { // this will run when arr1 is longer
        result.push(arr1[i]);
        // console.log("26", result);
        i++;
    }
    while (j < arr2.length) { // this will run when arr2 is longer
        result.push(arr2[j]);
        // console.log("31", result)
        j++;
    }
    return result
}

//                     i        j
//console.log(merge([1, 10, 50, 55, 60], [2, 14, 99, 100]))
// result[1, 2, 10, 14, 50]


/* MergeSort function */

function mergeSort(arr) {
    // base case: array.length is less than or equal to 1
    if (arr.length <= 1) return arr;
    // Break up the array into halves until you have arrays that are empty or have one element
    // use array.slice to break up the array from 0 to the middle and middle to 0
    // keep going recursively
    // Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
    // Once the array has been merged back together, return the merged(and sorted) array
    
    
    // let newArr = [];

    let mid = Math.floor(arr.length / 2)
    console.log("m:",mid)
    let left = mergeSort(arr.slice(0,mid))
    console.log("l:",left)
    let right = mergeSort(arr.slice(mid))
    console.log("r:",right)
    return merge(left, right)   
}

console.log(mergeSort([14, 33, 3, 10]))
/* 
m: 2 
m: 1
l: [ 14 ]
r: [ 33 ]
l: [ 14, 33 ]
m: 1
l: [ 3 ]
r: [ 10 ]
r: [ 3, 10 ]
[ 3, 10, 14, 33 ]
*/
