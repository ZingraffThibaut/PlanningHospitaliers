$(document).ready(function(){
  $.post(
    "https://infodb.iutmetz.univ-lorraine.fr/~nunge1u/LP/PlanningHospitaliers/PHP/nom.php",
    function(data){
      if(data!=""){
          $("#profil").html(data);
      }
    }
  );
});
