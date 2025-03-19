// Write a function to check if a given string has balanced parentheses.


function isBalanceParanthes(str) {
    const stack = []
    const opening_brackets = ['[','{','(']
    const closing_brackets = [']','}',')']
    const bracketlist = {"[":"]","{":"}","(":")"}
    for (const char of str) {
        if(opening_brackets.includes(char)) 
            stack.push(char)
        else if(closing_brackets.includes(char)){
        if(char !== bracketlist[stack.pop()]) 
            return false
    } 
    }
    return stack.length === 0
}


function testIsBalanceParanthes() {
    const testCases = [
        { input: "[[]{}]", expected: true },
        { input: "{[()]}", expected: true },
        { input: "{[}]()", expected: false },
        { input: "({[})]", expected: false },
        { input: "(()", expected: false },
        { input: "[({})]", expected: true },
        { input: "", expected: true },
        { input: "[[{{(())}}]]", expected: true },
        { input: "[({})]}", expected: false },
        { input: "(({{[[]]}}))", expected: true },
    ];

    let passed = 0;
    
    testCases.forEach(({ input, expected }, index) => {
        const result = isBalanceParanthes(input);
        const passedTest = result === expected;
        console.log(`Test ${index + 1}: "${input}" → ${result} (${passedTest ? "✅ Passed" : "❌ Failed"})`);
        if (passedTest) passed++;
    });
    console.log(`\n${passed} / ${testCases.length} tests passed.`);
}

// testIsBalanceParanthes();

