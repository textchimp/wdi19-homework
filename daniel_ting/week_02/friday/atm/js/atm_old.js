var Bank = {checking: 0, savings: 0, total: 0};

var deposit = function(amount, account) {
  Bank[account] += parseInt($('#' + account + '-amount').val());
  Bank.total += parseInt($('#' + account + '-amount').val());
  if (Bank[account] > 0) {
    $('#' + account + '-balance').css('background', '#E3E3E3');
    $('#' + account + '-balance').text('$' + Bank[account]);
  }
}

var _withdraw = function(amount, account) {
  if (amount <= Bank[account]) {
    Bank[account] -= parseInt(amount);
    Bank.total -= parseInt(amount);
    $('#' + account + '-balance').text('$' + Bank[account]);
    if (Bank[account] === 0) {
      $('#' + account + '-balance').css('background', 'red');
    }
  }
}

var withdraw = function(amount, account) {
  var other;
  account === "checking" ? other = "savings": other = "checking";
  if ($('#' + account + '-amount').val() <= Bank.total) {
    if ($('#' + account + '-amount').val() > Bank[account]) {
      _withdraw(parseInt($('#' + account + '-amount').val()) - parseInt(Bank[account]), other);
      _withdraw(Bank[account], account);
    } else {
      _withdraw($('#' + account + '-amount').val(), account);
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
