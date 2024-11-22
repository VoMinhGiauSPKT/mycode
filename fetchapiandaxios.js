async function fetchdata() {
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/?ref=200lab.io");
        if(!response.ok){
            throw new Error(`error : ${response.status}`);
        }
        const data =await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}

fetchdata();