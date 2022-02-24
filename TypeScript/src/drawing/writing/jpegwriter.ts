import { Writer } from "./writer";

class JPEGWriter implements Writer {
	path: string;

	constructor(path: string) {
		this.path = path;
	}

	write(values: number[]) {
		// TODO: Stub. Pretend it is complete.
	}
}

export { JPEGWriter }