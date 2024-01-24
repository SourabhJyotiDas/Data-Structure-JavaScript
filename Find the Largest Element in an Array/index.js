const numbers = [8, 2, 10, 4, 6];
// console.log(findLargestElement(numbers)); // Output: 10


function largestnum(array) {
   let myNumber = 0;

   for (let i = 0; i < array.length; i++) {
      if (myNumber < array[i]) {
         myNumber = array[i];
      }
   }
   return myNumber;
}

const result = largestnum(numbers);
console.log(result);