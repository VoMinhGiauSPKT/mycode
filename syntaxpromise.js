// cú pháp
function SoChanLe(number){
    return new Promise((resolve,reject) => {
        if(number%2==0){
            resolve(`${number} la so chan`);
        }else{
            reject(`${number} la so le`);
        }
    });
}

SoChanLe(4)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// có thể "then" nhiều lần 
new Promise((resolve)=>{
    setTimeout(()=> resolve('buoc 1 hoan thanh'));
})
    .then((result)=>{
        console.log(result);
        return "buoc 2 hoan thanh";
    })
    .then((result)=>{
        console.log(result);
        return "buoc 3 hoan thanh";
    })
    .then((result)=>{
        console.log(result);
    });
// promise.all chỉ trả về khi tất cả đúng hết
let promise1=Promise.resolve("ket qua 1");
let promise2=new Promise((resolve)=>setTimeout(()=>resolve("ket qua 2"),2000));
let promise3=Promise.resolve("ket qua 3");

Promise.all([promise1,promise2,promise3]).then((result)=>{
    console.log(result);
})
// promise.race trả về cái nào nhanh nhất
let promise4=new Promise((resolve)=>setTimeout(()=>resolve("ket qua 4"),5000));
let promise5=new Promise((resolve)=>setTimeout(()=>resolve("ket qua 5"),4000));

Promise.race([promise4,promise5]).then((result)=>{
    console.log(result);
});