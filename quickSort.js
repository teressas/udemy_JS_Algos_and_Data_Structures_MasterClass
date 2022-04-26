/* Quick Sort
* assumes that arrays with 0 or 1 element are always sorted
* works by selecting one element (called the pivot) and finding the index where the pivot should end up in the sorted array.
    num < pivot > num
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

function pivotHelper(arr){
    pivot = 0;
    counterpivotindex = 0;
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > arr[pivot] && i > pivot) {
            counterpivotindex++
            
        }
        else if(arr[pivot] < arr[i]){
            counterpivotindex++
        }
        else{

        }
    }
}
console.log(pivotHelper([26, 23, 27, 44, 17, 47, 39, 42, 43, 1]));

/*
 p
[26, 23, 27, 44, 17, 47, 39, 42, 43, 1]
     i

counterpivotindex = 0
26 > 23
26 > 17
*/