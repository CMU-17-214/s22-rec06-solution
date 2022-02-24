import { Line } from "./line";
import { AbstractShape } from "./shape";

class Rectangle extends AbstractShape {

    private points: number[][];

    constructor(point1: number[], point2: number[], point3: number[], point4: number[]) {
		super();
        this.points = [
			point1, point2, point3, point4
		]
    }

    public toLines(): Line[] {
        return [
			new Line(this.points[0], this.points[1]),
			new Line(this.points[1], this.points[2]),
			new Line(this.points[2], this.points[3]),
			new Line(this.points[3], this.points[0])
		]
    }
}

export { Rectangle }