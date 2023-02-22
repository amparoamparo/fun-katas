/*

Add FizzBuzz multiples below a certain number

The challenge is to implement a function which adds all the multiples of three and five below a certain number

Examples
--------

If we list all the numbers below 12 that are multiples of 3 or 5, we get 3, 5, 6, 9 and 10. The sum of these multiples is 33.

calculateDivisors(1);
should return 0

calculateDivisors(5);
should return 3

calculateDivisors(6);
should return 8

calculateDivisors(10);
should return 23

calculateDivisors(12);
should return 33

*/

// Please do not change the name of this function
function calculateDivisors(num) {

  let sum = 0;

  // iterate through all numbers up to num, find out if there are any multiples of 3 or 5, and add them to sum
  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  
  return sum;
}

module.exports = calculateDivisors;
