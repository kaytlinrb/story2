//Business Logic



//UI
$(document).ready(function(){


  ////CHAPTER ONE/////

$("#riddleAttemptButton1").click(function(){
  $("#chapterOne").hide();
  $("#riddleOne").show();
)};

/////RIDDLE ONE/////

  $('riddle1button').click(function(){
    var answerOne = $(this).attr('class');
    if (answerOne === 'btnTrue') {
      $("#chapterOne").hide();
      $("#riddleOneSuccess").show();

    } else {
      $("#chapterOne").hide();
      $("#riddleOneSuccess").show();
    }

$("#proceedButton2").click(function(){
  $("#riddleTwoFail").hide();
  $("#chapterOne").show();
});

event.preventDefault();
  });

});
