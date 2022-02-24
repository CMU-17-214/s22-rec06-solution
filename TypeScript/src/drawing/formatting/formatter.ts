import { Line } from "../shapes/line";

interface Formatter {
	format(line: Line): number[];
}

export { Formatter }