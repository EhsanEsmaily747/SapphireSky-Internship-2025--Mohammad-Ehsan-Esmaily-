// Question 1
    // Write a function to check if a number is odd or even.

// First Answer

function evenOrOdd(num) {
    return typeof num === 'number' ? (num%2 === 0 ? "Even" : "Odd") : "not a number"  
}
console.log(evenOrOdd(200));


// Question 2
    // Write a program to check the student's score and give the student A if it's between 100-90, B if 89-80, C if 79-70, D if 69-60 and F if below 60 

// Second Answer

function checkScores(score) {

    if (typeof score !== "number" || score < 0 || score > 100) {
        console.log("Invalid Input");
        return;
    }

    switch (true) {
        case score>=90:
            console.log("A");
            break;
        case score>=80:
            console.log("B");
            break;
        case score>=70:
            console.log("C");
            break;
        case score>=60:
            console.log("D");
            break;
        case score<60:
            console.log("F");
            break;
        default:
            console.log("Invalid Input");
            break;
    }
}
checkScores(101)

// Question 3 
    // Write a program to to take two numbers and check which one is bigger .

// Third Answer

function checkBiggerNumber(num1 , num2) {
    if(num1 > num2){
        return `${num1} is greater than ${num2}`
    }else if(num2 > num1){
        return `${num2} is greater than ${num1}`
    } else{
        return "numbers are equal"
    }
}



// Question 4
    // Write a function to check the Leap year.

// Fourth Answer

function checkLeapYear(year) {
    if((year%4 === 0 && year%100 !== 0) || (year%100 === 0 && year%400 === 0)){
        return `${year} is a Leap year.`
    }else{
        return `${year} is not a Leap year.`   
    }
}
 
console.log(checkLeapYear(2001));
