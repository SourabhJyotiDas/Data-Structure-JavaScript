const numbers = [1, 2, 3, 4, 5];
// console.log(sumArray(numbers)); // Output: 15

function sum(arr) {
   let total = 0
   for (let i = 0; i < arr.length; i++) {
      total += arr[i];
   }
   return total;
}

const result = sum(numbers);
console.log(result);