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
  var eventVenue = document.getElementById('Venue').innerHTML.replace("Venue: "," ");
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
    console.log(getCookie("PIC"));
    setCookie("PIC", pic, 0.2);
    setCookie("ID", eventIDD, 0.2);
    setCookie("Name", eventNama, 0.2);
    setCookie("Date", eventDate, 0.2);
    setCookie("Time", eventTime, 0.2);
    setCookie("Venue", eventVenue, 0.2);
    setCookie("Currency", currencies, 0.2);
    setCookie("Pricing", bigArray, 0.2);
    setCookie("Yummy","Eatla",0.2);
    //Action : Insert Marketing
    console.log(getCookie("PIC"));
    console.log(getCookie("ID"));
    console.log(getCookie("Name"));
    console.log(getCookie("Date"));
    console.log(getCookie("Time"));
    console.log(getCookie("Venue"));
    console.log(getCookie("Currency"));
    console.log(getCookie("Pricing"));
    location.replace('https://questcorp.github.io/GoogleSheetLink-SalesForm/Marketing_Country/');
  }
  else{
    alert("Please re-submit the form again");
  }
}
