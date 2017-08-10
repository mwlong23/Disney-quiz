$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
    var answer1 = $("#question1").val();
    var answer2 = $("#question2").val();
    var answer3 = $("#question3").val();

    if(answer2 === "Under the sea" && answer3 === "Yes" ){
      $("#result7").show();
    } else if (answer2 === "Under the sea" && answer3 === "No"){
      $("#result8").show();
    } else {$("#result6").show();
  }

  });
});
