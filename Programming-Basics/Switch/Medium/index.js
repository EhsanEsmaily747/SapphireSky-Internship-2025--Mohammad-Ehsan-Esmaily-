// Student Grade System
// Take a student's score (0-100).
// Use switch to assign a letter grade (A, B, C, D, F).

function checkStudentGrade(score) {
    let grade;
    switch (true) {
      case score > 100:
        grade = "score can't be over 100";
        break;
      case score > 90:
        grade = "A";
        break;
      case score > 80:
        grade = "B";
        break;
      case score > 70:
        grade = "C";
        break;
      case score > 60:
        grade = "D";
        break;
      case score <= 50:
        grade = "F";
        break;
      default:
        grade = "Invalid score";
        break;
    }
    return grade;
  }
  
  console.log(checkStudentGrade(100)); //A
  console.log(checkStudentGrade(50)); //F
  console.log(checkStudentGrade(120)); //score can't be over 100
  
  // Currency Converter
  // Take a currency code ("USD", "EUR", "INR", "JPY").
  // Use switch to print the conversion rate relative to a base currency (e.g., USD).
  
  function currencyConverter(sign) {
    const exchangeRates = {
      USD: 1, // Base currency
      EUR: 0.92, // 1 USD = 0.92 EUR
      INR: 82.75, // 1 USD = 82.75 INR
      JPY: 150.5, // 1 USD = 150.50 JPY
    };
  
    let ratio;
    switch (sign) {
      case "USD":
        ratio = exchangeRates.USD;
        break;
  
      case "EUR":
        ratio = exchangeRates.EUR;
        break;
  
      case "INR":
        ratio = exchangeRates.INR;
        break;
  
      case "JPY":
        ratio = exchangeRates.JPY;
        break;
      default:
        ratio = "invalid input";
        break;
    }
    return ratio;
  }
  
  console.log(currencyConverter("USD")); //1
  console.log(currencyConverter("INR")); //82.75
  console.log(currencyConverter("Afghani")); //invalid input
  
  // Menu-Based ATM System
  // Display a menu with options:
  // 1 → Check Balance
  // 2 → Withdraw Money
  // 3 → Deposit Money
  // 4 → Exit
  // Use switch to perform the correct action based on the user’s choice.
  
  console.log("ATM System");
  console.log("1 → Check Balance");
  console.log("2 → Withdraw Money");
  console.log("3 → Deposit Money");
  console.log("4 → Exit");
  
  function atmSystem(option) {
    let output;
    switch (option) {
      case 1:
        output = "Your balance is zero.";
        break;
      case 2:
        output = "You have withdraw money successfully.";
        break;
      case 3:
        output = "Deposit completed.";
        break;
      case 4:
        output = "Good bye.";
        break;
  
      default:
        output = "invalid input";
        break;
    }
    return output;
  }
  
  console.log(atmSystem(1)); //Your balance is zero.
  console.log(atmSystem(4)); //Good bye.
  
  // Determine Season by Month
  // Take an integer (1-12) as input.
  // Use switch to print the corresponding season:
  // 12, 1, 2 → Winter
  // 3, 4, 5 → Spring
  // 6, 7, 8 → Summer
  // 9, 10, 11 → Fall
  
  function seasonTeller(month) {
    let season;
    switch (true) {
      case month === 12 || month === 1 || month === 2:
        season = "Winter";
        break;
      case month === 3 || month === 4 || month === 5:
        season = "Spring";
        break;
      case month === 6 || month === 7 || month === 8:
        season = "Summer";
        break;
      case month === 9 || month === 10 || month === 11:
        season = "Fall";
        break;
      default:
        season = "invalid month number !";
        break;
    }
    return season;
  }
  
  console.log(seasonTeller(2));    //Winter
  console.log(seasonTeller(12));   //Winter
  console.log(seasonTeller(13));   //invalid month number !
  
  
  
  
  // Rock, Paper, Scissors Game
  // The user inputs "rock", "paper", or "scissors".
  // The computer randomly selects one.
  // Use switch to determine the winner.
  
  function rpsGame(user) {
      const condition = [
          "rock",
          "paper",
          "scissors"
      ]
      let result
      const random = condition[Math.floor(Math.random()*3)];
      switch (true) {
          case random === user:
              result = 'draw'    
              break;
          case random === 'rock' && user === 'scissors':
              result = 'you lost'
              break;
          case random === 'scissors' && user === 'paper':
              result = 'you lost'
              break;
          case random === 'paper' && user === 'rock':
              result = 'you lost'
              break;
          case random === 'scissors' && user === 'rock':
              result = 'you won'
              break;
          case random === 'paper' && user === 'scissors':
              result = 'you won'
              break;
          case random === 'rock' && user === 'paper':
              result = 'you won'
              break;
          default:
              result = "nothing"
              break;
      }
  
      return result
  }
  console.log(rpsGame("rock"));    //you lost
  console.log(rpsGame("paper"));  //draw
  console.log(rpsGame("scissors"));  //draw
  