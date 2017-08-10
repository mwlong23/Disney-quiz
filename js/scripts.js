$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
    var answer1 = $("#question1").val();
    var answer2 = $("#question2").val();
    var answer3 = $("#question3").val();

    if(answer2 === "Under the sea" && answer3 === "Yes" ){
      $("#result7").show();
    } else if (answer1 === "Fish" && answer3 === "No"  ){
      $("#result8").show();
    // } else if(answer2==="In the forest" && answer3==="Yes"){
    //   $("#result6").show();
    // } else if(answer2==="In the forest" && answer3 ==="No"){
    //   $("#result5").show();
    // } else if(answer2 === "In the suburbs"){
    //   $("#result4").show();
    // } else if (answer1 === "Beast" && answer3 === "Yes"){
    //   $("#result3").show();
    // } else if (answer2 === "In the desert" && qustion3 === "Yes"){
    //   $("#result2").show();
    } else{
      $("#result1").show();
    }

  });
});
