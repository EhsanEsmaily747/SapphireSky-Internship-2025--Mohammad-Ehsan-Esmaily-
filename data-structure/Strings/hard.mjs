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
      const values = current.map((i) => arr[i]);

      if ([...new Set(values)].length === values.length) {
        let result = "";
        for (let i = 0; i < values.length; i++) {
          result += values[i];
        }
        permutations.push(result);
      }
      return;
    }

    for (let i = 0; i < n; i++) {
      generateLoops(n, [...current, i]);
    }
  }

  generateLoops(arr.length);
  return permutations;

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

// console.log(findPerMutations('ehsa'));   // [ 'ehs', 'esh', 'hes', 'hse', 'seh', 'she' ]

// Implement a function to count the number of occurrences of each character in a string.
function charOccurences(str) {
  let result = ''
  let count = 1
  for (let i = 0; i < str.length; i++) {
    for (let j = i+1; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++
      }
    }
    if (!result.includes(str[i])) {
      result += `${str[i]} : ${count} \n`
      count = 1
    }
  }
  return result
}

// console.log(charOccurences("ehsanesmaily"));
// e : 2 
// h : 1
// s : 2
// a : 2
// n : 1
// m : 1
// i : 1
// l : 1
// y : 1



// How do you check if a string follows a given pattern (e.g., "abba" follows "dog cat cat dog")?
function doesFollowPattern(pattern, str) {
  
  const arr = str.split(" ")
  if(arr.length !== pattern.length) return false

  // Method 1
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i+1 ; j < arr.length; j++) {
  //     if (pattern[i] === pattern[j] && arr[i] !== arr[j]) {
  //       return false 
  //     }
  //   }
  // }


  // Method 2

  let i = 0
  while (i < arr.length) {
    const pattern_indexes = findIndexes(pattern, pattern[i])
    const str_indexes = findIndexes(arr,arr[i])    
    if(JSON.stringify(pattern_indexes) !== JSON.stringify(str_indexes))return false
    i++
  }
  return true
}

function findIndexes(str, char) {
  return [...str].map((c, i) => (c === char ? i : -1)).filter(i => i !== -1);
}
// console.log(doesFollowPattern('abba', 'dog cat cat '));     //false
// console.log(doesFollowPattern('abba', 'dog cat cat cat'));  //false
// console.log(doesFollowPattern('abba', 'dog cat cat dog'));  //true



// Implement a function to convert a given sentence into its abbreviation ("I am learning JavaScript" → "I a l J").
function changeToAbbreviation(str) {
    return str.split(' ').map((word)=>word[0]).join(" ")   //  I a L J
}

console.log(changeToAbbreviation("I am Learning JavaScript"));
