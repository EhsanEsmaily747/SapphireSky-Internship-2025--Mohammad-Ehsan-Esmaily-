
// Write a program that intentionally throws an error and catches it using try...catch.

function checkAge(age) {
    if (typeof age === 'string' || age < 0) {
        throw new Error('Input is invalid')
    }
    console.log(`you are ${age} years old`);      
}

try {
    const userAge = -5; 
    checkAge(userAge);
} catch (error) {
    console.error("Error caught:", error.message);
} finally {
    console.log("Execution completed.");
}