// Question 1

// Armstrong Number
// A number is an Armstrong number if the sum of its digits raised to the power of the number of digits equals the number itself.
// Example: 153 = (1³ + 5³ + 3³) = 153
// Write a program that checks if a given number is an Armstrong number.


function isArmstrong(num) {
    let result = 0;
    let userInput = num
    let firstNumber
    const digitCount = num.toString().length;
    for (let i = 0; i < digitCount; i++) {
        firstNumber = userInput % 10;
        result += firstNumber ** digitCount
        userInput = Number.parseInt(userInput/10)
    }
    return num === result ? `${num} is an Armstrong number` : `${num} isn't an Armstrong number`
    
}

console.log(isArmstrong(153));    //153 is an Armstrong number
console.log(isArmstrong(152));    //152 isn't an Armstrong number
console.log(isArmstrong(9474));   //9474 is an Armstrong number






// Question 2
    // Collatz Sequence (Hailstone Numbers)`
    // Take a number n.
    // If n is even, divide it by 2.
    // If n is odd, multiply it by 3 and add 1.
    // Repeat this process until n = 1.
    // Count how many steps it takes to reach 1.`

    function collatzSequenceCounter(number) {
        let userInput = number
        let counter = 0
        while (userInput !== 1) {
            userInput = userInput % 2 === 0 ? userInput/2 : (userInput*3)+1
            counter++
        }
        return counter
    }

    console.log(collatzSequenceCounter(6));  //8




// Question 3

// Find GCD (Greatest Common Divisor)
// Given two numbers, find their GCD using a loop.

function findGCD(num1, num2) {
    const biggerNumber = num1 > num2 ?  num2 :  num1
    let targetNumber = 1
    for (let i = 1; i <= biggerNumber; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            if (i>targetNumber) {
                targetNumber = i
            }
        }        
    }
    return targetNumber
}
console.log(findGCD(48,180));    // 12






//Question 4

// Pattern Printing - Pyramid
// Write a program that prints this pattern for N = 5:
// markdown
// CopyEdit
//    *  
//   ***  
//  *****  
// ******* 

function printPyramid(num) {
    for (let i = 0; i < num; i++) {
        for (let k = num; k>=i; k--) {
            process.stdout.write(" ");
        }
        for (let j = 0; j <= i*2; j++) {
            process.stdout.write("*");
        }
        console.log();
    }
}
printPyramid(8)






// Question 5
// Number Guessing Game
// - The program randomly selects a number between 1 and 100.
// - The user must guess the number.
// - The program gives hints like "Too High" or "Too Low".
// - The loop continues until the user guesses correctly.


const readline = require("readline");


async function guessNumber(num) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      
    const askQuestion = (query) => new Promise(resolve => rl.question(query, resolve));
    const randomNumber = ((Math.random()*100)+1).toFixed();

    let number = await askQuestion("Guess the number ? ");
    while (number !== randomNumber) {
        if(number >= randomNumber){
            console.log("Too high");
        }else{
            console.log("Too low");
        }
        number = await askQuestion("guess again : ");
    }
    rl.close()
    console.log("You got it .");   
}
// guessNumber()
