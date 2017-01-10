$(document).ready(function(){
  $('#checking-deposit').on('click',depositCheck);
  $('#checking-withdraw').on('click',withDrawCheck);
  $('#savings-deposit').on('click',depositSav);
  $('#savings-withdraw').on('click',withDrawSav);
  var Bank = {checking: 0, savings: 0};
  Bank.checking = +($('#checking-balance').text().substring(1));
  Bank.savings = +($('#savings-balance').text().substring(1));
  function depositCheck() {
    var $inpAmount = +($('#checking-amount').val());
    if ( $.isNumeric($inpAmount) && ($inpAmount > 0) ){
      Bank.checking += $inpAmount;
      $('#checking-balance').text('$'+Bank.checking).removeClass('zero');
    }
    else {
      alert("Invalid input. Enter positive numbers only.");
    }
    $('#checking-amount').val("");
  }
  function withDrawCheck(){
    var $inpAmount = +($('#checking-amount').val());
    if( $.isNumeric($inpAmount) && ($inpAmount <=  +(Bank.checking+Bank.savings)) ){
      if( $inpAmount >  Bank.checking ){
        Bank.savings = Bank.savings - ($inpAmount - Bank.checking);
        Bank.checking = 0;
        if(Bank.savings === 0){
          $('#savings-balance').addClass('zero');
        }
        $('#savings-balance').text('$'+Bank.savings);
        $('#checking-balance').text('$'+Bank.checking).addClass('zero');
      }
      else {
        Bank.checking = Bank.checking - $inpAmount;
        if(Bank.checking === 0) {
          $('#checking-balance').addClass('zero');
        }
        $('#checking-balance').text('$'+Bank.checking);
      }
    }
    $('#checking-amount').val("");
  }
  function depositSav() {
    var $inpAmount = +($('#savings-amount').val());
    if ( $.isNumeric($inpAmount) && ($inpAmount > 0) ){
      Bank.savings += $inpAmount;
      $('#savings-balance').text('$'+Bank.savings).removeClass('zero');
    }
    else {
      alert("Invalid input. Enter positive numbers only.");
    }
    $('#savings-amount').val("");
  }
  function withDrawSav(){
    var $inpAmount = +($('#savings-amount').val());
    if( $.isNumeric($inpAmount) && ($inpAmount <=  +(Bank.checking+Bank.savings)) ){
      if( $inpAmount >  Bank.savings ){
        Bank.checking = Bank.checking - ($inpAmount - Bank.savings);
        Bank.savings = 0;
        if(Bank.checking === 0){
          $('#checking-balance').addClass('zero');
        }
        $('#checking-balance').text('$'+Bank.checking);
        $('#savings-balance').text('$'+Bank.savings).addClass('zero');
      }
      else {
        Bank.savings = Bank.savings - $inpAmount;
        if(Bank.savings === 0) {
          $('#savings-balance').addClass('zero');
        }
        $('#savings-balance').text('$'+Bank.savings);
      }
    }
    $('#savings-amount').val("");
  }
});
