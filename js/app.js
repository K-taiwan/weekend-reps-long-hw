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
for(let i = 0; i <= 100; i++){
    
    if(i % 5 === 0){
        console.log(`${i} I found a 5. High five!`);
    // } else if(i % 10 === 0){
    //     console.log(`${i}I found a 10. High five!`);
    } else {
        console.log(i);
    }
    
}


// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
// Example Output:

// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!
// For numbers divisible by both three and five, be sure your code prints both messages.
for(let i = 0; i <= 100; i++){
    
    if(i % 3 === 0){
        console.log(`${i} I found a ${i}. Three is a crowd`);
    } else if(i % 5 === 0){
        console.log(`${i} I found a ${i}. High five!`);
    } else {
        console.log(i);
    }
    
}

// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
let bank_account = 0;
for(let i = 1; i <= 10; i++){
    bank_account += i;
    console.log(`You have $${bank_account} in your bank account!`);  
}

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.
let double = 0;
for(let i = 1; i <= 100; i++){
    double += (i * 2);
    console.log(`You have $${double} in your bank account!`);  
}

// E. Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

const natural = (sum) => {
    let total = 0;
    for(let i = 0; i < sum; i++){
        if(i % 3 === 0|| i % 5 === 0){
            total += i;
            console.log(`The sum of these muliples is ${total}`);
        }
    }
}
natural(10);

// Find the sum of all the multiples of 3 or 5 below 1000. If a previous question you've done has helpful bits of code in it that partially solves this problem, look back at them.

const natural = (sum) => {
    let total = 0;
    for(let i = 0; i < sum; i++){
        if(i % 3 === 0|| i % 5 === 0){
            total += i;
            console.log(`The sum of these muliples is ${total}`);
        }
    }
}
natural(1000);


// You just solved Project Euler problem 1!

// Are you having dejà vu? This just in! From the "Read the entire problem before you start" dept: This problem was on a previous assignment. You may skip it if you've already done it, just include a comment saying that you've already done it. If you've now done the problem twice, perhaps next time you'll read the whole problem before starting it.


// A. Talk about it:
// What are the things in an array called?
index

// Do Arrays guarantee those things will be in order?
no, you must sort. only order is how the index arrived

// What real-life thing could you model with an array?
categories or objects

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes.
const quotes = ['hello to me', 'say hi', 'what time is it'];

// C. Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?
const randomThings = [1, 10, "Hello", true];
console.log(randomThings[0]);

// Change the value of "Hello" to "World".
randomThings[2] = "World";
console.log(randomThings);

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);

// D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// What would you write to access the 3rd element of the array?
console.log(ourClass[2]);

// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";
console.log(ourClass);

// Add a new element, "Cloud City" to the array.
ourClass.push("Cloud City");
console.log(ourClass);

// E. Mix It Up
// Note: You don't really need .splice() for these. You could use it, but there are simpler array methods that are more appropriate.
// Given the following array: const myArray = [5, 10, 500, 20]
// Add the string "Egon" to the end of the array. Add another string of your choice to the end of the array.
const myArray = [5, 10, 500, 20];
myArray.push("Egon");
myArray.push("Sam");

// Remove the 5 from the beginning of the array.
myArray.shift(0);
console.log(myArray);

// Add the string "Bob Marley" to the beginning of the array.

myArray.unshift("Bob Marley");
console.log(myArray);

// Remove the string of your choice from the end of the array.
myArray.pop();
console.log(myArray);

// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?
myArray.reverse();
console.log(myArray);

yes it reversed the Array, mutate means to change from original.


// F. Biggie Smalls
// Create a variable that contains an integer.
// Write an if ... else statement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big number if the number is greater than or equal to 100.
const testNum = (digit) => {
    if(digit < 100){
        console.log("little number");
    }  else {
        console.log("big number");
    }
}
testNum(99);
// testNum(101);

// G. Monkey in the Middle
// Write an if ... else if ... else statement:
// console.log() little number if the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".
const monkey = (num) => {
    if(num < 5){
        console.log("little number");
    } else if(num > 10) {
        console.log("big number");
    } else{
        console.log("monkey");
    }
}
monkey(1);
monkey(5);
monkey(9);
monkey(99);



// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log(`"Kristyn is rocking that ${kristynsCloset[2]} today!"`);

// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
// In the same way, access one item from Thom's pants array.
// Access one item from Thom's accessories array.
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);

const outfitCreator = (array) => {
    let options = [];
    for(i=0; i<array.length; i++) {
        if(Array.isArray(array[i]) === true) {
            options.push(array[i][Math.floor(Math.random()* (array[i].length - 1))]);
          
        } 
    }
        return `"Thom is looking fierce in a ${options[0]}, ${options[1]} and ${options[2]}!"`;
}

for (let i = 0; i < 3; i++){
    console.log(outfitCreator(thomsCloset));
}

// A. printGreeting
// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?
const printGreeting = (say) => {
    console.log(say);
}
printGreeting("hello there");
printGreeting("Slimer");
// Like so?

// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!

// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.

// B. printCool
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";

const printCool = (string) => {
    console.log(`${string} is cool`);
    
}
printCool("Captain Reynolds");

// C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.

// console.log(calculateCube(5));
// => 125

const calculateCube = (volume) => {
    let cube = Math.pow(volume, 3);
    console.log(cube);
}
calculateCube(5);

// D. isVowel
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

// console.log(isVowel("a"));
// => true

 // for(let i = 0; i < string; i++){
    //     if(array == "a" || array == 'e' || array[i] == 'i' || array[i] == "o" || array[i] == 'u' || array[i] == "A" || array[i] == "E" || array[i] == "I" || array[i] == 'O' || array[i] == 'U'){
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

const isVowel = (s) => {
    if(s == "a" || s == "A" || s == "e" || s == "E" || s == "i" || s == "I" || s == "o" || s == "O" || s == "u" || s == "U"){
        console.log(true);
    } else{
        console.log(false);
    }
}
isVowel("E");
isVowel("b");
isVowel("c");
isVowel("U");

// E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]

const getTwoLengths = (str1, str2) => {
    let one = str1.length;
    let two = str2.length;
    let array = `[${one}, ${two}]`;
    console.log(array);
}

getTwoLengths("Hank", "Hippopopalous");

getTwoLengths("lost now", "hello there peoples");

// F. getMultipleLengths
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]

const getMultipleLengths = (single) => {
    let array  = [single[0].length,single[1].length,single[2].length,single[3].length,single[4].length]
    
    console.log(array);
}
getMultipleLengths(["hello", "what", "is", "up", "dude"]);

// const getMultipleLengths = (single) => {
//     // let array  = [single[0].length,single[1].length,single[2].length,single[3].length,single[4].length]
//     let array = [];
//     for(let i = 0; i < single.length; i++){
//         array += i;
//     }
//     console.log(array);
// }
// getMultipleLengths(["hello", "what", "is", "up", "dude"]);


// G. maxOfThree
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

// console.log(maxOfThree(6, 9, 1));
// => 9

const maxOfThree = (x,y,z) => {
    if(x > y && x > z){
        console.log(x);
    } else if (y > x && y > z){
        console.log(y);
    } else {
        console.log(z);
    }
}
maxOfThree(6, 9, 1);
maxOfThree(9, 9, 9);

// H. printLongestWord
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"

const printLongestWord = (string) => {
    let word = "";
    for(let i = 0; i < string.length; i++){
        if(word.length < string[i].length){   //make sure to remember, double For and If to get string[i].length
            word = string[i];
        }
    }
    console.log(word);
    
}
printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]);

// I. transmogrify
// Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

// console.log(transmogrify(5, 3, 2));
// => 225

const transmogrify = (x,y,z) => {
    let transmorgified = Math.pow((x * y),2);
    console.log(transmorgified);
}
transmogrify(5, 3, 2);
transmogrify(5, 5, 5);

// J. reverseWordOrder v2
// Without using .split(), .reverse(), or .join(), write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.
// See if you can do it without googling.
// Remember: You can index directly into a string:
// "hello world"[7]
// => "o"
// That and basic loops and variables and arrays are all you need to solve this without the Array methods.
// console.log(reverseWordOrder("Ishmael me Call"));
// => "Call me Ishmael"

