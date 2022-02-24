import { Road } from "./road";

class Frogger {
	private road: Road;
    private position: number;

    constructor(road: Road, position: number) {
        this.road = road;
        this.position = position;
    }

    public move(forward: boolean): boolean {
        let nextPosition: number = this.position + (forward ? 1 : -1);
        if (!this.road.isValid(nextPosition) || this.road.isOccupied(nextPosition)) {
            return false;
        }
        this.position = nextPosition;
        return true;
    }
}