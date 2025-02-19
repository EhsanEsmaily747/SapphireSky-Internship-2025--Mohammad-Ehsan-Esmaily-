// Question 1

// Check for Prime Number
// Write a program that takes a number as input and checks if it is prime.

function isPrime(num) {
    if (typeof num === 'number') {
        let prime = false
        for (let i = 1; i < num; i++) {
            if(num % i === 0){
                prime=!prime
            }
        }
        return prime ? `${num} is a primitive number.` : `${num} is not a primitive number.`
    }else{
        return 'Input is not a number.'
    }
}

console.log(isPrime('hi'));   //Input is not a number.
console.log(isPrime(11));     //11 is a primitive number.
console.log(isPrime(121));    //121 is not a primitive number.



// Question 2 
    // Factorial of a Number
    // Implement a function that calculates the factorial of a number using a loop.

    function factorial(num) {
        let result = 1
        for (let i = 1; i <= num; i++) {
            result *= i
        }
        return result
    }

    console.log(factorial(4));  //24
    

    // Question 3
        // Find Largest and Smallest in a List
        // Given an array of numbers, find the largest and smallest numbers using a loop.

    
    function checkLargest(num){
        let temp =  0
        for (let i = 1; i < num.length; i++) {
            for (let j = 0; j < i; j++) {
                if (num[j]>num[i]) {
                    temp = num[i]
                    num[i] = num[j]
                    num[j] = temp
                }
            }
        }
        return `the smallest number is ${num[0]} and the largest number is ${num[num.length-1]}`
    }    
    
    console.log(checkLargest([1,2,4,522,4,2,0,-10]));    //the smallest number is -10 and the largest number is 522




// Question 4
    // Fibonacci Sequence
    // Print the first N Fibonacci numbers using a loop.

    function fibonacciNumbers(count) {
        let num1 = 1
        let temp 
        let num2 = 0

        for (let i = 0; i < count; i++) {
            console.log(num2);
            temp = num2
            num2 = num1 + num2
            num1 = temp
        }
    }

    fibonacciNumbers(3)


// Question 5
// Palindrome Checker
// Write a program that checks if a given number is a palindrome (Example: 121 → True, 123 → False).


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

function  isPalidrome(num) {
    return reverseNumber(num) === num ? `${num} is a palindrome number` : `${num} is not a palindrome number` 
}

console.log(isPalidrome(231));   //231 is not a palindrome number
console.log(isPalidrome(232));   //232 is a palindrome number
