import { Writer } from "../writing/writer";
import { PNGWriter } from "../writing/pngwriter";
import { JPEGWriter } from "../writing/jpegwriter";
import { Line } from "./line";
import { Formatter } from "../formatting/formatter";

interface Shape {
	
    toLines(): Line[];

    draw(writer: Writer, formatter: Formatter): void;
}

abstract class AbstractShape implements Shape {

	abstract toLines(): Line[];

	public draw(writer: Writer, formatter: Formatter): void {
		let lines: Line[] = this.toLines();
        for (let line of lines) {
            writer.write(formatter.format(line));
        }
	}
}

export { Shape, AbstractShape }