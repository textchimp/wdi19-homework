$('document').ready(function() {

  var setTransactionParameters = function() {
    var transaction = {
      amount: +($(this).siblings('.options').find('input').val()),
      $balanceDiv: $(this).siblings('.account.selected').find('.balance'),
      balance : +($(this).siblings('.account.selected').find('.balance').text().replace(/[^0-9\.]+/g,"")), //Get digit and . only
      type: $(this).siblings('.options').find('.active').text(),
      account: $(this).siblings('.account.selected').find('h2').text()
    }

    if ("Deposit" === transaction.type) {
      deposit(transaction)
    } else {
      var $accounts = $(this).siblings('.account'); // Get all the .account
      $accounts.each(function () { // Loop through them
        var $account = $(this);
        // If not the same as the one I'm doing the transaction on, I use this as overdraft
        if (transaction.account !== $account.find('h2').text()) {
          transaction.overdraft = +($account.find('.balance').text().replace(/[^0-9\.]+/g,""));
          transaction.$overdraftDiv = $account.find('.balance');
        }
      });
      withdraw(transaction);
    }
    $(this).siblings('.options').find('input').val('0'); // Reset the input field
  }

  var updateBalance = function($div, balance) {
    $div.text('$' + balance);
    if (0 === balance){
      $div.parent().addClass('zero');
    } else {
      $div.parent().removeClass('zero');
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

  // var formatCurrency = function() {
  //   var currency = $(this).formatCurrency();
  //   $(this).val(currency.val());
  // }

  $('#executeTransfer').on('click', setTransactionParameters );


  $('.account').on('click', function() {
    if (!$(this).hasClass('selected')) {
      $('.account').toggleClass('selected')
    };
  } );

  $('.transType button').on('click', function() {
    if (!$(this).hasClass('active')) {
      $('.transType button').toggleClass('active');
    }
  } );

  $('.amount input').on('focus', function() {
    $(this).select();
  } );

});
