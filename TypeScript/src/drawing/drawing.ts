import { Shape } from "./shapes/shape";
import { Writer } from "./writing/writer";
import { JPEGWriter } from "./writing/jpegwriter";
import { PNGWriter } from "./writing/pngwriter";
import { Line } from "./shapes/line";
import { PNGFormatter } from "./formatting/pngformatter";
import { JPEGFormatter } from "./formatting/jpegformatter";
import { Formatter } from "./formatting/formatter";

class Drawing {

    public shapes: Shape[];

    constructor(shapes: Shape[]) {
        this.shapes = shapes;
    }

    // Perhaps better: whoever calls this should provide the formatters and writers.
    public draw(format: string, filename: string): void {
        let outName: string = filename + "." + format;
        // Extracted 'write' method to reduce duplication.
        if (format === "jpeg") {
            this.write(new JPEGWriter(outName), new JPEGFormatter());
        }
        else if (format === "png") {
            this.write(new PNGWriter(outName), new PNGFormatter());
        }
        else {
            throw new Error("Format not recognized: " + format);
        }
    }

    // Extracted method: contains the duplicated functionality.
    private write(writer: Writer, formatter: Formatter): void {
        try {
            for (let shape of this.shapes) {
                // Moved the misplaced call to 'toLines' to the Shape's 'draw' method.
                // We could even just "inline" Shape.draw here and remove it from the interface. That takes away a
                // "default method" (which isn't ideal) and simplify dependencies for Shapes.
                shape.draw(writer, formatter);
            }
        } catch (e) {
            console.log(e)
        }
    }
}

