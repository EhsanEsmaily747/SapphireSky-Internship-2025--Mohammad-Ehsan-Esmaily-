// Print Prime Numbers from 1 to 100
// Use a loop inside another loop to check for prime numbers in a range.

function printPrime(){
    let count = 0
    for (let i = 1; i < 100; i++) {
        for (let j = 1; j < i; j++) {
            if (i%j === 0 ) {
                count++
            }
        }
        if (count<=1) {
            console.log(i);
        }
        count = 0
    }
}
printPrime()



// Pascal’s Triangle
// Generate Pascal’s Triangle up to N rows.

function generatePascalTriangle(rows) {
    const triangle = [];
  
    for (let i = 0; i < rows; i++) {
      const row = [1];
      for (let j = 1; j < i; j++) {
        row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);    }
      if (i > 0) row.push(1);
      triangle.push(row);
    }
    return triangle;
  }
  
  
  function printPascalTriangle(rows) {
    const triangle = generatePascalTriangle(rows);
  
    for (let i = 0; i < triangle.length; i++) {
      
      const spaces = " ".repeat((triangle.length - i)+5);
      const rowString = triangle[i].join("  ");
      console.log(spaces + rowString);
    }
  }
  
  printPascalTriangle(5);




// Matrix Multiplication
// Given two matrices, multiply them using nested loops.

function multiplyMetrices(arr1,arr2) {
    
    const firstMetrixRows = arr1.length
    const firstMetrixColumns = arr1[0].length
    const secondMetrixColumns = arr2[0].length


    const result = new Array(firstMetrixRows)
    for (let i = 0; i < firstMetrixRows; i++) {
        result[i] = new Array(secondMetrixColumns).fill(0)
    }

    for (let i = 0; i < firstMetrixRows; i++) {
        for (let j = 0; j < secondMetrixColumns; j++) {
            for (let k = 0; k < firstMetrixColumns; k++) {
                result[i][j] += arr1[i][k] * arr2[k][j]
            }
            
        }
        
    }
    return result
}

const A = [
    [1, 2, 3],
    [4, 5, 6]
];

const B = [
    [7, 8],
    [9, 10],
    [11, 12]
];

console.table(multiplyMetrices(A,B));
