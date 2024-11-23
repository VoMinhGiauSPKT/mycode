class animal{
    constructor(name){
        this.name=name;
    }

    sound(){
        console.log(`${this.name} make a sound`);
    }
}

class Dog extends animal{
    sound(){
         console.log(`${this.name} bark`);
    }
}

let dog =new Dog('john');
dog.sound();