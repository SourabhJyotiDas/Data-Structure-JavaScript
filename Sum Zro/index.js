let arr = [-5, -4, -3, -2, 0, 1, 2, 4, 6, 8];


function sumZero(arr) {
   let output = [];
   for (let i = 0; i < arr.length; i++) {
      for (let j = 1; j < arr.length; j++) {
         if (arr[i] + arr[j] === 0) {
           output.push(arr[i], arr[j]);
           return output;
         }
      }
   }
}

let res = sumZero(arr);
console.log(res);

