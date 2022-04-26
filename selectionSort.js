/* Selection Sort
* Similiar to bubble sort, but instead of first placing large value into sorted position, it places small values into sorted position.
Performs really slow on nearly sorted data
Time Complexity (Best)- O(n^2)
Time Complexity (Average) - O(n^2)
Time Complexity (Worst) - O(n^2)
Space Complexity - O(1) - everything happens in place
*/

function  selectionSort(arr) {
    /* Swap function */
    function swapArr(arr, idx1, idx2) {
        // store one index value into temp
        var temp = arr[idx1];
        // change the index value to a new index value
        arr[idx1] = arr[idx2];
        // store temp as the new index value
        arr[idx2] = temp;
    }
    // store the first element as the smallest value you've seen so far.
    for(let i = 0; i < arr.length; i++) {
        let min = i; 
        for(let j = i+1 ; j < arr.length; j++) {
            // console.log(i,j);
            // Compare this item to the next item in the array until you find a smaller number.
            if(arr[j] < arr[min]) {
                // If a small number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
                min = j;
                console.log(min)
                // If the "minimum" is not the value (index) you initially begain with, swap the two values.
            }
        }
        if(i !== min) {
            swapArr(arr, i, min);
            // console.log(i, min)
        }
        // Repeat this with the next element until the array is sorted.
    }     
    return arr
}
//                           i
console.log(selectionSort([1,3,4,5,2]))
//                                 j
//                           m

// console.log(selectionSort([10,3,34,25,2]))