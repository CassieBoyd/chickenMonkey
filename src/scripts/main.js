// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.

// You can start with this simpler version that outputs even numbers to the console and ignores odd numbers. You need to refactor this code to meet the requirements above.



for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Check for numbers that are evenly divisible by both numbers first and log ChickenMonkey to the console
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("ChickenMonkey")
        // Check for numbers that are divisible by 5 and log Chicken to the console
    } else if (currentNumber % 5 === 0) {
        console.log("Chicken")
        // Check for numbers that are divisible by 7 and log Monkey to the console
    } else if (currentNumber % 7 === 0) {
        console.log("Monkey")
        // Numbers that are not divisible by 5 or 7 are logged to the console
    } else {
        console.log(currentNumber)
    }
}



