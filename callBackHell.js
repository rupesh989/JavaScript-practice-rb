console.log("Callbackhell !!");

// function getdata (dataId){
// // pass any number as dataId
//     setTimeout(() =>{
//         console.log("data",dataId);
//     }, 4000);
// }

// getdata(1);
// getdata(2);
// getdata(3); 

//when try to get 2 data and try callback 

// try {

//     getData(1, getData2(2));
    
// } catch (error) {
//  console.log("we have this type of error =",error);   
// }
// getData(1, getData2(2));

function getData (dataId, getNextData){
    // pass any number as dataId
        setTimeout(() =>{
            console.log("data first",dataId);
            if (getNextData ){  
            getNextData();
            }
        }, 3000);
    }
    getData(1);
    getData(2);
    getData(3); // this three output will be came instantly after 1 sec

//  while this is nested call backs(callback hell) here each output will come after 
//  a time of a interval of 1 sec for each statements
//callback hell example

 console.log("new nested loop started");
    getData(4, ()=>{
        console.log("fetching data 5....");
        getData(5,()=>{
            console.log("fetching data 6....");
            getData(6,()=>{
                console.log("fetching data 7....");
                getData(7,()=>{
                    console.log("ended the callbacks");
                });
            });
        });
    });
