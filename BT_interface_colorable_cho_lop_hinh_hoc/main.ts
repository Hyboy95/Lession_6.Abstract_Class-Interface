import {Circle} from "./Circle";
import {Cylinder} from "./Cylinder";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";
import {Colorable} from "./Colorable";

let circle: Circle = new Circle('circle1', 5);
let cylinder: Cylinder = new Cylinder('cylinder1', 4, 5);
let rectangle: Rectangle = new Rectangle(4, 2, 'rectangle1');
let square: Square = new Square('square1', 2);

let shapes = [circle, cylinder, rectangle, square];


shapes.forEach((e: any) => {
    console.log(`${e.show()}`);
    console.log(`${e.calculateArea()}`);
    if ("howToColor" in e) {
        e.howToColor();
    }
})