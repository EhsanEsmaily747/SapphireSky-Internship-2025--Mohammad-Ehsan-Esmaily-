// Question 1
// Check if a Number is Prime
// Write a function isPrime(n) that returns true if n is a prime number and false otherwise.

function isPrime(number) {
  let count = 0;
  for (let i = 1; i < number; i++) {
    number % i ? count++ : "";
  }
  return count > 2;
}

console.log(isPrime(3)); //True
console.log(isPrime(14)); //False
console.log(isPrime(11)); //True

// Question 2
// Calculate Factorial Using Recursion
// Implement factorial(n), which calculates the factorial of n using recursion

function factorial(num) {
  return num > 0 ? factorial(num - 1) * num : 1;
}

console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

// Question 3
// Find the GCD of Two Numbers
// Write a function gcd(a, b) that finds the Greatest Common Divisor (GCD) using the Euclidean algorithm

function gcd(a, b) {
  return b !== 0 ? gcd(b, a % b) : a;
}

console.log(gcd(110, 10)); // 10
console.log(gcd(110, 11)); // 11

// Question 4
// Find the nth Fibonacci Number
// Implement fibonacci(n), which returns the nth Fibonacci number.

function fibonacci(n) {
 let num1 = 1
 let num2 = 0
 let temp
  for (let i = 0; i < n; i++) {
    temp = num2
    num2 = num1 + num2
    num1 = temp
  }
  return temp
}

console.log(fibonacci(6));      //5   
console.log(fibonacci(7));      //8
console.log(fibonacci(8));      //13



// Question 5
// Check if a String is a Palindrome
// Write a function isPalindrome(str) that returns true if the given string is a palindrome.
// Example: "racecar" → true, "hello" → false



function reverseString(str) {
    let reverse = []
    for (let i = (str.length - 1) ; i >= 0; i--) {
        reverse.push(str[i])
    }
    return reverse.join('')
}

function isPalidrome(str) {
    return str === reverseString(str)
}

console.log(isPalidrome("racecar"));    //true
console.log(isPalidrome("hello"));      //false
