/* Flatten
* Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened. */

function flatten(arr) {
    // create variable called result to return new array
    let result = [];
    // loop through the array
    for (let i = 0; i < arr.length; i++) {
        // check if the element is an array 
        if(Array.isArray(arr[i])) {
            console.log("a",arr[i])
            console.log("b",flatten(arr[i]));
            console.log("c", result.concat(arr[i]));
            // if it is add the value to the result array
            result = result.concat(flatten(arr[i]));
            console.log("d",result)
        } 
        else {
            // else push the value into array
            result.push(arr[i]);
            console.log("e",result)
        }
    }
    // return result array
    return result
}

//console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
//                   0   1   2       3 4     
// console.log(flatten([1, [2, [3, 4], [ [5]]]])) // [1, 2, 3, 4, 5]

console.log(flatten([[1],[2],[3]])) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]