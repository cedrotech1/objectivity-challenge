// CHALLENGE 2

// Bank Account Management:
// Create a console application that simulates a simple bank account system. The app should allow users to create accounts, deposit and withdraw money, and view their account balance. Implement basic error handling, such as 
// preventing negative balances.

class MyBankAccount {
    constructor(name, initialBalance) {
      this.name = name;
      this.balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount <= 0) {
        console.log('Please enter a positive amount.');
        return;
      }
      this.balance += amount;

      console.log('–––––––––ACCOUNT OWNER–––––––––');
      console.log(`         ${this.name} `);
      console.log('–––––––––––––––––––––––––––––––');
      console.log(`Deposited ${amount}. New balance: ${this.balance}`);
      console.log('–––––––––––––––––––––––––––––––');
    }
  
    withdraw(amount) {
      if (amount <= 0) {
        console.log('Please enter a positive amount.');
        console.log('–––––––––––––––––––––––––––––––');
        return;
      }
      if (this.balance - amount < 0) {
        console.log('Insufficient funds.');
        return;
      }
      this.balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
      console.log('–––––––––––––––––––––––––––––––');
      
    }
  
    getBalance() {
      console.log(`Balance: ${this.balance}`);
      console.log('–––––––––––––––––––––––––––––––');
    }
  }
  
  // Creating  a new account_ with name and initiol balance
  const account = new MyBankAccount('cedrick hakuzimana', 1000);
  // Deposit some money to created account
  account.deposit(500);
  // Withdraw some money 
  account.withdraw(300);
  // Get the account balance
  account.getBalance();
  
  