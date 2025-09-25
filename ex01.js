/*
In this exercise, we will be given an array of 2 or more numbers. 
We will then have to find the two largest numbers in that array, and sum them together.

Instruction
Create a function named sumLargestNumbers that will receive an array of numbers and return the sum of the two largest numbers in that array.
*/

const sumLargestNumbers = function (data) {
  let largestNumber1 = 0;
  let largestNumber2 = 0;
  data.forEach((element) => {
    if (element > largestNumber1) {
      largestNumber2 = largestNumber1;
      largestNumber1 = element;
    } else if (element > largestNumber2) {
      largestNumber2 = element;
    }
  });

  return largestNumber1 + largestNumber2;
};

console.log(sumLargestNumbers([1, 10])); // 11
console.log(sumLargestNumbers([1, 2, 3])); // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // 126

module.exports = sumLargestNumbers;
