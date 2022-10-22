//LOOK - Day 0 - HELLO, WORLD
//Objective
// In this challenge, we review some basic concepts that will get you started with this series. You will need to use the same (or similar) syntax to read input and write output in challenges throughout HackerRank. Check out the Tutorial tab for learning materials and an instructional video!

// Task
// To complete this challenge, you must save a line of input from stdin to a variable, print Hello, World. on a single line, and finally print the value of your variable on a second line.

// You've got this!

function processData(inputString) {
  // This line of code prints the first line of output
  console.log("Hello, World.");
  console.log(inputString);
  // Write the second line of output that prints the contents of 'inputString' here.
}

//LOOK - Day 1 - DATA TYPES
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
sumI = Number(readLine()); //Alternatively, the unary operator can be used here: sumI = +(readLine())
rounded = parseFloat(readLine()); //rounded = +(readLine())
string = readLine();
// Print the sum of both integer variables on a new line.
console.log(i + sumI);
// Print the sum of the double variables on a new line.
console.log((d + rounded).toFixed(1));
// Concatenate and print the String variables on a new line
// The 's' variable above should be printed first.
console.log(s + string);

//LOOK - Day 2 - OPERATORS
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
  const taxAmount = (tax_percent / 100) * meal_cost;
  // total cost is the sum of the new variables
  const totalCost = meal_cost + tipAmount + taxAmount;
  // round result to nearest integer

  console.log(Math.round(totalCost));
}

//LOOK - Day 3 - INTRO TO CONDITIONAL STATEMENTS
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

  if (N % 2 !== 0 || (N >= 6 && N <= 20)) {
    console.log("Weird");
  } else {
    console.log("Not Weird");
  }
}

// LONG SOLUTION
function main() {
  const N = parseInt(readLine().trim(), 10);

  if (N % 2 !== 0) {
    console.log("Weird");
  }
  if (N % 2 === 0) {
    if (N >= 2 && N <= 5) {
      console.log("Not Weird");
    } else if (N >= 6 && N <= 20) {
      console.log("Weird");
    } else {
      console.log("Not Weird");
    }
  }
}

//LOOK - Day 4 - CLASS VS INSTANCE
//Objective: In this challenge, we're going to learn about the difference between a class and an instance; because this is an Object Oriented concept, it's only enabled in certain languages.
//Task: Write a Person class with an instance variable, , and a constructor that takes an integer, , as a parameter. The constructor must assign  to  after confirming the argument passed as  is not negative; if a negative argument is passed as , the constructor should set  to  and print Age is not valid, setting age to 0.. In addition, you must write the following instance methods:

// yearPasses() should increase the  instance variable by .
// amIOld() should perform the following conditional actions:
// If , print You are young..
// If  and , print You are a teenager..
// Otherwise, print You are old..
// To help you learn by example and complete this challenge, much of the code is provided for you, but you'll be writing everything in the future. The code that creates each instance of your Person class is in the main method. Don't worry if you don't understand it all quite yet!

// Note: Do not remove or alter the stub code in the editor.

function Person(initialAge) {
  // Add some more code to run some checks on initialAge

  if (Math.sign(initialAge) === -1) {
    age = 0;
    console.log("Age is not valid, setting age to 0.");
  } else {
    age = initialAge;
  }

  this.amIOld = function () {
    // Do some computations in here and print out the correct statement to the console
    if (age < 13) {
      console.log("You are young.");
    } else if (age < 18) {
      console.log("You are a teenager.");
    } else {
      console.log("You are old.");
    }
  };
  this.yearPasses = function () {
    // Increment the age of the person in here
    age++;
  };
}

//LOOK - Day 5 - LOOPS
//Objective: In this challenge, we will use loops to do some math.
//Task: Given an integer, , print its first  multiples. Each multiple  (where ) should be printed on a new line in the form: n x i = result.

function main() {
  const n = parseInt(readLine().trim(), 10);
  for (let i = 1; i <= 10; i++) {
    let answer = n * i;
    console.log(`${n} x ${i} = ${answer}`);
  }
}

//LOOK - Day 6 - LET'S REVIEW
//Objective: Today we will expand our knowledge of strings, combining it with what we have already learned about loops.
//Task: Given a string, , of length  that is indexed from  to , print its even-indexed and odd-indexed characters as  space-separated strings on a single line (see the Sample below for more detail).

function processData(input) {
  //Enter your code here
  const stringInput = input.split("\n");

  let even = "";
  let odd = "";

  for (let i = 1; i < stringInput.length; i++) {
    for (let j = 0; j < stringInput[i].length; j++) {
      if (j % 2 == 0) {
        even += stringInput[i][j];
      } else {
        odd += stringInput[i][j];
      }
    }
    console.log(even + " " + odd);
    even = "";
    odd = "";
  }
}

//LOOK - Day 7 - ARRAYS
//Objective: Today, we will learn about the Array data structure.
//Task: Given an array, , of  integers, print 's elements in reverse order as a single line of space-separated numbers.

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  console.log(arr.reverse().join(" "));
}

//LOOK - Day 8 - DICTIONARY AND MAPS
//******NEED TO COME BACK AND REDO THIS ONE...******
// https://marcuscript.wordpress.com/2017/05/18/30-days-of-code-day-8-dictionaries-and-maps/
//Objective: Today, we're learning about Key-Value pair mappings using a Map or Dictionary data structure.
//Task: Given  names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. You will then be given an unknown number of names to query your phone book for. For each  queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; if an entry for  is not found, print Not found instead.
//Note: Your phone book should be a Dictionary/Map/HashMap data structure.

function processData(input) {
  input = input.split("\n");
  let n = parseInt(input[0]);
  let phoneBook = [];

  for (let i = 0; i < n; i++) {
    let newInput = input[i + 1];
    newInput = newInput.split(" ");
    phoneBook[newInput[0]] = newInput[1];
  }

  for (let i = n + 1; i < input.length; i++) {
    let num = phoneBook[input[i]];
    if (num !== undefined) {
      console.log(input[i] + "=" + num);
    } else {
      console.log("Not found");
    }
  }
}

//LOOK - Day 9 -
//Objective:
//Task:

//LOOK - Day 10 -
//Objective:
//Task:

//LOOK - Day 11 -
//Objective:
//Task:

//LOOK - Day 12 -
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

//LOOK - Day
//Objective:
//Task:
