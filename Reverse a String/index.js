const inputString = 'Hello, world!';
// console.log(reverseString(inputString)); // Output: '!dlrow ,olleH'

function reverseString(str) {
   let newStr = str.split("").reverse().join("")
   return newStr;   
}

const result = reverseString(inputString);
console.log(result);