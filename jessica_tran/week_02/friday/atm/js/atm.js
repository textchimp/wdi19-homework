
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
var withdraw = function (account){
  var $inputNum= parseFloat($(this).closest('.account').find('input').val());
  if ($inputNum > account) {
    console.log('not enough money');
    var overdraft = $inputNum - account;
      savingsBalance -= overdraft;
      account=0;
    }else if ($inputNum <= account){
    account -= $inputNum;
  }
  $('#savings-balance').text('$' + savingsBalance);
  $('#checking-balance').text('$' + checkingBalance);
  red();
}

// //WITHDRAW: savings account
// var withdrawSavings = function(){
//   if ($('#savings-amount').val()>= savingsBalance) {
//     // console.log("Not enough money in the checking account")
//     var overdraft = $('#savings-amount').val() - savingsBalance;
//     if(overdraft >= checkingBalance){
//       console.log('Not enough money in savings and checking account.');
//     }else {
//       checkingBalance-= overdraft;
//       $('#checking-balance').text('$' + checkingBalance);
//       savingsBalance=0;
//       $('#savings-balance').text('$' + savingsBalance);
//     }
//   } else {
//   var withdrawAmount = parseFloat($('#savings-amount').val());
//   savingsBalance -= withdrawAmount;
//   $('#savings-balance').text('$' + savingsBalance);
//
//   }
//   red();
// }


$('#checking-deposit').on('click', depositChecking);
$('#checking-withdraw').on('click', withdraw(checkingBalance) );

$('#savings-deposit').on('click', depositSavings);
$('#savings-withdraw').on('click', withdraw(savingsBalance));
