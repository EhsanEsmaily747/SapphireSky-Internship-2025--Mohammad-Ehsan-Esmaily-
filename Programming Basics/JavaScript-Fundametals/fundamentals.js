
// Answer 1
    // The var keyword is old and doensn't know anything about scopes and is used to define global vairables and the let keyboard is newer and is used to also define variables but it's limited to it's scope which is it defined , and finally the const keyword is used for defining constants and of course it's access is limited to it's scope which is defined, variables defined with var can be redeclared but with const and let can't be redeclaired. var can becomes a browser global variable but let and const doesn't.



//Answer 2

function EvenOrOdd(num) {
    return num ? (num%2 == 0 ? "Even" : "Odd") : "not a number"  
}
alert(EvenOrOdd(200))


// Answer 3

    // the == is and === are both used for checking if the two variables or entities are equal or not, but the difference is that in == we don't consider the type of that variable or entity like 10 == "10" , the result in JS is true because it doesn't check the type of the values, but if we use the === these are not equal anymore because the type of first one is number and the second one is String. 



// Answer 4

let input = prompt("Please enter a number .")
function checkNumber(input) {
    switch (input) {
        case input > 0:
            alert('number is positive')
            break;
        case input < 0:
            alert('number is negative')
            break;
        case input == 0:
            alert('number is zero')
            break;
        default:
            alert('input is not a number')
            break;
    }
}
checkNumber(parseInt(input))



// Answer 5

    // Closure is a function that remembers the variabel of an outer function 
    // Example :
        function outer(param) {
           return function inner(params) {
                console.log(`This is outer ${param} and this is inner ${params}`);
            }
        }
        const outerResult = outer('hello')
        outerResult('Ehsan')


// Answer 6

function factorial(num) {
    let result=num;
    while (num > 1) {
        result*=num-1
        num--
    }  
    return result
}

factorial(7)


// Ansewr 7

    //this keyword refers to different objects and based on scope or the location it's being used, for example if it's used in global scope it refers to browser if it's used in an object fucntion it refers to that object, if it's used in an arrow function which is inside an regular function it refers to object inside a class it acts like a constructor inside a constructor function it refers to the new created object .


// Answer 8

    // Hoisting is like an accessing system to the function and variables that are defined in a js file, it says that you can only access the variables and functions that are definded before that line that you are right now. so we can't access the value of them before giving them the value.


//  Answer 9

    function sumArray(nums) {
        let sum = 0;
        for (let index = 0; index < nums.length; index++) {
            sum += nums[index]
        }
        return sum;
    }
    console.log(sumArray([2,3,1,3,4,5]));
    


// Answer 10

    // In the first look it might seem the same but there are some differences, the this keyword inside a regular function refers to the object if it's inside an object or refers to the global, but in arrow it's underdefinded unless it's inside and regular function so it can inherit that this from it's parent, regular function are declaired with function keyword but arrow are declaired by assigning a fucntion into a variable. the regular function are hoisted but the arrow functions are not hoisted, regular function can be used for object fucntion but arrow functions should not, because they don't have this by themeselves. and finally regular function can be used as a constructor but arrow fucntions can't.

