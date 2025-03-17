
// Write a function to find the largest element in an array.

function findLargest(arr) {
    let largest = arr[0]
    for (let i = 1; i < arr.length; i++) {
       largest = largest > arr[i] ? largest : arr[i]
    }    

    return largest
}

// console.log(findLargest([12,3,4,77,5,43,99]));  //99



// Write a function to find the sum of all elements in an array.


function total(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total+= array[i]
    }
    return total
}
// console.log(total([2,3,5,42,1,2]));   //55


// How do you check if an array contains a specific element?

function findTarget(target,array) {
    for (let i = 0; i < array.length; i++) {
       if(target === array[i]){
        return true
       }
    }
    return false
}

console.log(findTarget(3,[3,2,3,4,5]));     //true
console.log(findTarget(7,[3,2,3,4,5]));     //false



// Write a function to count the occurrences of a specific element in an array.
function elementOccurences(target,array) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
        target === array[i] ? count++ : ''
    }
    return count
}

// console.log(elementOccurences(25,[3,3,3,3,4,4,5,5,4,2,25]));  // 1
// console.log(elementOccurences(3,[3,3,3,3,4,4,5,5,4,2,25]));  // 4


// Implement a function to find the smallest number in an array.
function findSmallest(array) {
    let smallest = array[0]
    for (let i = 1; i < array.length; i++) {
        smallest = array[i] > smallest ? smallest : array[i]
    }
    return smallest
}

// console.log(findSmallest([2,355,3,2,2345,5433,0]));   //0
