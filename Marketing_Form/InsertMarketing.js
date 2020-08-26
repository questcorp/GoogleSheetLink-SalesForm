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
  for(var k=0;k<count;k++){
    source.push(document.getElementsByClassName('Sources')[k].value);
  }
  var bigArray = [];
  source.forEach((item, i) => {
    var array = [];
    array.push(item);
    array.push(theQuantity[i]);
    array.push(thePrice[i]);
    array.push(theCPL[i]);
    bigArray.push(array);
  });
  var currencies = theCurrency[0];
  if(eventIDD != ""){
    var url = script_url+"?callback=ctrlq&PIC="+pic+
    "&PIC="+pic+
    "&ID="+eventIDD+
    "&Name="+eventNama+
    "&Date="+eventDate+
    "&Time="+eventTime+
    "&Venue="+eventVenue+
    "&Currency="+currencies+
    "&Pricing="+bigArray+
    "&action=insertMarketing";
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
      "Event Venue: "+eventVenue+"\n"
    );
    location.replace('https://questcorp.github.io/GoogleSheetLink-SalesForm/MainMenu-Temp/');
  }
  else{
    alert("Please re-submit the form again");
  }
}
