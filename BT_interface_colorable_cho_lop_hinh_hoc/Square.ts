import {Rectangle} from "./Rectangle";
import {Colorable} from "./Colorable";

export class Square extends Rectangle implements Colorable {
    size: number;
    constructor(name: string, size: number) {
        super(size, size, name);
        this.size = size;
    }

    howToColor() {
        console.log(`Color all four sides`);
    }
}