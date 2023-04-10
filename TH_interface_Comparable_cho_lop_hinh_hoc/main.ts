import {ComparableCircle} from "./ComparableCircle";

let circle1 = new ComparableCircle(10);
let circle2 = new ComparableCircle(20);
let circle3 = new ComparableCircle(10);

let result = circle1.compareTo(circle2);
if (result === 1) {
    console.log(`The circle has radius: ${circle1.getRadius()} is larger the circle has radius: ${circle2.getRadius()}`);
} else if (result === -1) {
    console.log(`The circle has radius: ${circle1.getRadius()} is smaller the circle has radius: ${circle2.getRadius()}`);
} else console.log(`The circle has radius: ${circle1.getRadius()} is equal the circle has radius: ${circle2.getRadius()}`);
