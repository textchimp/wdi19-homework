
// * Keep track of the checking and savings balances somewhere

var checkingBalance = 0;
var savingsBalance = 0;

// * Add functionality so that a user can deposit money into one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page so a user can see the change.

var red= function(){

  if(checkingBalance === 0){
    $('#checking').css('background-color','red');
  } else {
    $('#checking').css('background-color','#6C9A74');
}
  if (savingsBalance===0){
    $('#savings').css({'background-color':'red'})
  } else {
    $('#savings').css({'background-color':'#6C9A74'});
  }
}

// DEPOSIT : checkings account
var depositChecking = function(){
  var depositAmount = parseFloat($('#checking-amount').val());
  checkingBalance += depositAmount;
  $('#checking-balance').text("$" + checkingBalance);
  red();
}

//DEPOSIT: savings account
var depositSavings = function(){
  var depositAmount = parseFloat($('#savings-amount').val());
  savingsBalance += depositAmount;
  $('#savings-balance').text("$" + savingsBalance);
  red();
}

// WITHDRAW: checkings account
var withdrawChecking = function (){
  if ($('#checking-amount').val()> checkingBalance) {
    // console.log("Not enough money in the checking account")
    var overdraft = $('#checking-amount').val() - checkingBalance;
    if(overdraft>savingsBalance){
      console.log('Not enough money in savings.')
    }else {
      savingsBalance-= overdraft;
      $('#savings-balance').text('$' + savingsBalance);
      checkingBalance=0;
      $('#checking-balance').text('$' + checkingBalance);
    }
  }else{
    var withdrawAmount = parseFloat($('#checking-amount').val());
    checkingBalance -= withdrawAmount;
    $('#checking-balance').text('$' + checkingBalance);
  }
  red();
}

//WITHDRAW: savings account
var withdrawSavings = function(){
  if ($('#savings-amount').val()> savingsBalance) {
    // console.log("Not enough money in the checking account")
    var overdraft = $('#savings-amount').val() - savingsBalance;
    if(overdraft>checkingBalance){
      console.log('Not enough money in checking.')
    }else {
      checkingBalance-= overdraft;
      $('#checking-balance').text('$' + checkingBalance);
      savingsBalance=0;
      $('#savings-balance').text('$' + savingsBalance);
    }
  } else {
  var withdrawAmount = parseFloat($('#savings-amount').val());
  savingsBalance -= withdrawAmount;
  $('#savings-balance').text('$' + savingsBalance);

  }
  red();
}


$('#checking-deposit').on('click', depositChecking);
$('#checking-withdraw').on('click', withdrawChecking);

$('#savings-deposit').on('click', depositSavings);
$('#savings-withdraw').on('click', withdrawSavings);


// * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.


// * When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account.
// * What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.
// * Are there ways to refactor your code to make it DRYer?
