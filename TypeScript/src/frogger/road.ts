class Road {
	private occupied: boolean[]

	constructor(occupied: boolean[]) {
		this.occupied = occupied;
	}

	public getOccupied(): boolean[] {
		return this.occupied;
	}

    public isOccupied(position: number): boolean {
        return this.occupied[position];
    }

    public isValid(position: number): boolean {
        if (position < 0) return false;
        return position < this.occupied.length;
    }
}

export { Road }