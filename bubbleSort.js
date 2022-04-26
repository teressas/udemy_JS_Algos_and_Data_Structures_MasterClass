/* Bubble Sort
* Sorting algorithm where the largest values bubble up to the top! 
* performs well with nearly sorted data
Time Complexity (Best)- O(n)
Time Complexity (Average) - O(n^2)
Time Complexity (Worst) - O(n^2)
Space Complexity - O(1) - everything happens in place
*/

/* ES2015
    // const swap = (arr, idx1, idx2) => {
    //     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    // };
*/


function bubbleSort(arr) {
    /* Swap function */
    function swapArr(arr, idx1, idx2) {
        // store one index value into temp
        var temp = arr[idx1];
        // change the index value to a new index value
        arr[idx1] = arr[idx2];
        // store temp as the new index value
        arr[idx2] = temp;
    }
    // declare a variable to check if swaps were made
    let noSwaps;
    // start looping through array with a variable called i at the end of the array towards the beginning
    for (let i = arr.length; i > 0; i--) {
        // default noSwaps to true
        noSwaps = true;
        // start an inner loop with a variable called j from the beginning until i-1
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            // if arr[j] is greater than arr[j+1], swap those two values!
            if (arr[j] > arr[j + 1]) {
                swapArr(arr, j, j + 1)
                // if a swap was made the noSwaps is false
                noSwaps = false
            }
        }
        if (noSwaps) break // if noSwaps is true then break out of the loop
        console.log("one pass complete")
    }
    // return sorted array
    return arr
}
//                         i
console.log(bubbleSort([5,1,2,3,4]))
//                      j       