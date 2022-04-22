/* Write a function called productOfArray which takes in an array of numbers and returns the product of them all. 
*/

function productOfArray(array) {
    // base case
    if(array.length === 0) return 1;
    // different input
    return array[0] * productOfArray(array.slice(1));
}

console.log(productOfArray([1, 2, 3])) // 6
//productOfArray([1,2,3,10]) // 60
// console.log(productOfArray([1])) // 0