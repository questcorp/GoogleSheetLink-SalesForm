function CreateEvent() {
  var eventla =  document.getElementById('EventName').value;
  eventla = eventla.replace("&","_");
  var product = document.getElementById("Product");
  var venue = document.getElementById('HostVenue').value;
  var date = document.getElementById('ETime').value;
  var timeStart = document.getElementById('Date-Start').value;
  var timeEnd = document.getElementById('Date-End').value;
  var activities = product.options[product.selectedIndex].value;
  var user = getCookie('bigName');
  var priceArray = [];
  var currencyArray = [];
  var priceNameArray=[];
  for(var k=0;k<=count;k++){
    var currencyLine = document.getElementsByClassName('Currency')[k];
    currencyArray[k]= currencyLine.options[currencyLine.selectedIndex].value;
    priceNameArray[k] = document.getElementsByClassName('Package')[k].value;
    priceArray[k] = document.getElementsByClassName('Price')[k].value;
  }
  //alert(eventla);
  var url = script_url+"?callback=ctrlq&EventName="+eventla+
            "&Product="+activities+
            "&Venue="+venue+
            "&Date="+date+
            "&TimeStart="+timeStart+
            "&TimeEnd="+timeEnd+
            "&User="+user+
            "&Price="+priceArray+
            "&Currency="+currencyArray+
            "&Package="+priceNameArray+
            "&Count="+count+
            "&action=insertEvent";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url ,
    method: "GET",
    dataType: "jsonp"
  });

}
// print the returned data
function ctrlq(e) {
alert(e.result);
location.replace("https://questcorp.github.io/GoogleSheetLink-SalesForm/MainMenu/");
}

function getCookie(cname) {
var name = cname + "=";
var decodedCookie = decodeURIComponent(document.cookie);
var ca = decodedCookie.split(';');
for(var i = 0; i <ca.length; i++) {
 var c = ca[i];
 while (c.charAt(0) == ' ') {
   c = c.substring(1);
 }
 if (c.indexOf(name) == 0) {
   return c.substring(name.length, c.length);
 }
}
return "";
}
