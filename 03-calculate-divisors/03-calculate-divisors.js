/*

Add FizzBuzz multiples below a certain number

The challenge is to implement a function which adds all the multiples of three and five below a certain number

*/

function calculateDivisors(num) {

  let sum = 0;

  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  
  return sum;
}

module.exports = calculateDivisors;
