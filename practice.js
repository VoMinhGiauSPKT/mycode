// bài 1
var ten = "minh giau";
var tuoi = 20;
var hocsinh = true;
var mang = [12, 23, 34];
console.log(ten);
console.log(tuoi);
console.log(hocsinh);
console.log(mang);
// bai 2
function add(a, b) {
    return a + b;
}
console.log(add(12, 21));
var person = {
    ten: "vo minh giau",
    tuoi: 20,
    hocsinh: true
};
console.log(person);
// bai 4
var Direction;
(function (Direction) {
    Direction["North"] = "North";
    Direction["South"] = "South";
    Direction["East"] = "East";
    Direction["West"] = "West";
})(Direction || (Direction = {}));
function move(direction) {
    console.log("".concat(direction));
}
move(Direction.North);
move(Direction.East);