// console.log(reverseWordOrder("I use Lâncome on my comb"));
// => "comb my on Lâncome use I"

const reverseWordOrder = (string) => {
    let phrase = "";
    for(let i = string.length-1; i>=0; i--){
        phrase = phrase+ string[i];
    }
    console.log(phrase);

}
reverseWordOrder("Ishmael me Call");
reverseWordOrder("I use Lâncome on my comb");

// K. Get down and dirty with Math.random()
// Write a function that will return a random integer between 1 and 10. Test it.
const randomFunc = (x) => {
    console.log(Math.floor(Math.random() * (x + 1)));
}
randomFunc(10);
// Write a function that will return a random integer between 10 and 100. Test it.
const randomFunc = (x,y) => {
    console.log(Math.floor(Math.random() * (x - y + 1)));
}
randomFunc(100,10);
// Write a function that will return a random number between 532 and 13267. Test it.
const randomFunc = (x,y) => {
    console.log(Math.floor(Math.random() * (x - y + 1)));
}
randomFunc(13267,532);
// Write a function that will return a random number between 1 and 10. Test it.
const randomFunc = (x) => {
    console.log(Math.floor(Math.random() * (x + 1)));
}
randomFunc(10);
// Add a few more quotes to the quotes array from question III-B-1 above. Write a function that will take an array as a parameter, and return a random element from that array. Call your function a few times, passing in the quotes array. Give it a nice semantic name like getRandomElement.
const quotes = ['hello to me', 'say hi', 'what time is it'];

const getRandomElement = (x) => {
    var randomItem = quotes[Math.floor(Math.random()*quotes.length)];
    console.log(randomItem);
}
getRandomElement(quotes);

// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.

// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.

var person = {
    name: "Sam",
    email: "sam@yahoo.com",
    age: 50,
    purchased: []
  };
  
//   B. Update the user
// Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
// Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++

person.email = "sam@gmail.com";
console.log(person);
person.age++;


// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
person.location = "London, England";
console.log(person);

// Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).

// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
// Console.log just the "Merino jodhpurs" from the purchased array.
person.purchased.push("carbohydrates");
person.purchased.push("peace of mind");
person.purchased.push("Merino jodhpurs");
console.log(person);
person["purchased"].push("carbohydrates");
person["purchased"].push("peace of mind");
person["purchased"].push("Merino jodhpurs");
console.log(person);

// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// If we want to give our user a friend with a name and age, we could write:

// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// When we console.log user, we would see the friend object added to our user object.

// Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
// Console.log just the friend's name
// Console.log just the friend's location
// CHANGE the friend's age to 55
// The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.
// The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
// Console.log just "A latte" from the friend's purchased array.
var person = {
    name: "Sam",
    email: "sam@yahoo.com",
    age: 50,
    purchased: []
};
person.purchased.push("carbohydrates");
person.purchased.push("peace of mind");
person.purchased.push("Merino jodhpurs");
person.friend={
    name: "Grace Hopper",
    age: 20,
    location: "Paris",
    purchased: []
};
console.log(person.friend.name);
console.log(person.friend.location);
person.friend.age = 55;
console.log(person.friend.age);
person.friend.purchased.push("The One Ring");
console.log(person.friend.purchased);
person.friend.purchased.push("A Latte");
console.log(person.friend.purchased[1]);

// F. Loops
// Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
for(let i = 0; i < person.purchased.length; i++){
    console.log(person.purchased[i]);
}
// Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
for(let i = 0; i < person.friend.purchased.length; i++){
    console.log(person.friend.purchased[i]);
}


// G. Functions can operate on objects
// Write a single function updateUser that takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a return statement, it will merely modify the user object.
function updateUser(){
    person.age++;
    person.name = person.name.toUpperCase();
};
console.log(person.age);
console.log(person.name);
updateUser();
console.log(person.age);
console.log(person.name.toUpperCase());

// Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.
function oldAndLoud(person){
    person.age++;
    person.name = person.name.toUpperCase();
};
console.log(oldAndLoud.person.age);
console.log(oldAndLoud.person.name);
updateUser();
console.log(oldAndLoud.person.age);
console.log(oldAndLoud.person.name.toUpperCase());