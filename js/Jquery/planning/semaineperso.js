$(document).ready(function(){
  $.post( "PHP/nom.php", function(data) {
    $("#nomService").html(data);
  });
  var date = new Date();
  var affi = "";
  var el = affi.concat(date.getFullYear(),"-",date.getMonth()+1,"-",date.getDate());

  $.post(
    "PHP/planning/Semaineperso.php",
    {
      date : el
    },
    function(data){
      $("#tab").html(data);
      var array = document.getElementById("tableau").rows;
      var longeur = array.length;
      var i=1;
      while(i<longeur){
        for(y=0;y<=7;y++){
          if(array[i].cells.item(y)){
            switch (array[i].cells.item(y).innerHTML){
              case "T":
              array[i].cells.item(y).className="bg-success text-white";
              break;
              case "RC":
              array[i].cells.item(y).className="bg-warning text-white";
              break;
              case "RH":
              array[i].cells.item(y).className="bg-danger text-white";
              break;
            }
          }
        }
        i++;
      }
    }
  );
});


function Planningchar(){
  Id_personne = document.getElementById("nomService").innerHTML;
  var date = new Date(document.getElementById("Date").value);
  var affi = "";
  var el = affi.concat(date.getFullYear(),"-",date.getMonth()+1,"-",date.getDate());
  $.post(
    "PHP/planning/Semaineperso.php",
    {
      Id_personne : Id_personne,
      date : el
    },
    function(data){
      $("#tab").html(data);
      var array = document.getElementById("tableau").rows;
      var longeur = array.length;
      var i=1;
      while(i<longeur){
        for(y=0;y<=7;y++){
          if(array[i].cells.item(y)){
            switch (array[i].cells.item(y).innerHTML){
              case "T":
              array[i].cells.item(y).className="bg-success text-white";
              break;
              case "RC":
              array[i].cells.item(y).className="bg-warning text-white";
              break;
              case "RH":
              array[i].cells.item(y).className="bg-danger text-white";
              break;
            }
          }
        }
        i++;
      }
    }
  );
};




function daynow(){
  var date = new Date();
  var affi= "";
  document.getElementById('Date').value = affi.concat(date.getFullYear(),"-",date.getMonth()+1,"-",date.getDate());
};
