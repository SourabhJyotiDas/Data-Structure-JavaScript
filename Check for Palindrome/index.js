// Example usage:
const testString1 = 'racecar';
const testString2 = 'hello';
// console.log(isPalindrome(testString1)); // Output: true
// console.log(isPalindrome(testString2)); // Output: false

function isPalindrome(str) {
   let newStr = str.split("").reverse().join("")
   if(newStr === str){
      return true;
   }else{
      return false;
   }
}

const result =  isPalindrome(testString1)
const result2 =  isPalindrome(testString2)
console.log(result);
console.log(result2);