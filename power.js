/* Recursion Problem Set 1
* Write a function called power which accepts a base and an exponent. 
* The function should return the power of the base to the exponent.
* This function should mimic the functionality of Math.pow().
* Don't worry about negative bases and exponents.
*/

function power(base, exponent) {
    // base case
    if(exponent === 0) return 1
    // different input
    return base * power(base, exponent-1)
}

// console.log(power(2,0)) //1
// console.log(power(2,2)) //4
console.log(power(2,4)) //16

