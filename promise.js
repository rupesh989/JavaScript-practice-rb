// console.log("Promise Practice !!");

// // let promise = new Promise ((resolve, reject) =>{
// //     console.log("i am learning promises");  
// //     // resolve(123);
// //     // resolve("qwert");
// //    // reject("some error accoured");
// // });

// // function getData (dataId, getNextData){

// //     return new Promise((resolve, reject)=>{
// //         setTimeout(() =>{
// //             console.log("data",dataId);
// //             resolve("success");
// //             if (getNextData ){  
// //                 getNextData();
// //             }
// //         }, 5000);
// //     });
// // }

// //promises catch and then

// // const getPromise = () => {
// //     return new Promise ((reslove, reject) => {
// //         console.log("Pomise then and catch practice");
// //         //reslove("successed");
// //         reject("prmoise reject");
// //     });
// // }; 

// // let promise = getPromise();

// // promise.then( () => {
// //     console.log("promse fullfukes");
// // });

// // promise.catch(()=>{
// //     console.log("error in the promise");
// // });

// function asyncFunc(){
//     return new Promise((resolve, reject) =>{  
//         setTimeout(()=>{
//             console.log("some data1");
//             // resolve("success");
//             reject("Rejected to check other part");
//     },5000);
//     });
// }
// //this typr of fuctions/ promises are made by API we just take promise.then and .catch

//  let p1 = asyncFunc();
// // p1.then((res)=>{
// //     console.log("result is ",res);
// // });

// p1.catch((res) => {
//     console.log("error we get is", res);
// })

//example to check two async function data on by one 

// function asycFunc1(){
//     return new Promise ((resolve,reject) =>{
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success"); // dont miss resolve to give some value
//         }, 4000);
//     });
// }
// function asycFunc2(){
//     return new Promise ((resolve,reject) =>{
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");

//         }, 4000);
//     });
// }

// console.log("fetching data1...");
// let p1= asycFunc1();
// p1.then((res)=>{
//     console.log(res);
// });

// console.log("fetching data2...");
// let p2= asycFunc2();
// p2.then((res)=>{
//     console.log(res);
// });
 //will give same time output of console statements and then after timeout the promise result
