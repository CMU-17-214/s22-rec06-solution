package drawing.formatting;

import drawing.shapes.Line;

// Introduced an interface and several implementations for formatting Lines.
public interface Formatter {
    char[] format(Line line);
}
