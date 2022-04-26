/* Quick Sort
* assumes that arrays with 0 or 1 element are always sorted
* works by selecting one element (called the pivot) and finding the index where the pivot should end up in the sorted array.
    num < pivot > num
Time Complexity (Best)- O(n log n)
Time Complexity (Avg)- O(n log n)
Time Complexity (Worst)- O(n^2)
Space Complexity O(log n)
*/

/* Pivot Helper
* Responsible for arranging elements in an array on either side of a pivot
* Given an array, this helper function should designate an element as the pivot 
* It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, 
    and all values greater than the pivot are moved to the right of the pivot.
* The order of the elements on either side of the pivot don't matter. 
* The helper should do this in place, that is, it should not create a new array
* When complete, the helper should return the index of the pivot
*/

// it will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
function pivot(arr, start = 0, end = arr.length - 1) {
    /* Swap function */
    function swap(arr, idx1, idx2) {
        // store one index value into temp
        var temp = arr[idx1];
        // change the index value to a new index value
        arr[idx1] = arr[idx2];
        // store temp as the new index value
        arr[idx2] = temp;
    }
    // grab the pivot from the start of the array
    let pivot = arr[start];
    // store the current pivot index in a variable (this will keep track of where the pivot should end up)
    let swapIdx = start;
    // loop through the array from the start until the end
    for (let i = start + 1; i < arr.length; i++) {
        // if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
        if (pivot > arr[i]) {
            swapIdx++
            swap(arr, swapIdx, i)
        }
        // console.log("inner",arr)
    }
    // swap the starting element (i.e the pivot) with the pivot index
    swap(arr, start, swapIdx)
    // console.log(arr)
    // return the pivot index
    return swapIdx
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    // your base case occurs when consider a subarray with less than 2 elements
    if(left < right) {
        // call the pivot helper on the array
        let pivotIdx = pivot(arr, left, right)
        // when the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
        quickSort(arr,left,pivotIdx-1)
        quickSort(arr,pivotIdx+1, right)
    }
    return arr
}

// console.log(pivot([26, 23, 27, 44, 17, 47, 39, 42, 43, 1]));
// console.log(pivot([28, 4, 41, 11, 16, 1, 40, 14, 36, 37, 42, 18]))
// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
// console.log(pivot([9, 4, 8, 2, 1, 5, 7, 6, 3]))

console.log(quickSort([4,6,9,1,2,5,3]))
/*
[4,6,9,1,2,5,3]
[3,1,2,4,9,5,6]
       4
3 1 2    9 5 6
    3      6
2 1        5 9
  2
1
*/


/*
 p
             pi
[26, 23, 17, 1, 27, 47, 39, 42, 43,44]
                                    i

counterpivotindex = 1
26 > 23
26 > 17
*/

/* 
 p
[28,4,41,11,16,1,40,14,36,37,42,18]
    i
counterpivotindex = 1
28 !> 41 -> swap 41 and 4

*/