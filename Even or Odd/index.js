const number = 8;


function isEvenOrOdd(num) {
   if(num % 2 === 0){
      return "Even"
   }
   return "Odd"
}

const result = isEvenOrOdd(number);
console.log(result);