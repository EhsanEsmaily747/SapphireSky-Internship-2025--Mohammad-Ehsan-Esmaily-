// Write a function to check if a given arithmetic expression is valid.

function isValidOperation(expression) {
  const stack = [];
  const digitRedix = /\d/;
  const operationRedix = /[\+\-\*/]/;
  let last_char_was_operator = false;
  let hasNumber = false

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    if (char === ' ') continue

    if (char === "(") {
        stack.push(char);
        last_char_was_operator = true
      } else if (char === ")") {
        if (stack.length === 0) return false;
        stack.pop();
        last_char_was_operator = false
      }else if(digitRedix.test(char)){
        hasNumber = true
        last_char_was_operator = false
      }else if(operationRedix.test(char)){
        if(last_char_was_operator || i === 0) return false
        last_char_was_operator = true 
      }else{
        return false
      }
  }
  return hasNumber && !last_char_was_operator && stack.length === 0
}

console.log(isValidOperation("3 + 54 * (2 - 8)")); // ✅ True
console.log(isValidOperation("(3 + 5")); // ❌ False (Unmatched parenthesis)
console.log(isValidOperation("3 + + 5")); // ❌ False (Double operator)
console.log(isValidOperation(")3 + 5(")); // ❌ False (Misplaced parenthesis)
console.log(isValidOperation("3.5.6 + 2")); // ❌ False (Invalid number format)
console.log(isValidOperation("(4)"));  // ✅ true
