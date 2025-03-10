// How can you find the first non-repeating character in a string?

function findUniqueChar(str) {
  let unique;
  let i = 0;
  let j = 1;

  while (i < str.length && j < str.length) {
    if (i !== j && str[i] === str[j]) {
      unique = null;
      i++;
      j = 0;
    } else {
      unique = str[i];
      j++;
    }
  }
  return unique;
}

// console.log(findUniqueChar('babakckcs'));   //s
// console.log(findUniqueChar('mohammad'));    //o
// console.log(findUniqueChar('Ehsan'));       //E

// Write a function to check if two strings are anagrams.
function isAanagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  // Method 1
  // return str1.split("").every((char) => str2.split("").some((ch) => ch === char));

// Method 2
//   for (let i = 0; i < str1.length; i++) {
//     if (!str2.includes(str1[i])) return false;
//   }
//   return true;

// Method 3
// let exists = false
// for (let i = 0; i < str1.length; i++) {
//     for (let j = 0; j < str2.length; j++) {
//         if(str1[i] === str2[j]) {
//             exists = true
//             j = str2.length
//         }
//     }
//     if (exists) exists = false
//     else return false
// }
// return true

// Method 4
const strMap = {}
for (const char of str2) {
    strMap[char] = (strMap[char] || 0) + 1
}

for (const char of str1) {
    if (strMap[char]) strMap[char]--
    else return false 
}
return true
}

console.log(isAanagram("care", "race")); // true
console.log(isAanagram("care", "cera")); // true
console.log(isAanagram("care", "recc")); //false
console.log(isAanagram("care", "recca")); //false

// Implement a function to compress a string using character counts ("aabcccccaaa" → "a2b1c5a3").
function characterCounter(str) {
  let char = "";

  let i = 0;
  let j = 1;
  let count = 1;
  while (i < str.length) {
    if (str[i] === str[j]) {
      count++;
      j++;
    } else {
      char += str[i];
      char += count;
      i = j;
      j++;
      count = 1;
    }
  }
  return char;
}
// console.log(characterCounter('aabccccddaaa'));     //a2b1c4d2a3

// How do you check if one string is a rotation of another string?

function isRotation(str1, str2) {
  if (str1.length !== str2.length) return false;
  // Method 1

  // const rotations = []
  // const stringArray = str1.split('')
  // for (let j = 0; j < str1.length-1; j++) {
  //     let newValue
  //     let savedValue = stringArray[0]
  //     for (let i = 1; i < stringArray.length; i++) {
  //         newValue = stringArray[i]
  //         stringArray[i] = savedValue
  //         savedValue = newValue
  //         if (i === stringArray.length - 1) {
  //             stringArray[0] = savedValue
  //         }
  //     }
  //     rotations.push(stringArray.join(''))
  // }
  // return rotations.some(str => str === str2)

  // Method 2
  // const rotations = []
  // for (let i = 0; i < str1.length - 1; i++) {
  //     const arr = str1.split('')
  //     arr.unshift(arr.splice(str1.length - 1, 1)[0]);
  //     str1 = arr.join('')
  //     rotations.push(str1)
  // }

  // return rotations.some(str => str === str2)

  // Method 3
  //   let checker = 0;
  //   let i = 0;
  //   let j = 0;
  //   let running = true;
  //   while (checker < str1.length && running) {
  //     if (str1[i] === str2[j]) {
  //       checker++;
  //       i++;
  //       j++;
  //       if (j === str2.length) {
  //         j = 0;
  //       }
  //     } else {
  //       if (checker >= str1.length / 2 || j >= str1.length) running = false;
  //       // every time that the condition is false the j value must be one count bigger than it's starting value
  //       j = j - checker + 1;
  //       checker = i = 0;
  //     }
  //   }
  //   return checker === str1.length;

  // Method 4
  return (str2 + str2).includes(str1);
}

// console.log(isRotation('mohammad','dmohamma'));  //true
// console.log(isRotation('mohammad','admohamm'));  //true
// console.log(isRotation('mohammad','madmoham'));  //true
// console.log(isRotation('mohammad','mmadmoha'));  //true
// console.log(isRotation('mohammad','hammadmo'));  //true
// console.log(isRotation('mohammad','ohammadm'));  //true
// console.log(isRotation('mohammad','mohammad'));  //true
// console.log(isRotation('mohammad','mohaamad'));  //false
// console.log(isRotation('mohammad','oasdddss'));  //false
// console.log(isRotation('test','ttes'));   // true
// console.log(isRotation('test','test'));   // true
// console.log(isRotation('test','stte'));   // true
// console.log(isRotation('test','estt'));   // true
// console.log(isRotation('test','ttegs'));   // false
// console.log(isRotation('test','tess'));   // false

// Write a function to check if a string contains only unique characters.

function isOnlyUnique(str) {
  // Method 1

  // let seen = new Set();
  // for (let char of str) {
  //     if (seen.has(char)) return false;
  //     seen.add(char);
  // }
  // return true;

  // Method 2
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

// console.log(isOnlyUnique("ehsan"));    //true
// console.log(isOnlyUnique("mohammad")); //false
// console.log(isOnlyUnique("kamran"));  //false
// console.log(isOnlyUnique("nawid"));   //true
