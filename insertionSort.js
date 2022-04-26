/* Insertion Sort
* Builds up the sort by gradually creating a larger left half which is always sorted 
Time Complexity (Best)- O(n)
Time Complexity (Average) - O(n^2)
Time Complexity (Worst) - O(n^2)
Space Complexity - O(1) - everything happens in place
* If data is almost all sorted then it doesn't loop through all the way
* works well when data is coming in live and you need to insert it at a moment's notice.

*/

function insertionSort(arr) {
    // Start by picking the second element in the array
    for(var i = 1; i < arr.length; i++) { 
        var currentVal = arr[i];
        // Compare the second element with the current val(element before) and swap if necessary.
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) { 
            arr[j + 1] = arr[j]
            console.log("inner:",arr[j+1])
            console.log(arr)
        }
        // Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
        arr[j + 1] = currentVal
        console.log(arr)
    }
    // Repeat until the array is sorted.
    return arr
}
console.log(insertionSort([2,1,9,76,4]))
// c = 4
//           i 
// [1,2,4,9,76]
//    j
//      j+1
/*
[2,1,9,76,4]
inner: 2
[ 2, 2, 9, 76, 4 ]
[ 1, 2, 9, 76, 4 ]
[ 1, 2, 9, 76, 4 ]
[ 1, 2, 9, 76, 4 ]
inner: 76
[ 1, 2, 9, 76, 76 ]
inner: 9
[ 1, 2, 9, 9, 76 ]
[ 1, 2, 4, 9, 76 ]
[ 1, 2, 4, 9, 76 ]
*/


//                             c = 1
//                             i
// console.log(insertionSort([1,2,9]))
//                         j
//                         j+1 


// console.log(insertionSort([12, 1, 3, 10, 5]))
// console.log(insertionSort([5,3,4,2,1]))
