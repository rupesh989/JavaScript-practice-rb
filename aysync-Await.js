
console.log("async Awaits Practivce");

async function hello(){
    console.log("Hello !!");
} //its returns promises fullfiled

function api() {
return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);

        }, 3000);
    });
}

async function getWeatherData(){
    await api(); //1st call
    await api(); //2nd will work when 1st is completed
}


function getData (dataId){
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            console.log("data",dataId);
            resolve("success"); 
        }, 3000);
    });
    }

console.log("wait for 3 sec to get the your data");
// getData(4).then ((res)=>{
//     // console.log(res);
//     console.log("fetching data 5....");
//     getData(5).then((res)=>{
//         // console.log(res);
//         console.log("fetching data 6....");
//         getData(6).then((res)=>{    
//         // console.log(res);
//         console.log("fetching data 7....");
//             getData(7).then((res)=>{
//             // console.log(res);
//             console.log("ended the callbacks and no more data left here");
//             });
//         });
//     });
// });
// 
