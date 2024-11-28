// cu phap co ban
class person{
    name:string;
    age:number;
    constructor(name:string, age:number){
        this.name=name;
        this.age=age;
    }
    greet():void {
        console.log(`hello my name ${this.name} and i am ${this.age}`);
    }
}

let person1= new person('Giau',20);
person1.greet();

// tinh ke thua

class animal{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    speak():void{
        console.log(`${this.name} make a sound`);
    }
}

class Dog extends animal{
    constructor(name:string){
        super(name);
    }

    speak(): void {
        console.log(`${this.name} good job`);
    }
}

let dog=new Dog('john');
dog.speak();

// tinh dong goi
