/* Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates, which accepts a variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern
OR the multiple pointer pattern. 
Examples:
areThereDuplicates(1,2,3) // false
areThereDuplicates(1,2,2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions: Time - O(n) ; Space - O(n)
Bonus: Time - O(n log n) ; Space - O(1)
*/

/* Check for duplicates in the arguments passed in, arguments can vary from numbers and strings */
/////// My Solution //////////////////////////////////
areThereDuplicates = function () {
    // create a new object variable to store frequency count
    let lookup = {};
    // loop through the string
    for(let val in arguments){
        // if the object key doesn't exist in the object add the value
        // if it does then add one to the current value 
        // lookup[arg[val]] ? lookup[arg[val]] += 1 : lookup[arg[val]] = 1;
        lookup[arguments[val]] = (lookup[arguments[val]] || 0) + 1
        // console.log(lookup)
    }
    // if any of the key value pairs are greater than one than return true
    for(let key in lookup){
        if(lookup[key] > 1) return true
    }
    return false;
}

//////// Frequency Counter ////////////////////////////////////////////////////////
// function areThereDuplicates() {
//     let collection = {}
//     for(let val in arguments){
//         collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//     }
//     console.log(collection)
//     for(let key in collection) {
//         if(collection[key] > 1) return true
//     }
//     return false
// }

///////// Multiple Pointers ///////////////////////////////////////////
// function areThereDuplicates(args) {
//      // two pointers are
//     args.sort();
//     console.log(args)
//     let start = 0;
//     let next = 1;
//     while(next < args.length) {
//         console.log(args[start],args[next])
//         if(args[start] === args[next]){
//             return true
//         }
//         start++; 
//         next++;
//     }
//     return false
// }

/* Sets: 
* iterate through the elements of a set in insertion order
* a value MAY ONLY OCCUR ONCE
*/
// function areThereDuplicates(){
//     return new Set(arguments).size !== arguments.length
// }

console.log(areThereDuplicates(1,2,3)) // false
console.log(areThereDuplicates(4,1,3,2,4)) // true
console.log(areThereDuplicates(1,2,2)) // true
//{1:1, 2:2}
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 
// {a:2,b:1,c:1}