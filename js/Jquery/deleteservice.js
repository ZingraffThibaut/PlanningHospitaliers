function Deleteserv(nb){
    var r = confirm("Confirmer la suppresion");
    $.post(
      "PHP/deleteservice.php",
      {
        Id_service: nb
      },
      function(data){
        if (data == "ok"){
          window.location.href ='service.html';
        } else {
          $("#ErrorIdentification").html("<div class='alert alert-danger' role='alert'>Erreur dans la suppresion</div>");
        }
      }
    );

    return false;
  };
//https://infodb.iutmetz.univ-lorraine.fr/~zingraff7u/Cordova/more_com.php
