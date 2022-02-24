package account;

public class Student {

    private AccountData accountData;
    private double gpa;

    public Student(AccountData accountData, double gpa) {
        this.accountData = accountData;
        this.gpa = gpa;
    }

    public void updateGPA(double gpa) {
        this.gpa = gpa;
    }

    public double getGPA() {
        return this.gpa;
    }

}
