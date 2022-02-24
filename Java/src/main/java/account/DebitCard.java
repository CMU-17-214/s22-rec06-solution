package account;

public class DebitCard extends PaymentAccount {

    private int balance;

    public DebitCard(String accountHolder, int accountNumber, int balance) {
        super(accountHolder, accountNumber);
        this.balance = balance;
    }

    public boolean pay(int amount) {
        if (this.balance >= amount) {
            this.updateBalance(amount);
            return true;
        }
        return false;
    }

    private void updateBalance(int amount) {
        this.balance -= amount;
    }
}
