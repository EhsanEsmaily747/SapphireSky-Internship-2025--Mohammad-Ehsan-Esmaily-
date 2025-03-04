// Write a function to reverse an array without using the built-in reverse() method.

function reverseArray(array) {
  const reverseArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  return reverseArray;
}

// console.log(reverseArray([1,2,3,4,5]));   //[ 5, 4, 3, 2, 1 ]

// How do you merge two sorted arrays into one sorted array?

function mergeArrays(array1, array2) {
  let newArray = [];
  if (array1[0] > array2[array2.length - 1]) {
    newArray = [...array2, ...array1];
  } else if (array2[0] > array1[array1.length - 1]) {
    newArray = [...array1, ...array2];
  } else {

    let i = 0;
    let j = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            newArray.push(array1[i]);
            i++;
        } else {
            newArray.push(array2[j]);
            j++;
        }
    }
    while (i < array1.length) {
        newArray.push(array1[i]);
        i++;
    }
    while (j < array2.length) {
        newArray.push(array2[j]);
        j++;
    }
  }
  return newArray;
}

// console.log(mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 10]));  //[ 1, 2, 3,  4, 5, 6, 7, 8, 10 ]

// Implement a function that rotates an array k times to the right.

function rotateArray(iteration, array) {
  for (let i = 0; i < iteration; i++) {
    array.unshift(array.splice(array.length - 1, 1)[0]);
  }
  return array;
}

// console.log(rotateArray(3,[1,2,3,4,5,6]));  //[ 4, 5, 6, 1, 2, 3 ]
// console.log(rotateArray(2,[1,2,3,4,5,6]));  //[ 5, 6, 1, 2, 3, 4 ]



// Write a function to find the second largest number in an array.

function findSecondLargest(array) {
    if (array.length<2) 
        return 'array is too small'

  let largest = array[0];
  let secondLargest = array[1];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      secondLargest = largest;
      largest = array[i];
    } else if (array[i] > secondLargest && array[i] < largest) {
      secondLargest = array[i];
    }
  }
  return secondLargest === largest ? 'no second largest' : secondLargest;
}

// console.log(findSecondLargest([1,1,2,2,3,4,3]));   //3
// console.log(findSecondLargest([1,1,1,1,1,1,1]));   //no second largest
// console.log(findSecondLargest([1]));   //array is too small




//Implement a function that finds the intersection of two arrays.

function findIntersection(array1, array2) {
    const intersection = []
    let i = 0
    let j = 0
    while (i < array1.length && j < array2.length) {
        if (array1[i] === array2[j]) {
            intersection.push(array1[i]);
            i++;
            j++;
        } else if (array1[i] < array2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return intersection

}
// console.log(findIntersection([4,5,6,7,8,9,10],[1,2,3,4,5,6,7]));   //[ 4, 5, 6, 7 ]


