/*
In this homework, you'll create a basic bank in Javascript. The bank has many
accounts and the following capabilities that you need to write.

Bank

There is only one bank. This bank has an array of accounts. The bank needs a
method that will return the total sum of money in the accounts. It also needs
an addAccount method that will enroll a new account at the bank and add it to
the array of accounts. There is no need to create additional functions of the
bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of
common functionality.

Accounts

Accounts have a current balance and owner's name. You should be able to deposit
or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values
-- you may also have your functions console.log() values to help you see your
code working.

You should write a basic story through a series of JavaScript commands that
shows that the methods do indeed work as expected: add some accounts, show the
total balance, make some deposits and withdrawals, show the new total balance.
*/
var Bank = [];

//Traverses through the Bank and returns the index of the Account no is found
//returns -1 if not found
function getIndexOf(acc)
{
  for ( var i=0; i<Bank.length; i++ )
  {
    if (Bank[i].accNo === acc)
    {
      return i;
    }
  }
  return -1;
}

//Displays current balance based on the account number given.
function currentBalance(acc)
{
  var i = getIndexOf(acc);
  if( i === -1)
  {
    console.log("Sorry the account number:",acc+" is not our Bank member.");
    return -1;
  }
  console.log("Welcome!",Bank[i].name
              +". Your current balance for the account: ",Bank[i].accNo
              +" is: ",Bank[i].balance+"$");
  return true;
}

//Constructor for Account object
function newAccount(name,acc,bal)
{
  this.name = name;
  this.accNo = acc;
  this.balance = bal;
}

//Add a new account in the bank.
function addAccount(name, acc, bal)
{
  if ( (acc < 0) || (bal < 0 ) || (getIndexOf(acc) >= 0)  )
  {
    console.log("Oops! Something went wrong. May be your Account number:",acc
                +" is negative.");
    console.log("Or the balance:",bal+" is negative.");
    console.log("Or the account number:",acc+" already exists.");
    console.log("Try again with some positive value.");
    return false;
  }
  Bank.push(new newAccount(name,acc,bal));
  console.log("Congratulations",name+" for opening an account with us."
            +" Welcome to the Javascript Bank and your account number is: ",acc);
  console.log("Your current balance is: ",bal+"$.");
  console.log("Happy banking.");
  return true;
}

//Displays total sum of money in the accounts
function totalSumInBank()
{
  var totalSum = 0;
  for (var i=0; i<Bank.length; i++)
  {
    totalSum += Bank[i].balance;
  }
  console.log("Total amount to money in bank: ",totalSum+"$.");
  return totalSum;
}

//Deposits money to the Account
function deposit(acc,depAmnt)
{
  if (depAmnt < 0)
  {
    console.log("Cannot deposit negative amount:",depAmnt+"$.");
    return -1;
  }
  var i = getIndexOf(acc);
  if ( i === -1 )
  {
    console.log("Sorry the account number:",acc+" is not our Bank member.");
    return -1;
  }
  Bank[i].balance += depAmnt;
  console.log("Your account",acc+" is deposited with: ",depAmnt+"$.");
  console.log("Now, your current balance is: ",Bank[i].balance+"$.");
  return true;
}

//Amount withdrawn
function withdraw(acc, withdrawnAmnt)
{
  var i = getIndexOf(acc);
  if ( i === -1 )
  {
    console.log("Sorry the account number:",acc+" is not our Bank member.");
    return -1;
  }
  if ( Bank[i].balance < withdrawnAmnt )
  {
    console.log("Insufficient funds to withdraw:",withdrawnAmnt+"$.");
    console.log("Your currentBalance:",Bank[i].balance+"$.");
    return -1;
  }
  Bank[i].balance -= withdrawnAmnt;
  console.log("You have withdrawn",withdrawnAmnt+"$ from your account: ",acc);
  console.log("Now, your current balance is:",Bank[i].balance+"$.");
  return true;
}

//Facilitates transfers from one account to another
function transfer(fromAcc, toAcc, transferAmnt)
{
  var fromAccIndex = getIndexOf(fromAcc);
  var toAccIndex = getIndexOf(toAcc);
  //Check if From Account exists
  if ( (fromAccIndex === -1) || (toAccIndex === -1) )
  {
    console.log("From Account with the account number:",fromAcc+" is not found");
    console.log("Or To Account with the account number:",toAcc+" is not found");
    return -1;
  }
  if (Bank[fromAccIndex].balance < transferAmnt)
  {
    console.log("Insufficient funds in From account:",fromAcc);
    console.log("Your currentBalance:",Bank[fromAccIndex].balance+"$.");
    return -1;
  }
  Bank[fromAccIndex].balance -= transferAmnt;
  Bank[toAccIndex].balance += transferAmnt;
  console.log("Amount:",transferAmnt+"$ is tranferred from:",fromAcc+" to:",toAcc);
  console.log("Acc:",fromAcc+" current balance:",Bank[fromAccIndex].balance);
  console.log("Acc:",toAcc+" current balance:",Bank[toAccIndex].balance);
  return true;
}
addAccount("John",182792,50000)
addAccount("David",543543,4000);
addAccount("Rob", 56444, 7022);
totalSumInBank();
currentBalance(182792);
currentBalance(543543);
currentBalance(56444);
deposit(543543, 670);
withdraw(56444, 22);  //Error
totalSumInBank();
withdraw(56444,8000); //Should return error saying Insufficient funds
addAccount("Junk",-87333,45435); //Should return error -ve accno
addAccount("AnotherJunk", 786786, -8787); //Should return error -ve bal
addAccount("Error3", 543543, 32423); //Error - Acc nummber already exists
deposit(543543,-878);//Error -ve dep Amnt
transfer(543543,56444,5000); // error Insufficient funds in from Account
transfer(182792,324324,3435); //error - invalid to Acc
transfer(232312,56444,3289); //error - invalid from Account
transfer(182792,543543,2000);
transfer(56444,182792,-100);//Just goes reverse
