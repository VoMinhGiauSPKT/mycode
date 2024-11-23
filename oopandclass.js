var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// cu phap co ban
var person = /** @class */ (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    person.prototype.greet = function () {
        console.log("hello my name ".concat(this.name, " and i am ").concat(this.age));
    };
    return person;
}());
var person1 = new person('Giau', 20);
person1.greet();
// tinh ke thua
var animal = /** @class */ (function () {
    function animal(name) {
        this.name = name;
    }
    animal.prototype.speak = function () {
        console.log("".concat(this.name, " make a sound"));
    };
    return animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.speak = function () {
        console.log("".concat(this.name, " good job"));
    };
    return Dog;
}(animal));
var dog = new Dog('john');
dog.speak();
