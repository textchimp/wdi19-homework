
$(document).ready(function() {

  var isbalancezero = function(str) {
    if ($(str).text() === '$0') {
      $(str).css({'background-color' : 'red'} );
    } else {
      $(str).css({'background-color' : '#E3E3E3'} );
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
    }  else {
       var newbalance = num_balance;
       alert("You do not have enough balance, so this withdraw is canceled")
    }
    account.find('.balance').text("$"+newbalance);
    isbalancezero(account.find('.balance'));
  });

});
