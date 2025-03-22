import { Stack } from "../easy/stack_with_array.mjs";
// Write a function to evaluate a postfix expression using a stack.

function evaluatePostfix(exp) {
  const stack = new Stack();
  const expression = exp.split(' ')
  const operators = ["*", "-", "+", "/"];
  for (let i = 0; i < expression.length; i++) {
    if (operators.includes(expression[i])) {
      const secondOperand = stack.pop()
      const firstOperand = stack.pop()
      if (firstOperand) {
          let result;
          switch (expression[i]) {
            case "+":
              result = firstOperand + secondOperand;
              break;
            case "*":
              result = firstOperand * secondOperand;
              break;
            case "-":
              result = firstOperand - secondOperand;
              break;
            case "/":
              result = secondOperand !== 0 ? firstOperand / secondOperand : "invalid operation"
              break;
          }
          stack.push(result);
      }else{
        stack.push(secondOperand)
      }
    } else {
      stack.push(Number(expression[i]));
    }
  }
  return stack.pop();
}


function testEvaluatePostfix() {
    const tests = [
      { input: "3 4 + 2 * 7 /", expected: 2 },
      { input: "3 4 + 2 * 0 /", expected: "invalid operation" },
      { input: "5 1 2 + 4 * + 3 -", expected: 14 },
      { input: "2 3 4 * +", expected: 14 },
      { input: "3 4 5 * +", expected: 23 },
      { input: "10 2 8 * + 3 + *", expected: 29 },
    ];
  
    tests.forEach((test, index) => {
      const result = evaluatePostfix(test.input);
      if (result === test.expected) {
        console.log(`Test ${index + 1}: Passed ✅`);
      } else {
        console.log(`Test ${index + 1}: Failed ❌ (Expected ${test.expected}, Got ${result})`);
      }
    });
  }
  
  // Run the tests
//   testEvaluatePostfix();
