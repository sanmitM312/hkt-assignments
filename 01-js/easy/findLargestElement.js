/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
  Also for windows users; to run tests it is "npx jest ./tests/findLargestElement.test.js" not with backslash path
*/

function findLargestElement(numbers) {
    let largestNum = numbers[0];
    for(let i=0; i < numbers.length; i++){
        if(numbers[i] > largestNum){
            largestNum = numbers[i];
        }
    }
    return largestNum;
}

module.exports = findLargestElement;
