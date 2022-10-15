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

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "

    //***MY INPUTS BELOW*** */
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
}