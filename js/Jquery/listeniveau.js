$(document).ready(function(){
  $.post(
    "PHP/listeniveau.php",
    function(data){
      if(data!=""){
          $("#option-niveau").html(data);
      }
    }
  );
});