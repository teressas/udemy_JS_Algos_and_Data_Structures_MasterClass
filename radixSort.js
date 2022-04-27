/* Radix Sort
* a special sorting algo that works on lists of numbers
* it never makes comparions between elements!
* if a number has more digits (4 digit) is larger then something with fewer digits than
*/

function radixSort(num) {
    // figure out how many digits the largest number has
    function getDigit(num, i) {
        return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
    }
    function digitCount(num) {
        if (num === 0) return 1;
        // Math.log10(Math.abs(num)) -> 10^? = num
        return Math.floor(Math.log10(Math.abs(num))) + 1;
    }
    function mostDigits(num) {
        let maxDigits = 0;
        for (let i = 0; i < num.length; i++) {
            maxDigits = Math.max(maxDigits, digitCount(num[i]));
        }
        return maxDigits;
    }

    // loop from k=0 up to this largest number of digits
    for(let k = 0; k <= mostDigits(num); k++) {
        // For each iteration of the loop:
        // create buckets for each digit(0 to 9)
            // place each number in the corresponding bucket based on its kth digit
        let newArr = [];
        console.log(getDigit(num, k))
        // if(getDigit(num, k) = k){
        //     console.log(k)
        // }
    }
    // replace our existing array with values in our buckets, starting with 0 and going up to 9
    // return list at the end
}

console.log(radixSort([77, 10, 100, 11, 3]))