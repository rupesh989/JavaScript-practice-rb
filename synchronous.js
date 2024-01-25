console.log("one");

console.log("two");

console.log("three");

// This statements // instructions will print in a same order instantly as written

// synchronous statements

function helloPrint(){
    console.log("Hello ");
}

helloPrint(); // this will print instant output

setTimeout( helloPrint, 4000); // will wait for 4sec(4000 milisec) 
//here we are using helloPrint as arguments to callback property

//Asynchronous those instrucitons which can be done easily are printed firstly

console.log("one");

console.log("two");

console.log("three");

setTimeout (helloPrint,5000);

setTimeout(() => {
    console.log("Hello from setTimeout with arrow function");
    
}, 6000);

console.log("four");

console.log("five"); //this all console statements will print instantly  
                    //then setTimout function as per its condition of 5 to 6 sec delay
            
