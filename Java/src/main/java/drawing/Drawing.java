package drawing;

import drawing.formatting.Formatter;
import drawing.formatting.JPEGFormatter;
import drawing.formatting.PNGFormatter;
import drawing.shapes.Line;
import drawing.shapes.Shape;
import drawing.writing.JPEGWriter;
import drawing.writing.PNGWriter;

import java.io.IOException;
import java.io.Writer;
import java.util.List;

public class Drawing {

    private final List<Shape> shapes;

    public Drawing(List<Shape> shapes) {
        this.shapes = shapes;
    }

    // Perhaps better: whoever calls this should provide the formatters and writers.
    public void draw(String format, String filename) {
        String outName = filename + "." + format;
        // Extracted 'write' method to reduce duplication.
        if (format.equals("jpeg")) {
            this.write(new JPEGWriter(outName), new JPEGFormatter());
        }
        else if (format.equals("png")) {
            this.write(new PNGWriter(outName), new PNGFormatter());
        }
        else {
            throw new IllegalArgumentException("Format not recognized: " + format);
        }
    }

    // Extracted method: contains the duplicated functionality.
    private void write(Writer writer, Formatter formatter) {
        try {
            for (Shape shape : this.shapes) {
                // Moved the misplaced call to 'toLines' to the Shape's 'draw' method.
                // We could even just "inline" Shape.draw here and remove it from the interface. That takes away a
                // "default method" (which isn't ideal) and simplify dependencies for Shapes.
                shape.draw(writer, formatter);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

