/* Radix Sort
* a special sorting algo that works on lists of numbers
* it never makes comparions between elements!
* if a number has more digits (4 digit) is larger then something with fewer digits than
* Faster than any of the comparision sorts
n - length of array
k - number of digits(average)
Time Complexity (Best) - O(nk)
Time Complexity (Average) - O(nk) or O(n log n)
Time Complexity (Worst) - O(nk)
Space Complexity (Best) - O(n+dk)
*/
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

function radixSort(nums) {
    // figure out how many digits the largest number has
    let maxDigitCount = mostDigits(nums); // 3
    // loop from k=0 up to this largest number of digits
    for(let k = 0; k < maxDigitCount; k++) { // loop through 3 times
        // For each iteration of the loop:
        // create buckets for each digit(0 to 9)
        let digitBuckets = Array.from({length: 10}, () => []); // create an array of 10 empty arrays
        for(let i = 0; i < nums.length; i++){
            // place each number in the corresponding bucket based on its kth digit
            let digit = getDigit(nums[i],k) // nums[i] = 77, k = 0 -> 7
            digitBuckets[digit].push(nums[i])
        }
        // console.log(digitBuckets)
        // replace our existing array with values in our buckets, starting with 0 and going up to 9
        nums = [].concat(...digitBuckets)
        // console.log(nums)
    }
    // return list at the end
    return nums
}

console.log(radixSort([77, 10, 100, 11, 3]))