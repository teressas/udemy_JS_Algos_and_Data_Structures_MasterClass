/* Write a recursive function called someRecursive which accepts an array and a callback. 
The function returns true if a single value in the array returns true when passed to the callback. 
Otherwise, it returns false. */
// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, callback) {
    // base case: if the array length is empty then return false;
    if (arr.length === 0) return false;
    // start with the 1st element and check the value against the callback
    if (callback(arr[0])) return true;
    console.log(arr[0], arr.slice(1), callback)
    // if not slice the 1st element from the array and check the next 1st element against callback
    return someRecursive(arr.slice(1), callback);
}

// console.log(isOdd(7))
console.log(someRecursive([1, 2, 3, 4], isOdd))
console.log(someRecursive([4, 6, 8, 9], isOdd))
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([4,6,8], val => val > 10)) // false