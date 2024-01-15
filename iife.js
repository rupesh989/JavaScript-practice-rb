
//Invoked Function Expressions (IIFEs)

function getData (dataId){
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            console.log("data",dataId);
            resolve("success"); 
        }, 3000);
    });
    }

    
(async function (){
    console.log("wait for 3 sec your data is coming");
    console.log("fetching data 77....");
    await getData(77);
    
    console.log("fetching data 88....");

    await getData(88);
    console.log("fetching data 99....");

    await getData(99);
    console.log("End of data");

})();
