
const getFacts= async () => {

    console.log("Getting data...");

    let response = await fetch( URL);// bydefault we use GET fetch request
    console.log(response.status);
    console.log(response); //JSON format

    let data = await response.json();
    console.log(data); //usable data in Array forms

    console.log(data[2]);
    
    console.log(data[2].text);
    
    factPara.innerText= data[1].text; // check the error of innerText to be null ???
};
btn1.addEventListener("click", getFacts);

// const getDogFacts = async ()=> {
//     console.log("Getting dog facts...");

//     let response2= await fetch (URL2);
//     console.log(response2);
// };

// btn2.addEventListener("click",getDogFacts);
