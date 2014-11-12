$(document).ready(function(){
  $('#toggleButton').click(function(){
    $('#resumetext').toggle();
    
    if($('#resumetext').is(':visible')) {
      $(this).val('Hide');
    } else {
      $(this).val('Show');
    }
  });
});