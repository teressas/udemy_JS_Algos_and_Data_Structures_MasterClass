/* Radix Sort
* a special sorting algo that works on lists of numbers
* it never makes comparions between elements!
* if a number has more digits (4 digit) is larger then something with fewer digits than
*/

/* Radix Sort Helpers
getDigit(num, place) - returns the digit in num at the given place value
getDigit(12345, 0) // 5 (position)
getDigit(12345, 1) // 4
getDigit(12345, 2) // 3
getDigit(12345, 3) // 2
getDigit(12345, 4) // 1
getDigit(12345, 5) // 0
*/

function getDigit(num, place) {
    Math.pow(10, place)
}