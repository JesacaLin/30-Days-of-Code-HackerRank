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

//LOOK - Day 9 - RECURSION 3
//Objective: Today, we are learning about an algorithmic concept called recursion.
//Task: Complete the factorial function in the editor below. Be sure to use recursion.
// factorial has the following paramter:
// int n: an integer

function factorial(n) {
  // Write your code here
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

//LOOK - Day 10 - BINARY NUMBERS
//Objective: Today, we're working with binary numbers.
//Task: Given a base- integer, , convert it to binary (base-). Then find and print the base- integer denoting the maximum number of consecutive 's in 's binary representation. When working with different bases, it is common to show the base as a subscript.

function main() {
  const n = parseInt(readLine().trim(), 10);
  //figure out a way to find the binary representation of n
  const binaryN = n.toString(2).split("");
  //count how many consecutive there are.
  let counter = 0;
  let max = 0;
  for (let i = 0; i < binaryN.length; i++) {
    if (binaryN[i] == 1) {
      counter++;
      if (counter > max) {
        max = counter;
      }
    } else {
      counter = 0;
    }
  }
  console.log(max);
}

//someone's ultra smart solution

function main() {
  let n = parseInt(readLine().trim(), 10);

  let count = 0;
  while (n > 0) {
    n = n & (n << 1);
    count++;
  }
  console.log(count);
}

//LOOK - Day 11 - 2D ARRAYS
//Objective: Today, we are building on our knowledge of arrays by adding another dimension.
//Task: Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum.

function main() {
  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  //figuring out the minimum value: -9 is the given lowest constraints * 7, the numer in an hourglass.
  let max = -63;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let sum = 0;
      sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      max = max < sum ? sum : max;
    }
  }
  console.log(max);
}

//LOOK - Day 12 - INHERITANCE
//Objective: Today, we're delving into Inheritance.
//Task: You are given two classes, Person and Student, where Person is the base class and Student is the derived class. Completed code for Person and a declaration for Student are provided for you in the editor. Observe that Student inherits all the properties of Person.

class Student extends Person {
  /*
   *   Class Constructor
   *
   *   @param firstName - A string denoting the Person's first name.
   *   @param lastName - A string denoting the Person's last name.
   *   @param id - An integer denoting the Person's ID number.
   *   @param scores - An array of integers denoting the Person's test scores.
   */
  // Write your constructor here
  constructor(firstName, lastName, idNumber, scores) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = idNumber;
    this.scores = scores;
  }

  /*
   *   Method Name: calculate
   *   @return A character denoting the grade.
   */
  // Write your method here
  calculate() {
    let average = this.scores.reduce((a, b) => a + b, 0) / this.scores.length;
    if (average >= 90) {
      return "O";
    } else if (average >= 80) {
      return "E";
    } else if (average >= 70) {
      return "A";
    } else if (average >= 55) {
      return "P";
    } else if (average >= 40) {
      return "D";
    } else {
      return "T";
    }
  }
}

//LOOK - Day 13 - ABSTRACT CLASSES
//Objective: Today, we will extend what we learned yesterday about Inheritance to Abstract Classes.
//Task: Given a Book class and a Solution class, write a MyBook class that does the following:

// Inherits from Book
// Has a parameterized constructor taking these  parameters:
// string
// string
// int
// Implements the Book class' abstract display() method so it prints these  lines:
// , a space, and then the current instance's .
// , a space, and then the current instance's .
// , a space, and then the current instance's .

// Declare your class here.
/**
 *   Class Constructor
 *
 *   @param title The book's title.
 *   @param author The book's author.
 *   @param price The book's price.
 **/
// Write your constructor here
class MyBook extends Book {
  constructor(title, author, price) {
    super(title, author);
    this.price = price;
  }
  /**
   *   Method Name: display
   *
   *   Print the title, author, and price in the specified format.
   **/
  // Write your method here

  display() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Price: ${this.price}`);
  }
}

// End class

//LOOK - Day 14: SCOPE
//Objective: Today we're discussing scope. 
//Task: The absolute difference between two integers,  and , is written as . The maximum absolute difference between two integers in a set of positive integers, , is the largest absolute difference between any two integers in .

// The Difference class is started for you in the editor. It has a private integer array () for storing  non-negative integers, and a public integer () for storing the maximum absolute difference.

// Task
// Complete the Difference class by writing the following:

// A class constructor that takes an array of integers as a parameter and saves it to the  instance variable.
// A computeDifference method that finds the maximum absolute difference between any  numbers in  and stores it in the  instance variable.

//IN C#
public Difference(int[] a )
    {
        elements = a;
    }
    
    public void computeDifference(){
        int max = elements.Max();
        int min = elements.Min();
        maximumDifference = max - min;
}



//LOOK - Day 15: LINKED LIST
//Objective: Today we will work with a Linked List. 
//Task: Complete the insert function in your editor so that it creates a new Node (pass data as the Node constructor argument) and inserts it at the tail of the linked list referenced by the head parameter. Once the new node is added, return the reference to the head node.

//Note: The head argument is null for an empty list.

this.insert=function(head,data){
  //complete this method
  // see if the head is null to begin with. If yes, make a new null that becomes            the head
  let current = head;
  if (head == null){
      return head = new Node(data)
  } else{
      while (current.next != null){
          current = current.next;
      }
      current.next = new Node(data);
      return head;
  }
};


//LOOK - Day 16: EXCEPTIONS - STRING TO INTEGER
//Objective: Today, we're getting started with Exceptions by learning how to parse an integer from a string and print a custom error message.
//Task: Read a string, S, and print its integer value; if S cannot be converted to an integer, print Bad String.
//Note: You must use the String-to-Integer and exception handling constructs built into your submission language. If you attempt to use loops/conditional statements, you will get a 0 score.

//This was really hard and I could not pass all the tests without help.

function main() {
  const S = readLine();
  
  try {
      console.log(parseInt(S).toString().replace('NaN', "Bad String"))
  } catch(err){
      console.log("Bad String")
  }
}


//LOOK - Day 17: MORE EXCEPTIONS
//Objective: Yesterday's challenge taught you to manage exceptional situations by using try and catch blocks. In today's challenge, you will practice throwing and propagating an exception. 
//Task: Write a Calculator class with a single method: int power(int,int). The power method takes two integers, n and p, as parameters and returns the integer result of n to power of p. If either n or p is negative, then the method must throw an exception with the message: n and p should be non-negative.


class Calculator{
  power(n, p){
      if (Math.sign(n) === -1 || Math.sign(p) === -1){
          throw "n and p should be non-negative"
      } else{
          return Math.pow(n, p)
      }
  } 
}




//LOOK - Day 18
//Objective:
//Task: 



//LOOK - Day 19: INTERFACES
//Objective: Today, we're learning about Interfaces.
//Task: The AdvancedArithmetic interface and the method declaration for the abstract divisorSum(n) method are provided for you in the editor below. Complete the implementation of Calculator class, which implements the AdvancedArithmetic interface. The implementation for the divisorSum(n) method must return the sum of all divisors of n.

//not able to complete with JS so I will skip.

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
