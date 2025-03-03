// Day of the Week
// Write a program that takes an integer (1-7) as input.
// Use switch to print the corresponding day of the week.
// 1 → "Monday"
// 2 → "Tuesday"
// ...
// 7 → "Sunday"
function dayOfTheWeek(num) {
    let day
    switch (num) {
        case 1:
            day = "Monday"            
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
        case 7:
            day = "Sunday"
            break;
        default:
            day = "input is not valid"
            break;
    }
    return day
}

console.log(dayOfTheWeek(3));   //Wednesday


// Simple Calculator
// Take two numbers and an operator (+, -, *, /).
// Use switch to perform the correct operation and return the result.

function calculator(n1, n2, operator) {
    let result
    switch (operator) {
        case '*':
            result = n1 * n2
            break;
        case "+":
            result = n1 + n2
            break;
        case "-":
            result = n1 - n2
            break;
        case "/":
            result = n1 / n2
            break;
        default:
            result = 'invalid inputs'
            break;
    }
    return result
}

console.log(calculator(2,3,'*'));  //6
console.log(calculator(2,3,'+'));  //5
console.log(calculator(2,3,'-'));  //-1
console.log(calculator(2,3,'/'));  //0.666666666666



// Traffic Light System
// Take a traffic light color ("red", "yellow", "green") as input.
// Use switch to print the corresponding action:
// "Red" → "Stop"
// "Yellow" → "Slow Down"
// "Green" → "Go"

function trafficLights(color) {
    let result
    switch (color) {
        case 'Red':
            result = 'Stop'
            break;
        case 'Yellow':
            result = 'Slow Down'
            break;
        case 'Green':
            result = 'Go'
            break;
        default:
            result = "Invalid color"
            break;
    }
    return result
}

console.log(trafficLights("Red"));   //Stop
console.log(trafficLights("Yellow"));//Slow Down
console.log(trafficLights("Green"));//Go
console.log(trafficLights("White"));  //Invalid color


// Month Name and Days
// Input a number (1-12) representing a month.
// Use switch to print the name of the month and how many days it has.


function monthIndentifier(num) {
    
      let target
      switch (num) {
        case 1:
            target = { name: "January", days: 31 }
            break;
        case 2:
            target = { name: "February", days: "28 or 29" }
            break;
        case 3:
            target = { name: "March", days: 31 }
            break;
        case 4:
            target ={ name: "April", days: 30 }
            break;
        case 5:
            target = { name: "May", days: 31 }
            break;
        case 6:
            target = { name: "June", days: 30 }
            break;
        case 7:
            target = { name: "July", days: 31 }
            break;
        case 8:
            target = { name: "August", days: 31 }
            break;
        case 9:
            target ={ name: "September", days: 30 }
            break;
        case 10:
            target ={ name: "October", days: 31 }
            break;
        case 11:
            target = { name: "November", days: 30 }
            break;
        case 12:
            target = { name: "December", days: 31 }
            break;
        default:
            target = { name: 'invalid number', days:0}
            break;
      }
      return target
    
}

console.log(monthIndentifier(1));  //{ name: 'January', days: 31 }
console.log(monthIndentifier(7));  //{ name: 'July', days: 31 }
console.log(monthIndentifier(14)); //{ name: 'invalid number', days: 0 }


// Check for Vowel or Consonant
// Take a letter as input.
// Use switch to determine whether it is a vowel or a consonant.

function checkVowel(params) {
    let result
    switch (params.toUpperCase()) {
        case 'A' :
            result = 'is vowel'
            break;
        case 'E':
            result = 'is vowel'
            break;
        case 'I':
            result = 'is vowel'
            break;
        case "O":
            result = 'is vowel'
            break;
        case "U":
            result = 'is vowel'
            break;
        default:
            result = 'is constant'
            break;
    }
    return result
}
console.log(checkVowel('I'));  //is vowel
console.log(checkVowel('C'));  //is constant
