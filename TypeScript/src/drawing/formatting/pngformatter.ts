import { Line } from "../shapes/line";
import { Formatter } from "./formatter";

class PNGFormatter implements Formatter {
	
	public format(line: Line): number[] {
        // Pretend this works.
        return [];
    }
}

export { PNGFormatter }