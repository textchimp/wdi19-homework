// JavaScript Bank
//
// In this homework, you'll create a basic bank in Javascript.
//The bank has many accounts and the following capabilities that you need to write.
//
// Bank
//
// There is only one bank. This bank has an array of accounts.
//The bank needs a method that will return the total sum of money in the accounts.
//It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts.
//There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
//
// Accounts have a current balance and owner's name.
//You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values
//-- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected:
//add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.



// Data definition
// Bank is
// -array of object
// Interp. bank has an array of accounts, object.

var bank = [
            {current_balance: 10, owner_name: 'Anna'},
            {current_balance: 90, owner_name: 'Joe'},
            {current_balance: 10, owner_name: 'Tom'}
]

//Functions :
// array of object -> number
//Interp. given bank, it will return the total sum of money in the accounts.


var totalmoney = function(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i].current_balance;
  }
  return sum;
}

console.log(totalmoney(bank));

// string ->(manipulate bank) string
//Interp.  given name of owmer' account,
//         it will enroll a new account at the bank and add it to the array of accounts.
//        Then, this function will tell us who add new account

var addAccount = function (string) {
  bank.push({current_balance: 0, owner_name: string});
  return bank.slice(-1)[0].owner_name + " added new account";
}

console.log(addAccount('Kate'));



// number, string ->(manipulate bank) string
//Interp. give the # of deposit and the name who deposit,
//        it will update bank(array of objects)
//        Then, this function will tell us this story

var deposit =function (amount, name) {
  var counter = 0
  for (var i = 0; i < bank.length; i++) {
    if (bank[i].owner_name === name ) {
      counter = i;
      bank[i].current_balance += amount;
    }
  }
  return bank[counter].owner_name+" deposited $"+amount+", the current new balance for "+ bank[counter].owner_name +" is "+bank[counter].current_balance+", and the total new balance in the bank is "+totalmoney(bank);
}

// number, string ->(manipulate bank) string
//Interp. give the # of withdraw and the name who withdraw,
//        it will update bank(array of objects)
//        Then, this function will tell us this story.


console.log(deposit(25, 'Kate'));

var withdraw =function (amount, name) {
  var counter = 0
  for (var i = 0; i < bank.length; i++) {
    if (bank[i].owner_name === name ) {
      counter = i;
      if (bank[i].current_balance >= amount) {
        bank[i].current_balance -= amount;
        } else {
          //the accounts cannot have negative values.
          return bank[counter].owner_name+" want to withdraw $"+amount+" but have only $"+bank[counter].current_balance+" in the balance, so this withdraw is canceled, and the total balance in the bank is still $"+totalmoney(bank);
      }
    }
  }
  return bank[counter].owner_name+" withdrawed $"+amount+", the current new balance for "+ bank[counter].owner_name +" is $"+bank[counter].current_balance+", and the total new balance in the bank is $"+totalmoney(bank);
}

console.log(withdraw(35, 'Kate'));
console.log(withdraw(25, 'Kate'));

//Bonus
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.


// number, string, string ->(manipulate bank) string
//Interp. give # of transfer, the account name of payer,and that of who will receive the payment
//        it will update bank(array of objects)
//        Then, this function will tell us this story

var transfer =function (amount, name1, name2) {
  var id_pay = 0
  var id_receive = 0
  for (var i = 0; i < bank.length; i++) {
    for (var j = 0; j < bank.length; j++) {
      if ((bank[i].owner_name === name1 ) && (bank[j].owner_name === name2)) {
        id_pay = i;
        id_receive = j;
        if (bank[i].current_balance >= amount) {
          bank[i].current_balance -= amount;
          bank[j].current_balance += amount;
        } else {
           return bank[id_pay].owner_name+" want to make a payment of $"+amount+" but have only $"+bank[id_pay].current_balance+" in the balance, so this payment is canceled, and the total balance in the bank is still $"+totalmoney(bank);
        }
      }
    }
  }
  return bank[id_pay].owner_name+" made a payment of $"+amount+" to "+bank[id_receive].owner_name+" and the current balances for "+bank[id_pay].owner_name+" and "+bank[id_receive].owner_name+" are "+bank[id_pay].current_balance+" and "+bank[id_receive].current_balance+" respectively."
}

console.log(transfer(10, 'Joe', 'Anna'));
