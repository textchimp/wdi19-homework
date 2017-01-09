$(document).ready(function(){
  $('#checking-deposit').on('click',depositAmnt);
  $('#checking-withdraw').on('click',withDrawAmnt);
  $('#savings-deposit').on('click',depositSavAmnt);
  $('#savings-withdraw').on('click',withDrawSavAmnt);
  function depositAmnt(){
      var $inpAmount = +($('#checking-amount').val());
      if ( $.isNumeric($inpAmount) && ($inpAmount > 0) ){
          var $currentChkBal = +($('#checking-balance').text().substring(1));
          $inpAmount += $currentChkBal;
          $('#checking-balance').text('$'+$inpAmount).removeClass('zero');
      }
      else {
        alert("Enter positive numbers only.");
      }
      $('#checking-amount').val("");
  }
  function withDrawAmnt(){
    var $inpAmount = +($('#checking-amount').val());
    var updateChkAmnt = 0;
    var updateSavAmnt = 0;
    var amntInChkAccnt = 0;
    var amntInSavAccnt = 0;
    $amntInChkAccnt = +($('#checking-balance').text().substring(1));
    $amntInSavAccnt = +($('#savings-balance').text().substring(1));
    if ( $.isNumeric($inpAmount) && ( $inpAmount <=  ($amntInChkAccnt + $amntInSavAccnt))){
        if( $inpAmount >  $amntInChkAccnt){
          updateChkAmnt = 0;
          updateSavAmnt = +($amntInSavAccnt) - ($inpAmount - (($amntInChkAccnt)));
          $('#savings-balance').text('$'+updateSavAmnt);
          if(updateSavAmnt === 0){
            $('#savings-balance').addClass("zero");
          }
        }
        else {
          updateChkAmnt = $amntInChkAccnt - $inpAmount;
        }
        if (updateChkAmnt === 0){
          $('#checking-balance').addClass("zero");
        }
        $('#checking-balance').text('$'+updateChkAmnt);
    }
    else {
      alert("Enter only numbers. Or may be not enough funds.");
      console.log(($amntInChkAccnt + $amntInSavAccnt));
    }
    $('#checking-amount').val("");
  }
  function depositSavAmnt(){
      var $inpAmount = +($('#savings-amount').val());
      if ( $.isNumeric($inpAmount) && ( $inpAmount > 0 )){
          var $currentChkBal = +($('#savings-balance').text().substring(1));
          $inpAmount += $currentChkBal;
          $('#savings-balance').text('$'+$inpAmount).removeClass('zero');
        }
      else {
        alert("Enter positive numbers only.");
      }
      $('#savings-amount').val("");
  }
  function withDrawSavAmnt(){
    var $inpAmount = +($('#savings-amount').val());
    var updateChkAmnt = 0;
    var updateSavAmnt = 0;
    var amntInChkAccnt = 0;
    var amntInSavAccnt = 0;
    $amntInChkAccnt = +($('#checking-balance').text().substring(1));
    $amntInSavAccnt = +($('#savings-balance').text().substring(1));
    if ( $.isNumeric($inpAmount)  && ( $inpAmount <=  +($amntInChkAccnt + $amntInSavAccnt))){
        if( $inpAmount >  $amntInSavAccnt){
          updateSavAmnt = 0;
          updateChkAmnt = +($amntInChkAccnt) - ($inpAmount - (($amntInSavAccnt)));
          if(updateChkAmnt === 0){
            $('#checking-balance').addClass("zero");
          }
          $('#checking-balance').text('$'+updateChkAmnt);
        }
        else {
          updateSavAmnt = $amntInSavAccnt - $inpAmount;
        }
        if (updateSavAmnt === 0){
          $('#savings-balance').addClass("zero");
        }
        $('#savings-balance').text('$'+updateSavAmnt);
    }
    else {
      alert("Enter only numbers or Not enough funds..");
      console.log(+($amntInChkAccnt + $amntInSavAccnt));
    }
    $('#savings-amount').val("");
  }
});
