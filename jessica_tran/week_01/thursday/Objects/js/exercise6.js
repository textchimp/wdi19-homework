// JAVASCRIPT BANK + BONUSES

//bank has an array of accounts

var bank = [
  {name: 'Jessica', amount: 1000},
  {name: 'John', amount: 1000},
  {name: 'Jennifer', amount: 1000},
  {name: 'Lucy', amount: 3000},
  {name: 'Aimee', amount: 1000}
]
//The bank needs a method that will return the total sum of money in the accounts.

var totalSum = function (){
  var total=0;
  for (var i = 0 ; i <bank.length; i++){
    total += bank[i].amount;
  }
  return total;
}
//It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.//

var addAccount = function (newName, newAmount){
  newAccount = {name: newName, amount: newAmount}
  bank.push(newAccount);
}

// You should be able to deposit or withdraw from an account to change the balance.

var deposit = function (depositName, depositAmount){
  for (var i = 0; i<bank.length; i++){
    if(bank[i].name === depositName){
      bank[i].amount += depositAmount;
    }
  }
}

var withdraw = function (withdrawName, withdrawAmount){
  for (var i = 0; i<bank.length; i++){
    if(bank[i].name === withdrawName){
      if(bank[i].amount > withdrawAmount){
      bank[i].amount -= withdrawAmount;
    } else {console.log("You cannot withdraw as you do not have enough money in your balance")}
    }
  }
}

//Transfers

var transfer = function (originName, destinationName, amount ){
  for (var i = 0; i < bank.length; i++){
    if (bank[i].name === originName){
      if(bank[i].amount > amount ){
        bank[i].amount -= amount;
        } else { console.log ("There are insufficient funds for the transfer")}
    } else if (
      bank[i].name === destinationName){
        bank[i].amount += amount;
      }
  }
}




//STORY
//total sum
console.log("This is the total sum: " + totalSum());

//newAccount
addAccount ('John', 2000);
console.log ("This is the new account: ");
console.log(bank[bank.length-1]);
console.log("You can find the new account as object #5: ");
console.log (bank);

//deposit
console.log("Jessica's current balance")
console.log(bank[0]);
deposit('Jessica', 500);
console.log ("Deposited $500 into Jessica's account");
console.log (bank[0]);//Jessica has amount: 500 now

//withdraw
console.log("John's current balance");
console.log(bank[1]);
withdraw('John', 500);
console.log("Withdrew $500 from John's Account")
console.log(bank[1]); //John has amount: 500 now

//no negative balances
console.log("John's current balance");
console.log(bank[1]);
console.log("Try to withdraw $2000 from John's Account")
withdraw('John', 2000);
console.log("John's balance remains the same")
console.log(bank[1]);

//transfer money from one account to another
console.log("Lucy and Aimee's current account balance")
console.log(bank[3]);
console.log(bank[4]);

console.log("Transferring $1000 from Lucy to Aimee")
transfer('Lucy', 'Aimee', 1000 );
console.log(bank[3]);
console.log(bank[4]);
