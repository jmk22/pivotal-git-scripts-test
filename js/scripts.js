$(document).ready(function(){

  var words =["this", "is", "an", "array"];
  var count = 0;


  $(".clicky").click(function(){
    var index = count % 4;
    $(".array-display").append(words[index] + " ");
    count++;
  });

  $("form#webpage").submit(function(event){
    var selectedPage = $("#webpage-select").val();
    alert(selectedPage);

    event.preventDefault();
  });


});
