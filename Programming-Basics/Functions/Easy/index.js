// Question 1
// Convert Celsius to Fahrenheit
// Write a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit using the formula:
// F=(C×95)+32F = (C \times \frac{9}{5}) + 32F=(C×59​)+32

function celsiusToFahrenheit(c) {
  return typeof c === "number"
    ? c * (9 / 5) + 32
    : "given input is not a number";
}

console.log(celsiusToFahrenheit(0)); // 32
console.log(celsiusToFahrenheit("en")); // given input is not a number





// Question 2
// Find the Maximum of Three Numbers
// Implement a function maxOfThree(a, b, c) that returns the largest of three numbers.

function maxOfThree(a, b, c) {
  if (a >= b) {
    return a >= c ? a : c;
  } else if (b >= a) {
    return b >= c ? b : c;
  }
}

console.log(maxOfThree(1, 2, 3));        // 3
console.log(maxOfThree(1, 3, 3));        // 3
console.log(maxOfThree(7, 2, 3));        // 7




// Question 3
// Check Even or Odd
// Create a function isEven(number) that returns true if the number is even and false otherwise.

function evenOrOdd(input) {
    return typeof input === 'number' ? input % 2 === 0 ? 'even' : 'odd' : "input is not a number."
}

console.log(evenOrOdd(2));              //even
console.log(evenOrOdd(3));              //odd
console.log(evenOrOdd('en'));           //input is not a number.





// Question 4
// Count Vowels in a String
// Write a function countVowels(str) that takes a string and returns the number of vowels in it.

function countVowels(str) {
    const vowels = ['a','e','i','o','u']
    let counts = 0
    
    for (let i = 0; i < str.length; i++) {
        vowels.some((v)=>v === str[i].toLowerCase()) ? counts++ : ''
    }
    return `There are ${counts} vowels in this string.`
}

console.log(countVowels("Ehsan"));       //There are 2 vowels in this string.
console.log(countVowels("Apple"));       //There are 2 vowels in this string.
console.log(countVowels("Mohammad"));    //There are 3 vowels in this string.




// Question 5
// Reverse a String
// Implement reverseString(str), which takes a string and returns it reversed.
// Example: "hello" → "olleh"

function reverseString(str) {
    // return str.reverse()
    let reverse = []
    for (let i = (str.length - 1) ; i >= 0; i--) {
        reverse.push(str[i])
    }
    return reverse.join('')
}

console.log(reverseString("Ehsan"));   //nashE
console.log(reverseString("hello!"));   //!olleh
