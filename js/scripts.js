//Business Logic



//UI
$(document).ready(function(){
  $('button').click(function(){
    var answerOne = $(this).attr('id');
    if (answerOne === 'true-one') {
      $("#mainDiv").hide();
      $("#success-one").show();

    } else {
      $("#riddlequestion1").hide();
      $("#wrong-one").show();
    }
$("#useHerb").click(function(){
  $("#wrong-one").hide();
  $("#mainDiv").show();
});

event.preventDefault();
  });

});
