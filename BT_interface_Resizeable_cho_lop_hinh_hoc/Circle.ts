import {Resizeable} from "./Resizeable";
import {Shape} from "./Shape";

export class Circle extends Shape implements Resizeable {
    radius: number;

    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    resize(percent: number) {
         this.radius = this.radius + this.radius * percent / 100;
    }

}