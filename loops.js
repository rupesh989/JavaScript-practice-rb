
// //Loops in JS
// Loops are used to execute a piece of code again & again
//for Loop

for (let i = 1; i <= 5; i++) {
  console.log("React developer");
}

// Infinite Loop : A Loop that never ends
// Do not use it in a chrome its closes the chrome

// while Loop
// while (condition) {
// ...do some work}

// const age = prompt("enter your age Here ");
// while (age > 18) {
//   console.log("Vote");
// } its a example of Infinte Loop as age is greater then 18 for user

// do-while Loop
// while (condition);
// do {
// // do some Work
// }

// for-of Loop
// for (let val of strVar) {
// //do some work} Gives the values of each str

const strvar = "Rupesh";
for (let val of strvar) {
  console.log(val); //its print each word in new line
}

// for-in Loop
// for (let key in objVar) {
// //do some work} Gives key/Index value like 0 1 2 3

const strb = "Bavaskar";
for (let val in strvar) {
  console.log(val); //its print each words index value in new line like 0 1 2 3
}

// Let‘s Practice
// Qs1. Print all even numbers from 0 to 100.

for (i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log("EVEN Numbers", i);
  }
}
// Qs2. Create a game where you start with any random game number. Ask the user to keep
// guessing the game number until the user enters correct value.

// const enterNum = parseInt(prompt("Enter Your number here:"));
// // Use parseInt for Parsing string to Integer (Because its a string input from promt func)

// if (enterNum === 24) {
//   console.log("Correct");
// } else {
//   console.log("INcorrect");
// }

//Other way of solving with while loop and continue prompt till correct answer
let gameNum = 45;
let userNum = prompt("Enter NUM");

while (userNum != gameNum) {
  userNum = prompt("Wrong Number Entered");
}
console.log("congratulation, Right Number ");
