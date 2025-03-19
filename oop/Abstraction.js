class BankAccount {
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
  }

  getBalance() {
    return `The balance for ${this.name} is $${this.amount}`;
  }

  deposit(amount) {
    if (amount > 0) {
      this.amount += amount;
    } else {
      console.log("Deposit amount must be positive");
    }
  }
}

const account = new BankAccount("bhragav", 1000);
console.log(account.getBalance());
account.deposit(500);
console.log(account.getBalance());
