// Functions in JS
// Function Definition: Block of code that performs a specific task, can be invoked whenever needed

// function functionName( ) {
// //do some work
// }
function Myfunction() {
  console.log("Practice Functions");
}
Myfunction();

//Function with parameters

// function functionName( param1, param2 ...) {
// //do some work
// Function Call()

// function applyResume(firstName) {
//   console.log(firstName);
//     console.log(firstName, "Apply your resume for a job");
// }

// applyResume(); // undefined 'Apply your resume for a job'
// applyResume(firstName);
// applyResume("rupesh"); // rupesh 'Apply your resume for a job'

// function addition(x, y) {
//   console.log(x + y);
// }

// addition(); // NaN Not a Number
// addition(5, 7);
// Return Reserverd Keyword

function sum(a, b) {
  s = a + b;
  return s;
}
sum(5, 9);

// let result = sum(6, 8); //to get output we declare a result variable
// console.log(result);

// Arrow Functions
// Compact way of writing a function

// const functionName = ( param1, param2 ...) => {
// //do some work
// }functionName( );

const mul = (p, q) => {
  return p * q;
};
// mul(4,6); // We need to pass this in consolelog to get mul result
console.log(mul(4, 6));

function subFunc(s, d) {
  return console.log(s - d); // to return take consolelog
}
subFunc(89, 40);

const sub = (j, l) => {
  return j - l;
};
console.log(sub(45, 34));

// Let‘s Practice
// Qs. Create a function using the “function” keyword that takes a String as an argument &
// returns the number of vowels in the string.

function wordstr(str) {
  let count = 0;
  for (let val of str) {
    if (
      val === "a" ||
      val === "e" ||
      val === "i" ||
      val === "o" ||
      val === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}
wordstr("rupesh"); //2 vowels
wordstr("bavaskar"); //3 vowels

// Qs. Create an arrow function to perform the same task.

const arrowWordStr = (str) => {
  let count = 0;
  for (let val of str) {
    if (
      val === "a" ||
      val === "e" ||
      val === "i" ||
      val === "o" ||
      val === "u"
    ) {
      count++;
    }
  }
  console.log(count);
};
arrowWordStr("reactdeveloper"); // 6 vowels

// forEach Loop in Arrays
// arr.forEach( callBackFunction )

// CallbackFunction : Here, it is a function to execute for each element in the array
// *A callback is a function passed as an argument to another function.*

// arr.forEach( ( val ) => {
// console.log(val);
// } )

// Let‘s Practice
// Qs. For a given array of numbers, print the square of each value using the forEach loop.
let arr = [3, 4, 5, 6];
console.log(arr);

// let i = 0;
arr.forEach((val) => {
  val = val ** 2;
  console.log("Square is " + val);
});

// Other Array methods
// 1.Map
// Creates a new array with the results of some operation. The value its callback returns are used to form new array
// arr.map( callbackFnx( value, index, array ) )

let newArr = arr.map((val) => {
  return val * 2;
});
console.log(newArr);

// 2.Filter
// Creates a new array of elements that give true for a condition/filter.
// Eg: all even elements

let newFiArr = arr.filter((val) => {
  return val % 2 === 0;
});
console.log(arr);
console.log(newFiArr);

// 3.Reduce
// Performs some operations & reduces the array to a single value. It returns that single value.

const arr1 = [2, 3, 5, 6, 7];

const output = arr1.reduce((res, curr) => {
  return res + curr;
});
console.log(arr1);
console.log(output);

// Let‘s Practice
// Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.

let marks = [97, 96, 76, 32, 56, 95];

topmarks = marks.filter((val) => {
  return val > 90;
});
console.log(marks);
console.log(topmarks);

// Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.

const n = parseInt(prompt("Enter Number user here:"));

let arr2 = [];

for (let i = 1; i <= n; i++) {
  arr2[i - 1] = i;
}
console.log(n);
console.log(arr2);

let sumByReduce = arr2.reduce((res, curr) => {
  return res + curr;
});
console.log(arr2);
console.log(sumByReduce);
