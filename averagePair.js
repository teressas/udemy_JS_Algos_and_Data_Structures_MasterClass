/* Multiple Pointers - averagePair
write a function called averagePair. Given a sorted array of integers and a target average, 
determine if there is a pair of values in the array where the average of the pair equals the target average.
There may be more then one pair that matches the average target.
Bonus Constraints: 
Time: O(N)
Space: O(1)
Test Cases:
averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
*/
/* Return true if the average of any pair of values in the array match the target average */
averagePair = function (array, target) {
    // because this array is sorted we know the min value will be at the beginning of the array and max value will be at the end
    // we can have a pointer start at the beginning of the array 
    let i = 0;
    // and another pointer start at the end of the array
    let j = array.length - 1;
    // loop through the array as long as i !== j 
    while (i < j) {
        // create variable to calculate the average of the two pointer values
        let avg = array[i] + array[j] / 2
        // if array[i] + array[j] / 2 === target return true
        if (avg === target) return true;
        // else if array[i] + array[j] / 2 !== target decrement j 
        i++
        j--
    }
    return false;
}

//                               i 
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
//                                 j
//                        i  
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false
//                                  j

console.log(averagePair([1,2,3],2.5)) // true

console.log(averagePair([],4)) // false