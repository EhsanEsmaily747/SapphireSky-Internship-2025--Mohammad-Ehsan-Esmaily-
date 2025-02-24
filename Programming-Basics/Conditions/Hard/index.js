// Question 1
//Body Mass Index (BMI) Calculator
// Given weight (kg) and height (m), calculate BMI using BMI = weight / (height * height).
// Categorize it into:
// Underweight: BMI < 18.5
// Normal weight: 18.5 ≤ BMI < 25
// Overweight: 25 ≤ BMI < 30
// Obese: BMI ≥ 30

// Answer 1

function BMICalculator(height, weight) {
  const BMI = weight / (height * height);
  console.log(BMI);

  if (typeof BMI === "number") {
    if (BMI >= 30) {
      return "Obese";
    } else if (BMI >= 25) {
      return "Over-weight";
    } else if (BMI >= 18) {
      return "Normal weight";
    } else {
      return "Underweight";
    }
  } else {
    return "Invalid inputs";
  }
}
console.log(BMICalculator(1.7,60));  // --Normalweight
console.log(BMICalculator(1.7,70));  // --Normalweight
console.log(BMICalculator(1.7,80));  // --Overweight
console.log(BMICalculator(1.7,90));  // --Obese
console.log(BMICalculator(1.7,100)); // --Obese



// Question 2
    // Electricity Bill Calculator
        // Units Consumed:
        // Up to 100 units: $0.50 per unit
        // 101 to 200 units: $0.75 per unit
        // 201 to 500 units: $1.20 per unit
        // Above 500 units: $1.50 per unit
        // Write a program that calculates the total electricity bill.

function electricityBillCalculator(units) {
  if (units > 500) return units * 1.5;
  else if (units >= 201) return units * 1.2;
  else if (units >= 101) return units * 0.75;
  else return units * .5
}

console.log(electricityBillCalculator(700));   //1050
console.log(electricityBillCalculator(300));   //360
console.log(electricityBillCalculator(200));   //150
console.log(electricityBillCalculator(100));   //50




//Question 3
    // Password Strength Checker
        // A strong password must:
        // Be at least 8 characters long.
        // Contain at least one uppercase letter, one lowercase letter, and one number.
        // Write a program that checks if a given password is strong or weak.

function passwordStrenghtChecker(pass) {
    const regix = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
    return regix.test(pass) ? "Strong" : "Weak"
}

console.log(passwordStrenghtChecker("ehsan"));      // Weak
console.log(passwordStrenghtChecker("ehsan123"));   // Weak
console.log(passwordStrenghtChecker("Ehsan123"));   // Strong
