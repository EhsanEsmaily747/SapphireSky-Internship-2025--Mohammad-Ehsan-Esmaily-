// Implement a function to reverse a string using a stack.

function reverseString(str) {
    const stack = []
    let reverse = ""
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i])
    }
    for (let j = 0; j < str.length; j++) {
        reverse += stack.pop()
    }
    return reverse
}


function testReverseString() {
    const testCases = [
        { input: "ehsan", expected: "nashe" },
        { input: "alphabet", expected: "tebahpla" },
        { input: "camera", expected: "aremac" },
        { input: "123", expected: '321' },
        { input: "", expected: "" },
    ];

    let passed = 0;
    
    testCases.forEach(({ input, expected }, index) => {
        const result = reverseString(input);
        const passedTest = result === expected;
        console.log(`Test ${index + 1}: "${input}" → ${result} (${passedTest ? "✅ Passed" : "❌ Failed"})`);
        if (passedTest) passed++;
    });
    console.log(`\n${passed} / ${testCases.length} tests passed.`);
}

testReverseString()


