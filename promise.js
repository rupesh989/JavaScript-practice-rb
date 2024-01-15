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
