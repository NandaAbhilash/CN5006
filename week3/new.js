// Function to add two numbers
function add(num1, num2) {
    return num1 + num2;
}

// Function to subtract two numbers
function subtract(num1, num2) {
    return num1 - num2;
}

// Function to multiply two numbers
function multiply(num1, num2) {
    return num1 * num2;
}

// Function to divide two numbers
function divide(num1, num2) {
    return num1 / num2;
}

// Function to perform operations based on a specified operation type
function operations(operation, num1, num2, num3, num4) {
    let result;
    
    if (operation === "add") {
        result = add(num1, num2);
        console.log("The sum of", num1, "and", num2, "is", result);
    } else if (operation === "subtract") {
        result = subtract(num1, subtract(num4, num3));
        console.log("When we subtract", num4, "and", num3, "from", num1, "we get:", result);
    } else if (operation === "multiply") {
        result = multiply(multiply(num3, num4), num2);
        console.log("When we multiply", num3, ",", num4, "and", num2, "we get:", result);
    } else if (operation === "divide") {
        result = divide(num4, num2);
        console.log("When we divide", num4, "by", num2, "we get:", result);
    } else {
        console.log("Invalid operation");
    }
}

// Declare variables
const num1 = 1099;
const num2 = 322;
const num3 = 56;
const num4 = 829;

// Perform operations
operations("add", num1, num2);
operations("subtract", num1, num2, num3, num4);
operations("multiply", num3, num2, num4);
operations("divide", num4, num2);

// Extra operation
let extraAnswer = num2 + (num4 / num1) + (num3 * (num4 - num3));
console.log("The final answer from the additional operation is:", extraAnswer);
