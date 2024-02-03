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

// Let‘s Practice
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

// Array Methods

let resumeArr = [
  "objective",
  "email",
  "skills",
  "experience",
  "project",
  "gitHub",
  "liveDemo",
];
console.log(resumeArr);

// Push( ) : add to end
resumeArr.push(); // need to pass value/Argument to add at end of array
console.log(resumeArr);
resumeArr.push("hobby");
console.log(resumeArr);

// Pop( ) : delete from end & return
resumeArr.pop(); // can nbe used in without passing arguments
console.log(resumeArr);

// toString( ) : converts array to string
resumeArr.toString();
console.log(resumeArr);

// Concat( ) : joins multiple arrays & returns result
let portfolioLinkArr = ["Link", "demo", "screenShot"];
console.log(portfolioLinkArr);

let comArr = resumeArr.concat(portfolioLinkArr);
console.log(comArr); // need to store it new arrary to get a output

// Unshift( ) : add to start
resumeArr.unshift("Name");
console.log(resumeArr);

// shift( ) : delete from start & return
portfolioLinkArr.shift();
console.log(portfolioLinkArr);

// Slice( ) : returns a piece of the array in a new array to show output
// slice( startIdx, endIdx )

let shortArr = resumeArr.slice(1, 5);
console.log(shortArr);

// Splice( ) : change original array (add, remove, replace)
// splice( startIdx, delCount, newEl1... )

let removeARR = resumeArr.splice(3, 8);
console.log(removeARR);

// Let‘s Practice
// Qs. Create an array to store companies -> Microsoft,“Bloomberg”,“Google”, “Uber”,“IBM”,“Netflix”
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

// let companies = ["Microsoft", "Bloomberg", "Google", "uber", "IBM", "Netflix"];
// console.log(companies);

// let newArr = companies.shift();
// console.log(newArr); // a  Removed the first company from the array
// console.log(companies); //  new array of 5 index

// let new1Arr = companies.splice(2, 1, "ola");
// console.log(companies); // b Removed Uber & Added Ola in its place

// let new2Arr = companies.push("Amazon");
// console.log(companies); // c Added Amazon at the end
