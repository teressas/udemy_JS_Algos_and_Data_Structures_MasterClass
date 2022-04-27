/* Radix Sort Helpers
getDigit(num, place) - returns the digit in num at the given place value
getDigit(12345, 0) // 5 (position)
getDigit(12345, 1) // 4
getDigit(12345, 2) // 3
getDigit(12345, 3) // 2
getDigit(12345, 4) // 1
getDigit(12345, 5) // 0
*/

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
// console.log(getDigit(732,2)) // 7

function digitCount(num) {
  if (num === 0) return 1;
  // Math.log10(Math.abs(num)) -> 10^? = num
  return Math.floor(Math.log10(Math.abs(num))) + 1; 
}

// console.log(digitCount(732))

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

console.log(mostDigits([23,567,89,12234324,90]))










