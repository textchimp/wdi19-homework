$(document).ready(function() {
  var Bank = {checking: 0, savings: 0, total: 0};

  var deposit = function(amount, account) {
    Bank[account] += parseInt(amount);
    Bank.total += parseInt(amount);
    $('#' + account + '-balance').text('$' + Bank[account]);
    if (Bank[account] > 0) {
      $('#' + account + '-balance').css('background', '#E3E3E3');
    } else {
      $('#' + account + '-balance').css('background', 'red');
    }
  }

  var withdraw = function(amount, account) {
    var other;
    account === "checking" ? other = "savings": other = "checking";
    if ($('#' + account + '-amount').val() <= Bank.total) {
      if ($('#' + account + '-amount').val() > Bank[account]) {
        deposit((parseInt($('#' + account + '-amount').val()) - parseInt(Bank[account])) * -1, other);
        deposit(parseInt(Bank[account]) * -1, account);
      } else {
        deposit(parseInt($('#' + account + '-amount').val()) * -1, account);
      }
    }
  }

  $('#checking-deposit').on('click', function() {
    deposit($('#checking-amount').val(), 'checking');
  });
  $('#savings-deposit').on('click', function() {
    deposit($('#savings-amount').val(), 'savings');
  });
  $('#checking-withdraw').on('click', function() {
    withdraw($('#checking-amount').val(), 'checking');
  });
  $('#savings-withdraw').on('click', function() {
    withdraw($('#savings-amount').val(), 'savings');
  });
})
