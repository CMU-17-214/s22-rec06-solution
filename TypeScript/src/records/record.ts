
class Records {
    private records: Person[];

    constructor() {
        this.records = [];
    }

    public addRecord(person: Person) {
        for (let row of this.records) {
            if (row.equals(person)) {
                return false;
            }
        }
        this.records.push(person);
        return true;
    }
}