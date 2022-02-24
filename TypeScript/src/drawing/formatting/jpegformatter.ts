import { Line } from "../shapes/line";
import { Formatter } from "./formatter";

class JPEGFormatter implements Formatter {

	public format(line: Line): number[] {
        // Pretend this works.
        return [];
    }
}

export { JPEGFormatter }