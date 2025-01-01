/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if either x or y is not numeric.
    - print the swapped values in the console if both x and y are numeric.
    
    Task 2
    - invoke the function "swap" using the following scenarios:
    - "Apple", 10
    - 9, 17
*/

function swap(x, y){
    // Task 1: 
    // 1.1 - Check if both x and y are numeric, and if not numeric, return -1
    if(typeof x !== 'number' || typeof y !== 'number') {
        return -1; 
    }
    console.log(`Values before swapping: x = ${x}, y = ${y}`);

    // 1.2 - Swap the values of x and y using arithmetic operations
    x = x + y; // x holds the sum
    y = x - y; // y is now the original value of x
    x = x - y; // x is now the original value of y

    console.log(`Values after swapping: x = ${x}, y = ${y}`)
    return [x, y]; 
}

// Task 2: // Invoke 'swap' function and test with given scenarios:
let result1 = swap("apple", 10);
console.log("Result 1:", result1); // should return -1 because 'Apple' is a string, not a number
let result2 = swap(9, 17);
console.log("Result 2:", result2); // should swap the values and print them
