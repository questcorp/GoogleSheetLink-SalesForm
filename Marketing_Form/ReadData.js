var script_url = "https://script.google.com/macros/s/AKfycbyaTRcnKWNczR6-0QWXAQmgsAbTGFiqxXF2SPQWXXLxbprZGUM/exec";
  var source = ['Facebook','KC See','EDM'];
function read_value() {
  knowWhoYouAre();
  fetchCurrency();

var url = script_url+"?action=readEvent";
//alert(url);
$.getJSON(url, function (json) {

  var eventz = [];
  var index = [];

  for (var i = 0; i < json.records.length; i++) {
    //alert(typeof json.records[i].SalesReport);
    if(!json.records[i].SalesReport){
      var dating = new Date(json.records[i].Date);
      var today = new Date();
      var duration = dating - today;
      //alert(duration);
      if(duration > 0){
        eventz.push(json.records[i].Event);
        index.push(i);
      }
    }
  }
  for(var k=0;k<index.length;k++){
    var opt1 =  document.createElement('option');
    opt1.value = eventz[k];
    opt1.innerHTML = eventz[k];
    document.getElementById('EName').appendChild(opt1);
  }
  document.getElementById('EventSeries').value = eventz.join();

  });
}
function createHeader(){
  document.getElementById('TotalRegistration').innerHTML = "Total Registration: 0";
  document.getElementById('TotalAmount').innerHTML = "(Amount Spent: MYR 0.00)";
  document.getElementById('Step1').style.display = "none";
  document.getElementById('Step4').style.display = "none";
  document.getElementById('Step5').style.display = "none";
  document.getElementById('Step2').style.display = "block";
  document.getElementById('Add').style.display = "block";
  document.getElementById('TotalRegistration').style.display = "block";
  document.getElementById('TotalAmount').style.display = "block";
  document.getElementById('Conversion').style.display = "block";
  thePrice = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  theCurrency = ["MYR","MYR","MYR","MYR","MYR","MYR","MYR","MYR","MYR","MYR"];
  theQuantity = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,,0,0,0,0,0,0,0,0];
  theCPL = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,,0,0,0,0,0,0,0,0];
  document.getElementById('lastRow').value = source.length;
  var pricingTable = document.getElementById('Marketing');
  pricingTable.style.display = "block";
  pricingTable.innerHTML = "";
  var tr = pricingTable.insertRow(-1);
  var header = document.createElement('th');
  var headerText = document.createTextNode("Source");
  header.appendChild(headerText);
  tr.appendChild(header);
  var header = document.createElement('th');
  var headerText = document.createTextNode("Quantity");
  header.appendChild(headerText);
  tr.appendChild(header);
  var header = document.createElement('th');
  var headerText = document.createTextNode("Amount Spent");
  header.colSpan = "2";
  header.appendChild(headerText);
  tr.appendChild(header);
  var header = document.createElement('th');
  var headerText = document.createTextNode("CPL");
  header.appendChild(headerText);
  tr.appendChild(header);
  source.forEach((item, i) => {
    var table = document.getElementById('Marketing');
    var tr = table.insertRow(-1);
    var tabCell = tr.insertCell(-1);
    tabCell.innerHTML = item;
    var tabCell = tr.insertCell(-1);
    tabCell.style.width = "10%";
    var input = document.createElement('input');
    input.value = 0;
    input.style.width="90%";
    input.className = "Quantitz";
    input.onclick = function(){
      this.parentNode.style.border = "2px solid #1a73e8";
    }
    input.onchange = function() {
      calculationCPL(this);
    };
    input.type = "number";
    tabCell.appendChild(input);
    var tabCell = tr.insertCell(-1);
    tabCell.style.padding = "0";
    tabCell.style.margin = "0";
    tabCell.style.width = "20%";
    var selecting = document.createElement('select');
    selecting.className = "Type";
    selecting.style.border="none";
    selecting.style.width="100%";
    selecting.style.marginTop = "0px";
    selecting.style.marginLeft = "0px";
    selecting.style.paddingLeft = "5px";
    var options = document.createElement('option');
    options.value ="MYR";
    options.innerHTML = "MYR";
    selecting.appendChild(options);
    var options = document.createElement('option');
    options.value ="USD";
    options.innerHTML = "USD";
    selecting.onchange = function() {
      currencyChange = true;
      calculationCPL(this);
    };
    selecting.appendChild(options);
    tabCell.appendChild(selecting);
    var tabCell = tr.insertCell(-1);
    tabCell.style.width = "20%";
    var input = document.createElement('input');
    input.value = 0;
    input.onclick = function(){
      this.parentNode.style.border = "2px solid #1a73e8";
    }
    input.onchange = function() {
      calculationCPL(this);
    };
    input.type = "number";
    input.style.width="90%";
    tabCell.appendChild(input);
    input.className = "Pricez";
    var tabCell = tr.insertCell(-1);
    tabCell.style.width = "20%";
    tabCell.className = "CPL";
  });
}

function provideDetails(){
  var url = script_url+"?action=readEvent";
  var evento = document.getElementById('EventSeries').value.split(",");
  document.getElementById('Marketing').innerHTML = "";
  createHeader();
  $.getJSON(url, function (json) {
    var sel = document.getElementById('EName');
    var opt = sel.options[sel.selectedIndex];
    evento.forEach((item, i) => {
      if(opt.value == item){
        document.getElementById('date').innerHTML = "Date: "+new Date(json.records[i].Date).toDateString();
        document.getElementById('time').innerHTML = "Time: "+ new Date(json.records[i].Time_Start).toLocaleTimeString();
        document.getElementById('Venue').innerHTML = "Venue/Hosting Platform: "+ json.records[i].Host_Venue;
        document.getElementById('EventID').value = json.records[i].Event_ID;
      }

    });

});
}
