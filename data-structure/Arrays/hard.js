// How do you remove duplicates from an array efficiently?

function removeDuplicate(array) { 
    const seen = {}
    const result = []
    for (let i = 0; i < array.length; i++) {
        if(!seen[array[i]]){
            seen[array[i]] = true
            result.push(array[i])
        }
    }
    return result

    // return [...new Set(array)]   
}

// console.log(removeDuplicate([2,2,3,3,3]));  //[ 2, 3 ]


// Write a function to find the missing number in an array of 1 to N.

function missingNumbers(array, N) {
  
    // const result = []
    // const n = 12
    // for (let i = 1; i < n; i++) {
    //     if (!array.includes(i)) {
    //         result.push(i)
    //     }
    // }
    // return result

    const result = []
    const presence = Array(N).fill(false)

    for (let i = 0; i < array.length; i++) {
        presence[array[i]]=true
    }

    for (let j = 0; j <= N; j++) {
        if(!presence[j])
        result.push(j)
    }
    return result
}
// console.log(missingNumbers([2,3,4,5,7,9,0,1],14));   //[6,  8, 10, 11, 12, 13, 14]



// How do you check if two arrays are equal?
function isEqual(array1, array2) {
    if (array1.length !== array2.length) return false  
    return array1.every((value, index)=> value === array2[index])
}

// console.log(isEqual([1,2,3],[1,2,3]));  //true
// console.log(isEqual([1,2,3],[1,2,3,4]));  //false


//Implement a function to find the subarray with the maximum sum (Kadane’s Algorithm).

function findMaxSum(array) {
    let maxSum = Number.NEGATIVE_INFINITY
    let currentSum = 0
    
    for (let i = 0; i < array.length; i++) {
        currentSum += array[i]
        if (currentSum > maxSum) {
            maxSum = currentSum
        }
        if (currentSum < 0) {
            currentSum = 0
        }   
    }
    return maxSum
}

// console.log(findMaxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));   //6


// Write a function to rearrange an array such that even numbers appear before odd numbers.

function rearrangeArray(array) {
    let arrangedArray = []
    //METHOD 1 :

    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] % 2 === 0) {
    //         arrangedArray.unshift(array[i])
    //     }else{
    //         arrangedArray.push(array[i])
    //     }
    // }

    //METHOD 2 :

    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] % 2 === 0) {
    //         arrangedArray.push(array[i])
    //         presence[array[i]]=true
    //     }
    // }
    // for (let j = 0; j < array.length; j++) {
    //     if (array[i] % 2 !== 0) {
    //         arrangedArray.push(array[j])
    //     }
    // }
    

    // METHOD 3 :

    const evens = []
    const odds = []
    for (let i = 0; i < array.length; i++) {
        if (array[i]%2===0) {
            evens.push(array[i])
        }else{
            odds.push(array[i])
        }
    }
    arrangedArray = [...evens,...odds]
    return arrangedArray
}
console.log(rearrangeArray([1,2,3,4,5,6,7,8,9,10]));   // [ 2, 4, 6, 8, 10, 1, 3, 5, 7,  9 ]
