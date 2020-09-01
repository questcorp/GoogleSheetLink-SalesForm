// print the returned data
function ctrlq(e) {
console.log(e.result);
}

function insert_valu() {
  var source = [];
  var pic =getCookie("bigName");
  var eventIDD = getCookie('ID');
  var sel = document.getElementById('EName');
  var opt = sel.options[sel.selectedIndex];
  var eventNama = opt.value;
  var eventDate = document.getElementById('date').innerHTML.replace("Date: ","");
  var eventTime = document.getElementById('time').innerHTML.split(" ")[1];
  var eventVenue = document.getElementById('Venue').innerHTML.replace("Venue/Hosting Platform: "," ");
  var countryCode = document.getElementsByClassName('negara');
  for(var k=0;k<document.getElementById('lastRow').value;k++){
    if(countryCode[k].value !=""){
      if(countryCode[k].value.length == 3){
        var call_to = "https://restcountries.eu/rest/v2/alpha/"+countryCode[k].value;
          $.getJSON(call_to, function(data) {
            var d = new Date();
            d.setTime(d.getTime() + (1*24*60*60*1000));
            var expires = "expires="+ d.toUTCString();
            document.cookie = "CountryNama" + "=" + data.name + ";" + expires + ";path=/";
          });
        if(document.getElementsByClassName('Pricez')[k].value == "0" && document.getElementsByClassName('Quantitz')[k].value == "0"){
          theQuantity[k] = 0;
          thePrice[k] = 0;
          theCurrency[k] = "MYR";
          theCPL[k] = 0.0;
        }
        source.push(getCookie("CountryNama"));
      }
      else{
        document.getElementsByClassName('negara')[k].parentNode.style.border = "2px solid #DC143C";
        alert("Please check the country code");
      }
    }

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
  console.log(bigArray);
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
    "&Pricing="+getCookie("Pricing")+
    "&Country="+bigArray+
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
    eraseCookie("PIC");
    eraseCookie("Name");
    eraseCookie("Date");
    eraseCookie("Time");
    eraseCookie("Venue");
    eraseCookie("Currency");
    eraseCookie("Pricing");
    eraseCookie("ID");
    eraseCookie("Yummy");
    eraseCookie("CountryNama");

    location.replace('https://questcorp.github.io/GoogleSheetLink-SalesForm/MainMenu/');
  }
  else{
    alert("Please re-submit the form again");
  }
}
function eraseCookie(name) {
  document.cookie = name + "=;expires=" + new Date(0).toUTCString()+";path=/;";
}
