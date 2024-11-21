//VD
function sayHello(name,callback){
    console.log(`Hello, ${name}!`);
    callback();
}

function finish(){
    console.log("good bye");
}

sayHello("giau",finish);

//dung setTime

function dotask(callback){
    console.log("starting task...");
    setTimeout(()=>{
        console.log("task done");
        callback();
    },1000);
}

function oncomplete(){
    console.log("all done");
}

dotask(oncomplete);

// long nhieu callback (nen tranh)

function step1(callback){
    console.log("step1");
    setTimeout(()=>{
        callback();
    },5000);
}

function step2(callback){
    console.log("step2");
    setTimeout(()=>{
        callback();
    },4000);
}

function step3(callback){
    console.log("step3");
    setTimeout(()=>{
        callback();
    },1000);
}

step1(()=>{
    step2(()=>{
        step3(()=>{
            console.log("all done");
        });
    });
});

