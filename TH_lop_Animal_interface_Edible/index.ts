import {Tiger} from "./Animals/Tiger";
import {Chicken} from "./Animals/Chicken";
import {Apple} from "./Fruits/Apple";
import {Orange} from "./Fruits/Orange";

// let tiger: Tiger = new Tiger();
// let chicken: Chicken = new Chicken();
// animals.push(tiger, chicken);
console.log('-----Animals-----');
let animals = [new Tiger(), new Chicken()];
animals.forEach(e => {
    console.log(e.makeSound());
    if (e instanceof Chicken) {
        console.log(e.howToEat());
    }
})

console.log('-----Fruits-----');
let fruits = [new Apple(), new Orange()];
fruits.forEach(e => console.log(e.howToEat()));