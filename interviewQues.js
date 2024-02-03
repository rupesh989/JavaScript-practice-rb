//Interview Question files

// 1 FizzBuzz divisible check

// for (i = 0; i < 16; i++) {
//   if (i % 3 === 0 && i % 5 !== 0) {
//     console.log(`Fizz number is ${i}`);
//   } else if (i % 5 == 0 && i % 3 !== 0) {
//     console.log(`Buzz number is ${i}`);
//   } else if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`FizzBuzz number is ${i}`);
//   }
// else {
//     console.log(` numeber is NOT in any condition`);
//   }
//}

// 2 Reverse a string without using inbuilt functions/ brute force

// const str = "rupesh";
// var newStr = "";
// for (i = str.length - 1; i >= 0; i--) {
//   newStr = newStr + str[i];
// }
// console.log(str);
// console.log(newStr);

//Fibonacci Numbers
//Ques3 program to generate fibonacci series up to n terms
// take input from the user

// const number = parseInt(prompt("Enter the number of terms: "));
// let n1 = 0,
//   n2 = 1,
//   nextTerm;

// console.log("Fibonacci Series:");

// for (let i = 1; i <= number; i++) {
//   console.log(n1);
//   nextTerm = n1 + n2;
//   n1 = n2;
//   n2 = nextTerm;
// }

// program to generate fibonacci series up to a certain number
// take input from the user

// Other method for this solution only

// const number = parseInt(prompt('Enter a positive number: '));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');
// console.log(n1); // print 0
// console.log(n2); // print 1

// nextTerm = n1 + n2;

// while (nextTerm <= number) {

//     // print the next term
//     console.log(nextTerm);

//     n1 = n2;
//     n2 = nextTerm;
//     nextTerm = n1 + n2;
// }

// Qs4. Get user to input a number using prompt(“Enter a number: ”)
// Check if the number is a multiple of 5 or not

// const promptNum = prompt("eneter num");

// if (promptNum % 5 === 0 && promptNum % 3 !== 0) {
//   console.log("BUZZ MULtiples of 5");
// } else if (promptNum % 3 === 0 && promptNum % 5 !== 0) {
//   console.log("FIZZ multiple of 3");
// } else if (promptNum % 5 === 0 && promptNum % 3 === 0) {
//   console.log("FIZZBUZZ");
// }
