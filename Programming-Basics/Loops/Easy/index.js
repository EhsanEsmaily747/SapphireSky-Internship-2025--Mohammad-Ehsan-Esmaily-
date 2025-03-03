// Question 1
// Print Numbers from 1 to 100
// Write a for loop that prints numbers from 1 to 100.

// Answer 1

function printNumbers() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}

// printNumbers()








// Question 2
// Sum of First N Natural Numbers
// Write a program that takes N as input and calculates the sum of the first N natural numbers.

// Answer 2

function sumOfN(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
}


// console.log(sumOfN(4));     //10






// Question 3
// Multiplication Table
// Ask the user for a number and print its multiplication table up to 10.

// Answer 3

function multiplicationTable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(num * i);
  }
}

// multiplicationTable(2)







//Question 4
// Reverse a Number
// Given an integer, reverse its digits. (Example: 1234 → 4321)

function reverseNumber(num) {
  const iteration = num.toString().length;
  let firstNumber = 0;
  let reverse = 0;
  let temp = num;

  for (let i = 1; i <= iteration; i++) {
    firstNumber = temp % 10;
    temp = Number.parseInt(temp / 10);
    reverse += firstNumber * 10 ** (iteration - i);
  }
  return reverse;
}

// console.log(reverseNumber(123456789)); // 987654321






// Question 5

// Count Digits in a Number
// Take a number as input and count how many digits it has.



// Answer 5

function countDigits(num) {
  return `${num} has ${num.toString().length} digits.`;
}

console.log(countDigits(123)); //123 has 3 digits



function countDigits2(num) {
  let count = 0;
  let number = num;
  
  while (number % 10 > 0) {
    number = Number.parseInt(number / 10);
    count++;
  }
  return `${num} has ${count} digits`;
}

console.log(countDigits2(1234));  // 1234 has 4 digits
