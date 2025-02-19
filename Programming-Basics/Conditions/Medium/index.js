// Question 1
// write a program which takes 3 sides of a shape and check if it's a valid triangle or not.

// Answer 1

function isValidTriangle(a, b, c) {
  return a + b > c || a + c > b || b + c > a
    ? "the triangle is valid"
    : "the triangle is invalid";
}

console.log(isValidTriangle(2, 3, 4));
console.log(isValidTriangle(1, 2, 6));

// Question 2

//Speeding Ticket Calculator
// Speed limit = 60 km/h.
// If a driver goes above the speed limit, they get a fine.
// If they are driving over 100 km/h, they get double the fine.
// Implement a program that takes speed as input and determines the fine.

// Answer 2

function ticketCalculator(speed) {
  const speed_limit = 60;
  const double_fine = 100;

  if (speed > speed_limit) {
    if (double_fine > speed) {
      return "10$";
    } else {
      return "20$";
    }
  } else {
    return "No fine";
  }
}

console.log(`you are charged ${ticketCalculator(50)}`);
console.log(`you are charged ${ticketCalculator(500)}`);
console.log(`you are charged ${ticketCalculator(80)}`);

// Question 3
//ATM Withdrawal
// A person wants to withdraw money from an ATM.
// If the withdrawal amount is a multiple of 10, allow withdrawal.
// If not, print an error message.
// If the account balance is less than the withdrawal amount, print "Insufficient Funds".

// Answer 3

function atmWithdrawal(amount) {
  const balance = "1000";
  if (amount % 10 === 0) {
    if (balance > amount) {
      return "withdrawal approved";
    } else {
      return "Insufficient Funds";
    }
  } else {
    return "Error";
  }
}

console.log(atmWithdrawal(900));
console.log(atmWithdrawal(1100));
console.log(atmWithdrawal(99));


