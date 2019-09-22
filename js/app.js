// . Q + A
// How do we assign a value to a variable?
making a unique name and equal to that value

// How do we change the value of a variable?
variable = value;

// How do we assign an existing variable to a new variable?
variable = newValue;
// Remind me, what are declare, assign, and define?
declare is register a variable like (let uniqueName);
assign (let uniqueName = "Sam";)

// What is pseudocoding and why should you do it?
writing in your own words how the code should be executed step by step

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
majority of the time should be spent on solving how to write the code before starting to type it

// B. Strings
// Create a variable called firstVariable.
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number.
// Store the value of firstVariable in a new variable called secondVariable
// Change the value of secondVariable to any string.
var firstVariable;
firstVariable = "Hello World";
console.log(firstVariable);
firstVariable = 9;
console.log(firstVariable);
var secondVariable = firstVariable;
console.log(secondVariable);
secondVariable = secondVariable.toString();
console.log(typeof secondVariable);


// What is the value of firstVariable?
firstVariable = 9;
console.log(firstVariable);

right now it is equal to 9

// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.

var yourName = "Kenny";
console.log(typeof yourName);

yourName = "Hello, my name is " + "Kenny";
console.log(yourName);

// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console.

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' == 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false == false)
  console.log(e == 'Kevin');
  console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression)
  console.log(a == a != d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 !== '48');


//   D. The farm
// Declare a variable animal. Set it to be either "cow" or something else.
// Write code that will print out "mooooo" if the it is equal to cow.
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
var animal = "cow";
var cow = "cow";
const moo = (string) => {
    if(string === cow){
    console.log(`"mooooo"`);
} else {
    console.log(`"Hey! You're not a cow."`);
}
}
moo(cow)
moo('duck')