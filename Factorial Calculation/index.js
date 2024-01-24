// Example usage:
const number = 5;
// console.log(factorial(number)); // Output: 120

function factorial(n) {
   if (n === 0 || n === 1) {
     return 1;
   } else {
     return n * factorial(n - 1);
   }
 }
console.log(factorial(number)); // Output: 120

