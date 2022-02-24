import { PaymentAccount } from "./paymentaccount";

class DebitCard extends PaymentAccount {
	
    private balance: number;

    constructor(accountHolder: string, accountNumber: number, balance: number) {
        super(accountHolder, accountNumber);
        this.balance = balance;
    }

    public pay(amount: number): boolean {
        if (amount > this.balance) {
            return false;
        }
        this.balance -= amount;
        return true;
    }

    public getbalance(): number {
        return this.balance;
    }
}