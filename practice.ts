// bài 1
let ten:string = "minh giau";
let tuoi:number =20;
let hocsinh:boolean=true;
let mang:number[]=[12,23,34];

console.log(ten);
console.log(tuoi);
console.log(hocsinh);
console.log(mang);

// bai 2
function add(a:number,b:number) {
    return a+b;
}
console.log(add(12,21));

// bai 3
interface Person{
    ten:string,
    tuoi:number,
    hocsinh:boolean
}

let person : Person ={
    ten:"vo minh giau",
    tuoi:20,
    hocsinh:true
}

console.log(person);