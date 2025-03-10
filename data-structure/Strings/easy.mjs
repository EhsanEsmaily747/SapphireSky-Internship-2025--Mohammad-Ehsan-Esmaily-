// Write a function to check if a string is a palindrome.

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



// How do you count the number of vowels in a string?

function countVowels(str) {
    const vowels = ['a','e','i','o','u']
    let counts = 0
    
    for (let i = 0; i < str.length; i++) {
        vowels.some((v)=>v === str[i].toLowerCase()) ? counts++ : ''
    }
    return `There are ${counts} vowels in this string.`
}

// console.log(countVowels("Ehsan"));       //There are 2 vowels in this string.
// console.log(countVowels("Apple"));       //There are 2 vowels in this string.
// console.log(countVowels("Mohammad"));    //There are 3 vowels in this string.



// Write a function to reverse a string.

export function reverseString(str) {
    const reverse = []
    for (let i = (str.length - 1) ; i >= 0; i--) {
        reverse.push(str[i])
    }
    return reverse.join('')
}

// console.log(reverseString("Ehsan"));   //nashE
// console.log(reverseString("hello!"));   //!olleh


// How do you remove spaces from a given string?

function removeSpace(str) {
    return str.split(' ').join('')
}
// console.log(removeSpace('hello my name is ehsan'));   //hellomynameisehsan



// Write a function to capitalize the first letter of each word in a string.

function capitalize(str) {
// Method 1
//   return str.split(' ').map((word)=> word.split('').map((letter,index)=>index === 0 ? letter.toUpperCase() : letter).join('')).join(' ')

// Method 2
    return str.replace(/\b\w/g, (char)=>char.toUpperCase())
}

// console.log(capitalize("hello ehsan my name is morteza"));  //Hello Ehsan My Name Is Morteza
 

