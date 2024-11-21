//Từ khóa async: Biến một hàm thành bất đồng bộ và luôn trả về một Promise.
//Từ khóa await: Dừng thực thi hàm async cho đến khi Promise được hoàn thành.

// syntax

// async function dotask() {
//     try{
//         let result=await someasyncfunction();
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

//VD

function data(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(true){
                resolve("data done");
            }else{
                reject("data error");
            }
        },500);
    });
}

async function process(){
    try{
        console.log("loading data...");
        let result = await data();
        console.log(result);
    }catch(error){
        console.log(error);
    }
}

process();

// chuoi cac tac vu

function step1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("step1 done");
            resolve("result step 1");
        },1000);
    });
}

function step2 (stepbefore){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            console.log("step2 begin from: ",stepbefore);
            resolve("result step 2");
        },2000);
    });
}

function step3(stepbefore){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            console.log("step 3 begin from: ",stepbefore);
            resolve("result step 3");
        },2000);
    });
}

async function startstep() {
    try{
        let result1=await step1();
        let result2=await step2(result1);
        let result3=await step3(result2);
        console.log("all done :", result3);
    }catch(error){
        console.log(error);
    }
}

startstep();

//co the ket hop promise all

function task1(){
    return new Promise((resolve)=> setTimeout (()=> resolve("step1"),1000));
}
function task2(){
    return new Promise((resolve)=> setTimeout (()=> resolve("step2"),5000));
}

async function maintask() { 
    try{
        let result=await Promise.all([task1,task2]);
        console.log("all done",result);
    }catch(error){
        console.log(error);
    }
}

maintask();