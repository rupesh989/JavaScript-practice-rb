
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
