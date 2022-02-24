package frogger;

public class Frogger {

    private final Road road;
    private int position;

    public Frogger(Road road, int position) {
        this.road = road;
        this.position = position;
    }

    public boolean move(boolean forward) {
        int nextPosition = this.position + (forward ? 1 : -1);
        if (!this.road.isValid(nextPosition) || this.road.isOccupied(nextPosition)) {
            return false;
        }
        this.position = nextPosition;
        return true;
    }
}
