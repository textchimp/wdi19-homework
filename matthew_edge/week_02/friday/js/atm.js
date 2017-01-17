// * Keep track of the checking and savings balances somewhere

var savingsBalance = 0;
var checkingBalance = 0;


var savingsDeposit = function () {
    $('#savings').css('background-color', '#6C9A74')
    var sbalance = $('#savings-balance').text().slice(1)
    var samount = $('#savings-amount').val();
    savingsBalance = (parseInt(sbalance) + parseFloat(samount));
    $('#savings-balance').text('$' + savingsBalance );
  };
var savingsWithdraw = function () {
    var sbalance = $('#savings-balance').text().slice(1)
    var samount = $('#savings-amount').val();
    if (samount > sbalance){
      alert("Inusfficent Funds!!!")
      return false;
    }//if
    savingsBalance = (parseInt(sbalance) - parseFloat(samount));
    if (savingsBalance === 0) {
      $('#savings').css('background-color', 'red');
    }
    $('#savings-balance').text('$' + savingsBalance );
  };

var checkingDeposit = function () {
    $('#checking').css('background-color', '#6C9A74')
    var cbalance = $('#checking-balance').text().slice(1)
    var camount = $('#checking-amount').val();
    checkingBalance = (parseInt(cbalance) + parseFloat(camount));
    $('#checking-balance').text('$' + checkingBalance );
  };

var checkingWithdraw = function () {
    var cbalance = $('#checking-balance').text().slice(1)
    var camount = $('#checking-amount').val();
    if (camount > cbalance){
      alert("Inusfficent Funds!!!")
      return false;
    }//if
    checkingBalance = (parseInt(cbalance) - parseFloat(camount));
    if (checkingBalance === 0) {
      $('#checking').css('background-color', 'red');
    }
    $('#checking-balance').text('$' + checkingBalance );
  };

  $('#savings-withdraw').on('click', savingsWithdraw)
  $('#savings-deposit').on('click', savingsDeposit);
  $('#checking-withdraw').on('click', checkingWithdraw)
  $('#checking-deposit').on('click', checkingDeposit);

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
