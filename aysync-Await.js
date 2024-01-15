
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

