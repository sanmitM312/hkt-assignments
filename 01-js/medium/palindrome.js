/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const str2 = str.toLowerCase().split(/[,\\.!\? ]/).join("");
  console.log(str2);
  let len = str2.length;
  for(let i = 0; i < len; i++){
    if(str2[i] != str2[len-i-1]){
      return false;
    }
  }
  return true;
}
module.exports = isPalindrome;
