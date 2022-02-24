package frogger;

public class Road {
    private final boolean[] occupied;

    public Road(boolean[] occupied) {
        this.occupied = occupied;
    }

    public boolean[] getOccupied() {
        return this.occupied;
    }

    public boolean isOccupied(int position) {
        return this.occupied[position];
    }

    public boolean isValid(int position) {
        if (position < 0) return false;
        return position < this.occupied.length;
    }
}
