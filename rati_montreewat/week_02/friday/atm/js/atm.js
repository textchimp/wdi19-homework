// $(document).ready(function() {
//
//    $('.account').on('click', "[value = Deposit]", function() {
//     debugger;
//     var amount = $(this).find("input[type=text]").val();
//     var balance = $(this).find('.balance').text();
//     var newbalance = parseInt(amount)+parseInt(balance.slice(1,balance.length));
//     $(this).find('.balance').text(newbalance);
//   });
//
// });
//
// and
//
// $(document).ready(function() {
//
//   $('input[value=Deposit]').on('click', function() {
//    var account = $(this).closest(".account");
//    var amount = account.find("input[type=text]").val();
//    var balance = account.find('.balance').text();
//    var newbalance = parseInt(amount)+parseInt(balance.slice(1,balance.length));
//    account.find('.balance').text("$"+newbalance);
//  });
//
// });


// ??????? I can't see the differnce between the two codes above.
//          However, the first one doesn't work. In particular, when debugging the first one,
//         At line 5, the amount variavle is undefined, and I dont understand why?

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
