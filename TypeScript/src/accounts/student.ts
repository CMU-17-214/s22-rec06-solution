import { AccountData } from "./accountdata";

class Student {
	
    private accountData: AccountData;
    private gpa: number;

    constructor(accountData: AccountData, gpa: number) {
        this.accountData = accountData;
        this.gpa = gpa;
    }

    public getGPA(): number {
        return this.gpa;
    }

    public updateGPA(newGPA: number) {
        this.gpa = newGPA;
    }
}