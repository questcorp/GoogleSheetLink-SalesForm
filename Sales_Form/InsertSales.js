function goHome(){
  location.replace("https://questcorp.github.io/GoogleSheetLink-SalesForm/MainMenu-Temp/");
}
function refresh(eventName) {
  var url = script_url+"?callback=ctrlq&eventName="+eventName+"&action=Confirm";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url ,
    method: "GET",
    dataType: "jsonp"
  });

}
// print the returned data
function ctrlq(e) {
console.log(e.result);
}

function insert_valu() {
  var pic =getCookie("bigName");
  var eventIDD = document.getElementById('EventID').value;
  var sel = document.getElementById('EName');
  var opt = sel.options[sel.selectedIndex];
  var eventNama = opt.value;
  var eventDate = document.getElementById('date').innerHTML.replace("Date: ","");
  var eventTime = document.getElementById('time').innerHTML.split(" ")[1];
  var eventVenue = document.getElementById('Venue').innerHTML.replace("Venue/Hosting Platform: "," ");
  var row = document.getElementById('Pricing').rows.length-1;
  var priceCombos = [];
  for(var k=0;k<row;k++){
    var priceCombo = [];
    priceCombo.push(thePackage[k]);
    priceCombo.push(thePricePerPax[k]);
    priceCombo.push(theQuantity[k]);
    priceCombo.push(thePrice[k]);
    priceCombos.push(priceCombo);
  }
  var showup = document.getElementById('ShowUP').value;
  var register = document.getElementById('Register').value;
  var currencies = document.getElementsByClassName('Curren')[0].innerHTML;

  if(eventIDD != ""){
    var url = script_url+"?callback=ctrlq&PIC="+pic+
    "&PIC="+pic+
    "&ID="+eventIDD+
    "&Name="+eventNama+
    "&Date="+eventDate+
    "&Time="+eventTime+
    "&Venue="+eventVenue+
    "&Show_Up="+showup+
    "&Register="+register+
    "&Currency="+currencies+
    "&Pricing="+priceCombos+
    "&action=insertSales";
    var request = jQuery.ajax({
      crossDomain: true,
      url: url ,
      method: "GET",
      dataType: "jsonp"
    });
    alert(
      "Person In Charge(PIC): "+pic+"\n"+
      "Event ID: "+eventIDD+"\n"+
      "Event Name: "+eventNama+"\n"+
      "Event Time: "+eventTime+"\n"+
      "Event Date: "+eventDate+"\n"+
      "Event Venue: "+eventVenue+"\n"+
      "Show Up Rate: "+showup+"\n"+
      "Registration Rate: "+register+"\n"
    );
    refresh(document.getElementById('EventID').value);
    goHome();
  }
  else{
    alert("Please re-submit the form again");
  }
}
