// Question 1
//Generate Pascal’s Triangle
// Implement pascalTriangle(rows), which prints Pascal’s Triangle up to rows rows.

function generatePascalTriangle(rows) {
  const triangle = [];

  for (let i = 0; i < rows; i++) {
    const row = [1]; // First element is always 1
    for (let j = 1; j < i; j++) {
      row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]); // Sum of above two numbers
    }
    if (i > 0) row.push(1); // Last element is always 1
    triangle.push(row);
  }

  return triangle;
}

function printPascalTriangle(rows) {
  const triangle = generatePascalTriangle(rows);

  for (let i = 0; i < triangle.length; i++) {
    // Add spaces for alignment
    const spaces = " ".repeat(rows - i);
    const rowString = triangle[i].join(" ");
    console.log(spaces + rowString);
  }
}

// Example Usage
printPascalTriangle(8);

//  *
// ***
//*****

// Question 2
// Binary Search Algorithm
// Write a function binarySearch(arr, target) that performs a binary search on a sorted array.

function binarySearch(arr, target) {
  let mid;
  let first = 0;
  let last = arr.length;
  for (let i = 0; i < arr.length / 2; i++) {
    mid = (first + last) / 2;
    if (arr[mid] === target) return `The target is in index ${mid}th`;
    else if (arr[mid] > target) last = mid - 1;
    else if (arr[mid] < target) first = mid + 1;
    else return "The target is not in array.";
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 7)); //The target is not in array.
console.log(binarySearch([1, 2, 3, 4, 5, 6], 4)); //The target is in index 3th

// Question 3
// Convert Decimal to Binary
// Implement decimalToBinary(n), which converts a decimal number to its binary equivalent.

function decimalToBinary(number) {
  const binaryNumber = [];
  let userInput = number;
  while (userInput >= 1) {
    const binary = userInput % 2;
    userInput = userInput / 2;
    binaryNumber.push(Number.parseInt(binary));
  }
  return binaryNumber.reverse().join("");
}

console.log(decimalToBinary(14)); // 1110
console.log(decimalToBinary(20)); // 10100
console.log(decimalToBinary(8)); // 1000

// Question 4
// Sorting an Array Using Bubble Sort
// Write a function bubbleSort(arr) that sorts an array using the Bubble Sort algorithm.

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([9, 3, 4, 1, 2, 6])); //[ 1, 2, 3, 4, 6, 9 ]



// Question 5
// Find Unique Elements in an Array
// Create findUnique(arr), which returns an array with only the unique elements from the input array.
// Example: [1, 2, 2, 3, 4, 4, 5] → [1, 3, 5]

function findUnique(arr) {
  const uniques = {};
  for (const element of arr) {
    if (!(element in uniques)) {
      uniques[element] = true;
    } else {
      uniques[element] = false;
    }
  }
  return Object.keys(uniques).filter((key)=>uniques[key]).map(Number)
}

console.log(findUnique([1, 2, 3, 4, 5, 3, 2, 5, 7, 1, 1]));
