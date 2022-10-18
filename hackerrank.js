//LOOK - Day 1
//Objective
// In this challenge, we review some basic concepts that will get you started with this series. You will need to use the same (or similar) syntax to read input and write output in challenges throughout HackerRank. Check out the Tutorial tab for learning materials and an instructional video!

// Task
// To complete this challenge, you must save a line of input from stdin to a variable, print Hello, World. on a single line, and finally print the value of your variable on a second line.

// You've got this!

function processData(inputString) {
    // This line of code prints the first line of output
    console.log("Hello, World.");
    console.log(inputString)
    // Write the second line of output that prints the contents of 'inputString' here.
    
}


//LOOK - Day 2
// Task
// Complete the code in the editor below. The variables , , and  are already declared and initialized for you. You must:

// Declare  variables: one of type int, one of type double, and one of type String.
// Read  lines of input from stdin (according to the sequence given in the Input Format section below) and initialize your  variables.
// Use the  operator to perform the following operations:
// Print the sum of  plus your int variable on a new line.
// Print the sum of  plus your double variable to a scale of one decimal place on a new line.
// Concatenate  with the string you read as input and print the result on a new line.


    // Declare second integer, double, and String variables.
let sumI;
let rounded;
let string;
    // Read and save an integer, double, and String to your variables.
sumI = Number(readLine()) //Alternatively, the unary operator can be used here: sumI = +(readLine())
rounded = parseFloat(readLine()) //rounded = +(readLine())
string = readLine() 
    // Print the sum of both integer variables on a new line.
console.log(i + sumI)
    // Print the sum of the double variables on a new line.
console.log((d + rounded).toFixed(1));
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
console.log(s + string)



//LOOK - Day 3
//Task
// Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost. Round the result to the nearest integer.

/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

function solve(meal_cost, tip_percent, tax_percent) {
    // initialize variables to store calculated valuse of tip, tax and total cost
    const tipAmount = (meal_cost / 100) * tip_percent;
    const taxAmount = (tax_percent / 100 ) * meal_cost;
    // total cost is the sum of the new variables
    const totalCost = meal_cost + tipAmount + taxAmount
    // round result to nearest integer
    
    console.log(Math.round(totalCost))

}



//LOOK - Day 3
//Objective: In this challenge, we learn about conditional statements.
//Task: Given an integer, , perform the following conditional actions:

// If  is odd, print Weird
// If  is even and in the inclusive range of  to , print Not Weird
// If  is even and in the inclusive range of  to , print Weird
// If  is even and greater than , print Not Weird
// Complete the stub code provided in your editor to print whether or not  is weird.

// SHORT SOLUTION
function main() {
    const N = parseInt(readLine().trim(), 10);

if ((N % 2 !== 0) || (N >= 6 && N <= 20)){
    console.log("Weird")
} else{
    console.log("Not Weird")
}
}

// LONG SOLUTION
function main() {
    const N = parseInt(readLine().trim(), 10);

if (N % 2 !== 0){
    console.log("Weird")
} if (N % 2 === 0){
    if (N >= 2 && N <= 5){
        console.log("Not Weird")
    } else if (N >= 6 && N <= 20){
        console.log("Weird")
    } else{
        console.log("Not Weird")
    }
}
}





//LOOK - Day 
//Objective: 
//Task: 




//LOOK - Day 
//Objective: 
//Task: 



//LOOK - Day 
//Objective: 
//Task: 



//LOOK - Day 
//Objective: 
//Task: 




//LOOK - Day 
//Objective: 
//Task: 



//LOOK - Day 
//Objective: 
//Task: 