// // In this homework, you'll create a basic bank in Javascript.
// // The bank has many accounts and the following capabilities
// //that you need to write.
// //
// // Bank
// //
// There is only one bank. This bank has an array of accounts.
// The bank needs a method that will return the total sum of
// money in the accounts.
// It also needs an addAccount method that will enroll a new
// account at the bank and add it to the array of accounts.
// There is no need to create additional functions of the
// bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects
// that all share a set of common functionality.
//
// Accounts
//
// Accounts have a current balance and owner's name.
// You should be able to deposit or withdraw from an
// account to change the balance.
//
// There is no need to write a user interface. Make sure
// functions return values -- you may also have your functions
// console.log() values to help you see your code working.
//
// You should write a basic story through a series of
// JavaScript commands that shows that the methods do
// indeed work as expected: add some accounts,
// show the total balance, make some deposits and withdrawals,
// show the new total balance.
//
// Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
//
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to
// transfer amounts between two accounts.

var bank = {
  accounts: []
};

function Account(balance, owner) {
  this.balance = balance;
  this.owner = owner;
};

Account.prototype.deposit = function(money) {
  if (this.balance + money < 0) {
    console.log("Can't deposit negative numbers!!");
    return;
  }
  this.balance += money;
}

Account.prototype.withdraw = function(money) {
  if (this.balance - money < 0) {
    console.log("Can't withdraw that much money O:");
    return;
  }
  this.balance -= money;
}

bank.addAccount = function(owner, balance) {
  this.accounts.push(new Account(balance, owner));
}

bank.totalBalance = function() {
  var res = 0;
  this.accounts.forEach(function(a) {
    res += a.balance;
  })
  return res;
}

bank.transfer = function(acc1, acc2, amount) {
  var first = this.accounts.find(function(a) {
    return a.owner === acc1;
  });
  var second = this.accounts.find(function(a) {
    return a.owner === acc2;
  });
  first.balance -= amount;
  second.balance += amount;
}

// Adding accounts
bank.addAccount("Santiago", 100);
bank.addAccount("Luke", 200);
bank.addAccount("Matt", 300);
console.log("Welcome to the Not-So-Dubious bank!");
console.log(`%c ________________________________________
  _._._                       _._._
  _|   |_                     _|   |_
  | ... |_._._._._._._._._._._| ... |
  | ||| |  o NATIONAL BANK o  | ||| |
  | """ |  """    """    """  | """ |
  ())  |[-|-]| [-|-]  [-|-]  [-|-] |[-|-]|  ())
  (())) |     |---------------------|     | (()))
  (())())| """ |  """    """    """  | """ |(())())
  (()))()|[-|-]|  :::   .-"-.   :::  |[-|-]|(()))()
  ()))(()|     | |~|~|  |_|_|  |~|~| |     |()))(()
  ||  |_____|_|_|_|__|_|_|__|_|_|_|_____|  ||
  ~ ~^^ @@@@@@@@@@@@@@/=======\@@@@@@@@@@@@@@ ^^~ ~
  ^~^~                                ~^~^`, "font-family:monospace")

console.log("Please have an account with us: bank.addAccount('YOURNAME', DEPOSIT)");
console.log("We are super rich now, we SWEAR we won't spend your money");
console.log("We have a total balance of $" + bank.totalBalance());

// Deposits
console.log(bank.accounts[0].owner + " has $" + bank.accounts[0].balance);
console.log("The bank deposits $500 on Santiago's account");
bank.accounts[0].deposit(500);
console.log(bank.accounts[0].owner + " now has $" + bank.accounts[0].balance);

// Withdraws
console.log("Santiago withdraws $200 of his account");
bank.accounts[0].withdraw(200);
console.log(bank.accounts[0].owner + " now has $" + bank.accounts[0].balance);

// Transfers
console.log(bank.accounts[1].owner + " has $" + bank.accounts[1].balance);
console.log(bank.accounts[0].owner + " will transfer $100 to " + bank.accounts[1].owner);
bank.transfer(bank.accounts[0].owner, bank.accounts[1].owner, 100);
console.log(bank.accounts[1].owner + " now has $" + bank.accounts[1].balance);
console.log(bank.accounts[0].owner + " now has $" + bank.accounts[0].balance);
