$(document).ready(function(){
  $.post(
    "https://infodb.iutmetz.univ-lorraine.fr/~nunge1u/LP/PlanningHospitaliers/PHP/listeniveau.php",
    function(data){
      if(data!=""){
          $("#option-niveau").html(data);
      }
    }
  );
});
