import { reverseString } from "./easy.mjs";

// Implement a function to find the longest palindrome substring in a string.
function findLargestPalindrome(str) {
  if (str === reverseString(str)) return str;
  let largest_sub_string = "";
  let sub_string = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        if (i !== j) sub_string = str.slice(i, j + 1);
      }
    }
    if (
      largest_sub_string.length < sub_string.length &&
      reverseString(sub_string) === sub_string
    ) {
      largest_sub_string = sub_string;
    }
  }
  return largest_sub_string;
}

// console.log(findLargestPalindrome("abcdefedghi"));    //defed
// console.log(findLargestPalindrome("racecarxyzmadam"));    //racecar
// console.log(findLargestPalindrome("abcdefedghi level xyz"));    // level
// console.log(findLargestPalindrome("asdfdsa"));    //asdfdsa

// Write a function to find all permutations of a given string.

function findPerMutations(str) {
  const arr = str.split("");
  const permutations = [];

// This is my code but do some unnecessary checkings

function generateLoops(n, current = []) {
    if (current.length === n) {
        const values = current.map((i)=>arr[i])
        
        if ([...new Set(values)].length === values.length) {
            let result = ""
            for (let i = 0; i < values.length; i++) {
            result+= values[i]
        }
            permutations.push(result)
        }
      return;
    }
  
    for (let i = 0; i < n; i++) {
      generateLoops(n, [...current, i]); 
    }
  }

generateLoops(arr.length)
return permutations 


// This is not my code, but It's the fastest way for finding permutations and I know how it works

    // function permute(current, remaining) {
    //   if (remaining.length === 0) {
    //     permutations.push(current);
    //     return;
    //   }
    //   for (let i = 0; i < remaining.length; i++) {
    //     const newCurrent = current + remaining[i];
    //     const newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
    //     permute(newCurrent, newRemaining);
    //   }
    // }
  
    // permute("", arr.join(""));
    // return permutations;
}

  console.log(findPerMutations('ehsa'));   // [ 'ehs', 'esh', 'hes', 'hse', 'seh', 'she' ]

  
