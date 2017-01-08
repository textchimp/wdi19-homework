// Keep track of the checking and savings balances somewhere
// * Add functionality so that a user can deposit money into one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Add functionality so that a user can withdraw money from one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
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

var bank = {
  checking: { balance: 0, balanceSelector: '#checking-balance' },
  savings: { balance: 0, balanceSelector: '#savings-balance' }
};

var checkBalanceColors = function() {
  if (bank.checking.balance === 0) {
    $('#checking-balance').addClass('warning');
  }
  if (bank.savings.balance === 0) {
    $('#savings-balance').addClass('warning');
  }
  if (bank.checking.balance !== 0) {
    $('#checking-balance').removeClass('warning');
  }
  if (bank.savings.balance !== 0) {
    $('#savings-balance').removeClass('warning');
  }
}

var moveMoney = function(account, amount, type) {
  if (type === "withdraw" && !(amount > account.balance)) {
    account.balance = account.balance -= Number(amount);
  } else if (type === "deposit") {
    account.balance = account.balance += Number(amount);
  }
  $(account.balanceSelector).html('$' + account.balance);
}

$(document).ready(function() {
  checkBalanceColors();
  $('#checking-deposit').on('click', function() {
    moveMoney(bank.checking, $('#checking-amount').val(), 'deposit');
    checkBalanceColors();
  });
  $('#checking-withdraw').on('click', function() {
    moveMoney(bank.checking, $('#checking-amount').val(), 'withdraw');
    checkBalanceColors();
  });
  $('#savings-deposit').on('click', function() {
    moveMoney(bank.savings, $('#savings-amount').val(), 'deposit');
    checkBalanceColors();
  });
  $('#savings-withdraw').on('click', function() {
    moveMoney(bank.savings, $('#savings-amount').val(), 'withdraw');
    checkBalanceColors();
  });
});
