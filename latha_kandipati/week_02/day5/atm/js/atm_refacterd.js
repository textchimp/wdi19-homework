$(document).ready(function(){
  $('#checking-deposit').on('click',depositAmnt);
  $('#checking-withdraw').on('click',withDrawAmnt);
  $('#savings-deposit').on('click',depositAmnt);
  $('#savings-withdraw').on('click',withDrawAmnt);
  function depositAmnt(){
    var id = $(this).attr('id');
    var $inpAmount = +($('#'+id).siblings('input').first().val());
    if ( $.isNumeric($inpAmount) && ($inpAmount >= 0) ){
        var $currentBal = +($('#'+id).siblings('div').text().substring(1));
        $inpAmount += $currentBal;
        $('#'+id).siblings('div').text('$'+$inpAmount).removeClass('zero');
    }
    else {
      alert("Enter positive numbers only.");
    }
    $('#'+id).siblings('input').first().val("");
  }
  function withDrawAmnt(){
    var id = $(this).attr('id');
    var $inpAmount = +($('#'+id).siblings('input').first().val());
    var curBal = +($('#'+id).siblings('div').text().substring(1));
    var curNextBal = 0;
    var whatNext = "";
    if ( $('#'+id).parent().siblings('#savings').find('div').length ){
      curNextBal = +($('#'+id).parent().siblings('#savings').find('div').text().substring(1));
      whatNext = "#savings-balance";
    }
    else {
      curNextBal = +($('#'+id).parent().siblings('#checking').find('div').text().substring(1));
      whatNext = "#checking-balance";
    }
    if ($.isNumeric($inpAmount) && ($inpAmount <= (curBal+curNextBal))){
      if($inpAmount >= curBal){
        curNextBal = curNextBal - ($inpAmount - curBal);
        curBal = 0;
        $('#'+id).siblings('div').addClass('zero');
        $(whatNext).text('$'+curNextBal);
        if(curNextBal === 0){
          $(whatNext).addClass('zero');
        }
      }
      else{
          curBal = curBal - $inpAmount;
        }
        $('#'+id).siblings('div').text('$'+curBal);
    }
    else {
      alert("Enter only numbers. Or may be not enough funds.");
      console.log((curBal+curNextBal));
    }
    $('#'+id).siblings('input').first().val("");
  }
});
