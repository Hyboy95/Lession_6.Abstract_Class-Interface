import {Circle} from "./Circle";
import {Cylinder} from "./Cylinder";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";

let circle: Circle = new Circle('circle1', 5);
let cylinder: Cylinder = new Cylinder('cylinder1', 5, 5);
let rectangle: Rectangle = new Rectangle(2, 4, 'rectangle1');
let square: Square = new Square('square1', 4);
let arr = [circle, cylinder, rectangle, square];

let randomPercent: number = Math.floor((Math.random() * 100));

arr.forEach(e => {
    console.log(`${e.show()}`);
    console.log(`Dien tich hinh ban dau: ${e.calculateArea()}`);
    e.resize(randomPercent);
    console.log(`Dien tich hinh sau: ${e.calculateArea()}`);
})



