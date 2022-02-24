package account;

public abstract class PaymentAccount {

    private final AccountData accountData;

    public PaymentAccount(String accountHolder, int accountNumber) {
        this.accountData = new AccountData(accountHolder, accountNumber);
    }

    public abstract boolean pay(int amount);

    public AccountData getAccountData() {
        return this.accountData;
    }
}
