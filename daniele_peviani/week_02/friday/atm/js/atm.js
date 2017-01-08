$('document').ready(function() {

  var setTransactionParameters = function() {
    var transaction = {
      amount: +($(this).siblings('input[type="number"]').val()),
      $balanceDiv: $(this).closest('.account').find('.balance'),
      balance : +($(this).closest('.account').find('.balance').text().replace(/[^0-9\.]+/g,"")), //Get digit and . only
      type: $(this).attr('value'),
      account: $(this).closest('.account').attr('id')
    }

    if ("Deposit" === transaction.type) {
      deposit(transaction)
    } else {
      var $accounts = $(this).closest('#content').children('.account'); // Get all the .account
      $accounts.each(function () { // Loop through them
        var $account = $(this);
        // If not the same as the one I'm doing the transaction on, I use this as overdraft
        if (transaction.account !== $account.attr('id')) {
          transaction.overdraft = +($account.find('.balance').text().replace(/[^0-9\.]+/g,""));
          transaction.$overdraftDiv = $account.find('.balance');
        }
      });
      withdraw(transaction)
    }
    $(this).siblings('input[type="number"]').val(''); // Reset the input field
  }

  var updateBalance = function($div, balance) {
    $div.text('$' + balance);
    if (0 === balance){
      $div.addClass('zero');
    } else {
      $div.removeClass('zero');
    }
  }

  var deposit = function(transInfo) {
    var newBalance = transInfo.balance + transInfo.amount;
    updateBalance(transInfo.$balanceDiv, newBalance);
  }

  var withdraw = function(transInfo) {
    if (transInfo.balance >= transInfo.amount) {
      var newBalance = transInfo.balance - transInfo.amount;
      updateBalance(transInfo.$balanceDiv, newBalance);
    } else if ((transInfo.balance + transInfo.overdraft) >= transInfo.amount) {
      // overdraft, only if enough funds in both accounts
      updateBalance(transInfo.$balanceDiv, 0);
      transInfo.amount -= transInfo.balance;
      updateBalance(transInfo.$overdraftDiv, (transInfo.overdraft - transInfo.amount));
    }
  }

  $('#checking-deposit').on('click', setTransactionParameters );
  $('#savings-deposit').on('click', setTransactionParameters );
  $('#checking-withdraw').on('click', setTransactionParameters );
  $('#savings-withdraw').on('click', setTransactionParameters );
});
