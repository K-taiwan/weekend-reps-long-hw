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

// Make a variable that holds a person's age. Be semantic.

var age = 0;
age = (num) => {
    age = `You are ${num} years old`;
    console.log(age);
}
age(num);

// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

var age = 0;
car = (num) => {
    if (16 < num){
        console.log(`Here are the keys!`);
    } else {
        console.log(`Sorry, you're too young`);
    }
}
car(16);
car(17);
car(1);

// Remember: USE let when you initialize your for loops!

// This is GOOD: for(let i = 0; i < 100; i++)

// This is NO GOOD: for(i = 0; i < 100; i++)

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive.
for(let i = 0; i <= 10; i++){
    console.log(i);
}

// Write a loop that will print out all the numbers from 10 up to and including 400.
for(let i = 10; i <= 400; i++){
    console.log(i);
}

// Write a loop that will print out every third number starting with 11 and going no higher than 4000.
for(let i = 11; i <= 4000; i+=3){
    console.log(i);
}

// B. Get even
// Print out the numbers that are within the range of 1 - 100.
for(let i = 1; i <= 100; i++){
    console.log(i);
}

// Adjust your code to add a message next to even numbers only that says: "<-- is an even number".
for(let i = 0; i <= 100; i += 2){
    console.log(`${i} <-- is an even number`);
}

// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
// Example Output:

// I found a 5. High five!
// I found a 10. High five!
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
// Example Output:

// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!
// For numbers divisible by both three and five, be sure your code prints both messages.