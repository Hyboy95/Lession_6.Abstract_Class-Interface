import {Rectangle} from "./Rectangle";

export class Square extends Rectangle {
    size: number;
    constructor(name: string, size: number) {
        super(size, size, name);
        this.size = size;
    }
}