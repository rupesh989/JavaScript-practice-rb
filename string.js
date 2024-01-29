// Strings in JS
// String is a sequence of characters used to represent text

// Create String
let str = "RupeshBavaskar";
console.log(str);

// String Length
console.log(str.length);

// String Indices
console.log(str[0], str[1], str[2]);

// Template Literals in JS
// A way to have embedded expressions in strings ` `

let expression = 4 + 6;
let temStr = `string text ${expression} string text`;
console.log(temStr); // this will print the string and the value of expression that is 10

// String Interpolation
//To create strings by doing substitution of placeholders `this is a template literal`

// String Methods in JS
// These are built-in functions to manipulate a string

// str.toUpperCase( )
console.log(str.toUpperCase());

// str.toLowerCase( )
console.log(str.toLocaleLowerCase());

// str.trim( ) // removes whitespaces from starting-ending only NOT in-between the string
let tStr = "    Javascript        developer     ";
console.log(tStr.trim()); //

// str1.concat( str2 ) // joins str2 with str1
let concatStr = str.concat(tStr);
console.log(concatStr);
console.log(concatStr.trim()); // not works in-between string

// str.replace( searchVal, newVal )
let rStr = "javascript";
console.log(rStr);
console.log(rStr.replace("v", "b"));

// str.charAt( idx ) // Returns a value at index/idx
console.log(rStr.charAt(2));

// str.slice(start, end?) // returns part of string// last value is not considered
console.log(rStr.slice(4, 9));

// Let‘s Practice
// Qs1.
// Prompt the user to enter their full name. Generate a username for them based on the input,
// username will be with @, followed by their full name and ending with the fullname length.
// eg: user name =“rupeshbavaskar”, username should be “@rupeshbavaskar14”

//str is above user name
const newStr = console.log("@" + str + str.length);

//Interview Ques example
//Reverse a string without using inbuilt functions/ brute force

const exampleStr = "reactdeveloper";
var reverseStr = "";
for (i = exampleStr.length - 1; i >= 0; i--) {
  reverseStr = reverseStr + exampleStr[i];
}
console.log(exampleStr);
console.log(reverseStr);

