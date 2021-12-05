class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let balance = 0;
    for(let t of this.transactions) {
      balance += t.value
    }
    return balance
  }

  addTransactions(transaction) {
    this.transactions.push(transaction)
  }
}

// abstract class
class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    // this.account.balance += this.value
    this.time = new Date()
    // add the trasanction to the account
    this.account.addTransactions(this)
  }
}

class Withdrawal extends Transaction{
  get value() {
    return this.amount;
  }
}

class Deposit extends Transaction {

  get value() {
    return -this.amount;
  }
}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("Kanye Wewst");

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
// console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
// console.log('Transaction 2:', t2);

t3 = new Deposit(32.32, myAccount);
t3.commit();
// console.log('Transaction 3:', t3);

console.log('Account Balance:', myAccount.balance);
console.log('Account Transaction history', myAccount.transactions)
