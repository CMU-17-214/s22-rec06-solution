import { PaymentAccount } from "./paymentaccount";

class Loan extends PaymentAccount {
	
    private balanceRemaining: number;
    private minimumMonthlyPayment: number;

    constructor(accountHolder: string, accountNumber: number, balanceRemaining: number, monthlyPayment: number) {
        super(accountHolder, accountNumber);
        this.balanceRemaining = balanceRemaining;
        this.minimumMonthlyPayment = monthlyPayment;
    }

    public pay(amount: number): boolean {
        if (amount < this.minimumMonthlyPayment) {
            return false;
        }
        this.balanceRemaining -= amount;
        return true;
    }

    public getBalanceRemaining(): number {
        return this.balanceRemaining;
    }

    public getMinimumMonthlyPayment(): number {
        return this.minimumMonthlyPayment;
    }
}