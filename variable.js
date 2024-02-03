// Variables
// we us variables to store data temporary in computers memory just like in math equations
// syntax: variable name = value;
// there are 3 types of variables : Var, Let, Const

var age = 34; //created 3 variables latest value will be shown in output
var age = 31;
var age = 56;
console.log(age); //variable can be redecleared and updated/ Assign in global scope of code

let skill = 10;
//let skill =9; //connot redeclear the skill variable
skill = 8; // but Can upade/Assign to new value
console.log(skill); // this will print a skill latest value that is 8 in whole block of code

const education = 12;
//const education =10; //cannot redeclear the const variable
//education=5; // cannot update/ Reassign the const
console.log(education); // only one value remain in whole block of code
// prefer it to use in a Capital letters Caplocks

// Variale Define
// Cannot be a reserved keywords (var,let, cons,function,...)
// they should be a meaning, full label, variable names Don't use a,b,c, x,y,z, p,q,r
// Cannot start with a Number (24rupesh)
// Cannot contain a space(full Name ) or hypen (-)
// Under score can be used in variable name like rupesh_Bavaskar
// Use camelCase Notation for longname like firstName, lastName, userName
// variables are case sensitive "a" and "A" will be different values

// Examples
// let skill = "html";

// console.log(skill);
// var empol = "react";
// var empol = "angular";
// var empol = "Javascript";

// console.log(empol);

// const A=34;
// const A= 56;

// Let‘s Practice

// Qs1. Create a const object called “developer” to store information shown in the resume.

const developer = {
  firstName: "Rupesh",
  lastName: "Bavaskar",
  graduation: "CSE",
  experience: 25,
  position: "React Developer",
};
console.log(`This is information of this selected profile`, developer);

// Qs2. Create a const object called “profile” to store 5 information
//      shown in your linkedin profile

const profile = {
  firstName: "Rupesh",
  lastName: "Bavaskar",
  college: "SATI",
  experience: 2,
  position: "Graduate Trainee Engineer",
  jobLocation: "Pune",
};

console.log(profile);
