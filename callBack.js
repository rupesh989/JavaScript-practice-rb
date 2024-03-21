console.log("Callback");

function sum(a,b){
    console.log(a+b);
}

function calculate(a,b,sumcallback){
     sumcallback(a,b);    
}

calculate ( 5,6, sum);

sum (6,7);

calculate (3,4, (a,b)=>{
    console.log(a+b);
});
const welcome =()=>{
    console.log("welcome to callbacks");

}

setTimeout (welcome,7000);
 
// we used welcome arrow function from callback asynchronous 
//that is we;come is passed as argument here 


function mul(p, q){
    console.log(p*q);
}

mul(6,3);

function calculateThis (r,s){
    return (r**s) ;
}

calculateThis(2,3);

