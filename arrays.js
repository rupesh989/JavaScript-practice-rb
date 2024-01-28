// Arrays
// Collections of items

// Create Array
let skills = [
  "html",
  "css",
  "javascript",
  "nodejs",
  "mongodb",
  "expressjs",
  "react",
];
// console.log(skills);

let marks = [96, 75, 48, 83, 66];
// console.log(marks);

//Array with  differents datatypes

let info = ["Rupesh", 24, "pune", "ReactDeveloper"];
// console.log(info);

// Array Indices
// arr[0], arr[1], arr[2] ....

// Looping over an Array
// Print all elements of an array

// Qs.1 Find the average marks of the entire class.
// For a given array with marks of students -> [85, 97, 44, 37, 76, 60]

let studentMarks = [85, 97, 44, 37, 79, 60];

let sum = 0;
for (let val of studentMarks) {
  sum = sum + val;
}
// console.log(sum); //  to check sum of students

const averageMarks = sum / studentMarks.length; //using average formula
// console.log(averageMarks);

// Qs.2 All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
//      For a given array with prices of 5 items -> [250, 645, 300, 900, 50]

let arr = [250, 645, 300, 900, 50];
let i = 0;
for (let val of arr) {
  let offerVal = val / 10;
  arr[i] = arr[i] - offerVal;
  //console.log(`value of offer = ${arr[i]}`); // Prints price after substracting offer
  //console.log(arr);
  //   i++;
}
// console.log(arr);
