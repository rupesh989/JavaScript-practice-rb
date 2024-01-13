console.log("one");

console.log("two");

console.log("three");

// This statements/ instructions will print in a same order as written// synchronous 

function helloPrint(){
    console.log("Hello ");
}

helloPrint(); // this will print instant output

setTimeout( helloPrint, 4000); // will wait for 4sec(4000 milisec) 


//Asynchronous those instrucitons which can be done easily are printed firstly

console.log("one");

console.log("two");

console.log("three");

setTimeout (helloPrint,5000);

setTimeout(() => {
    console.log("Hello from setTimeout with arrow function");
    
}, 6000);

console.log("four");

console.log("five"); //this all console statements will print instant then setTimout unction as per its condition
