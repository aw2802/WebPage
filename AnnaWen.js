$(document).ready(function(){
    $('#toggleButton').click(function(){
    if($('#word').is(':visible')) {
      $('#word').hide();
    } else {
      $('#word').show();
    }
  });
});