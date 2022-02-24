package account;

public class Loan extends PaymentAccount {

    private int balanceRemaining;
    private final int minimumMonthlyPayment;

    public Loan(String accountHolder, int accountNumber, int balanceRemaining, int monthlyPayment) {
        super(accountHolder, accountNumber);
        this.balanceRemaining = balanceRemaining;
        this.minimumMonthlyPayment = monthlyPayment;
    }

    @Override
    public boolean pay(int amount) {
        if (amount < this.minimumMonthlyPayment) {
            return false;
        }
        this.balanceRemaining -= amount;
        return true;
    }

    public int getBalanceRemaining() {
        return this.balanceRemaining;
    }

    public int getMinimumMonthlyPayment() {
        return this.minimumMonthlyPayment;
    }

}
