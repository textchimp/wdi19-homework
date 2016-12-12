/*** JavaScript Bank ***

In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

Bank

There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality.

Accounts

Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
*/


var bank = [];

// Create a new object type call Accnt
var Accnt = function(name,balance) {
   this.ownerName = name;
   this.accntBalance = balance;
}

var addAccount = function(name, balance) {
   // I create a new instance of the object Accnt and push it to the array
   var newAccnt = new Accnt(name, balance);
   bank.push(newAccnt);
}

var totalBalance = function() {
   var total = 0;
   for (var i = 0; i < bank.length; i++) {
      total += bank[i].accntBalance;
   }
   return total.toFixed(2);
}

var existingAccnt = function(owner) {
   var pos = -1;
   for (var i = 0; i < bank.length; i++) {
      if (bank[i].ownerName === owner) {
         pos = i;
      }
   }
   if (pos === -1) {
      console.log("The account " + owner + " doesn't exist. Transaction cancelled");
   }
   return pos;
}

var getBalance = function(owner) {
   for (var i = 0; i < bank.length; i++) {
      if (bank[i].ownerName === owner) {
         return bank[i].accntBalance.toFixed(2);
      }
   }
}

var deposit = function(accntOwner, amount) {
   var position = existingAccnt(accntOwner)
   if (position >= 0) {
      console.log("Transaction successful");
      bank[position].accntBalance += amount;
   }
}

var withdraw = function(accntOwner, amount) {
   var position = existingAccnt(accntOwner)
   if (position >= 0) {
      if ((getBalance(accntOwner) - amount) > 0) {
         bank[position].accntBalance -= amount;
         console.log("Transaction successful");
      } else {
         console.log("Not enough funds to make this transaction");
      }
   }
}

var transfer = function(accntFrom, accntTo, amount) {
   var positionFrom = existingAccnt(accntFrom)
   var positionTo = existingAccnt(accntTo)
   if ((positionFrom >= 0) && (positionTo >= 0)) {
      if ((getBalance(accntFrom) - amount) > 0) {
         console.log("Transaction successful");
         bank[positionFrom].accntBalance -= amount;
         bank[positionTo].accntBalance += amount;
      } else {
         console.log("Not enough funds to make this transaction");
      }
   }
}
