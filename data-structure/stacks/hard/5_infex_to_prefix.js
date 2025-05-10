// Implement a function to convert an infix expression to postfix notation.

function infixToPostfix(equation){
    function precedence(op) {
        if (op === '+' || op === '-') return 1;
        if (op === '*' || op === '/') return 2;
        return 0;
    }

    function isOperator(c) {
        return ['+', '-', '*', '/'].includes(c);
    }
    
    const output = []
    const stack = []
    let number = ''

    for (let i = 0; i < equation.length; i++) {
        const char = equation[i]
        if(char === ' ') continue

        if (char.match(/\d/)) {
            number += char
        }else{
            if (number) {
                output.push(number)
                number = ''
            }

            if (char === '(') {
                stack.push(char)
            }else if(char === ')'){
                while (stack.length && stack[stack.length - 1] !== '(') {
                    output.push(stack.pop())
                }
                stack.pop()
            }else if(isOperator(char)){
                while (stack.length && precedence(char) <= precedence(stack.length - 1)) {
                    output.push(stack.pop())
                }
                stack.push(char)
            }
        }
    }
    if(number)output.push(number)
    if(stack.length) output.push(stack.pop())
    return output.join(' ')
}


console.log(infixToPostfix("12 + 34 * 56"));         // ✅ "12 34 56 * +"
console.log(infixToPostfix("10 + 2 * (3 + 5)"));     // ✅ "10 2 3 5 + * +"
console.log(infixToPostfix("(123 + 45) * 6"));       // ✅ "123 45 + 6 *"
console.log(infixToPostfix("123 + 45 * 67"));        // ✅ "123 45 67 * +"
console.log(infixToPostfix("3 + 5 * 2 - 8 / 4"));    // ✅ "3 5 2 * + 8 4 / -"