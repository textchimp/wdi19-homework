$(document).ready(function() {

  var isbalancezero = function(str) {
    if ($(str).text() === '$0') {
      $(str).css({'background-color' : 'red'} );
    } else {
      $(str).css({'background-color' : '#E3E3E3'} );
    }
  }

  var overdraft = function(account, amount) {
    var account_check = $("#checking-balance")
    var balance_check = account_check.text();
    var account_save = $("#savings-balance")
    var balance_save = account_save.text();
    var num_balance_check = parseInt(balance_check.slice(1,balance_check.length));
    var num_balance_save = parseInt(balance_save.slice(1,balance_save.length));
    if (ischeck(account) && (amount <= num_balance_save + num_balance_check) ) {

      // withdraw = balance_check
      account_check.text("$"+0);
      // balance_check = 0;
      account_save.text("$"+(num_balance_save-num_balance_check));
      // num_balance_save = balance_save - balance_check;
    }
  }

  var ischeck = function(account) {
    console.log(account.attr('id'));
    if (account.attr('id') === "checking") {
      return true;
    } else {
      return false;
    }
  }

  var isoverdraft = function(account, amount) {
    var account_check = $("#checking-balance")
    var balance_check = account_check.text();
    var account_save = $("#savings-balance")
    var balance_save = account_save.text();
    var num_balance_check = parseInt(balance_check.slice(1,balance_check.length));
    var num_balance_save = parseInt(balance_save.slice(1,balance_save.length));
    if ( ischeck(account) && (amount <= num_balance_save + num_balance_check) ) {
    return true;
  } else {
    return false;
  }
}



   isbalancezero('#checking-balance');
   isbalancezero('#savings-balance');


   $('input[value=Deposit]').on('click', function() {
    // debugger;
    var account = $(this).closest(".account");
    var amount = account.find("input[type=text]").val();
    var balance = account.find('.balance').text();
    var newbalance = parseInt(amount)+parseInt(balance.slice(1,balance.length));
    account.find('.balance').text("$"+newbalance);
    isbalancezero(account.find('.balance'));
  });

   $('input[value=Withdraw]').on('click', function() {
    var account = $(this).closest(".account");
    var amount = account.find("input[type=text]").val();
    var num_amount = parseInt(amount)
    var balance = account.find('.balance').text();
    var num_balance = parseInt(balance.slice(1,balance.length));

    if (amount <= num_balance) {
      var newbalance = num_balance-num_amount;
      account.find('.balance').text("$"+newbalance);
      isbalancezero(account.find('.balance'));
    } else {
       if (isoverdraft(account, num_amount)) {
       overdraft(account, num_amount);
       isbalancezero(account.find('.balance'))

    } else {
       var newbalance = num_balance;
       alert("You do not have enough balance, so this withdraw is canceled")
       account.find('.balance').text("$"+newbalance);
       isbalancezero(account.find('.balance'));
    }
    }

  });

});
