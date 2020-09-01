var thePrice2;
var theCurrency2;
var theQuantity2;
var theCPL2;
var first = true;
https://restcountries.eu/rest/v2/alpha/col

function checkCountry(){
  var call_to = "https://restcountries.eu/rest/v2/all";
  $.getJSON(call_to, function(data) {
    var datame = document.getElementById('countryRoad');
    for(var k=0;k<data.length;k++){
      var opt = document.createElement('option');
// create text node to add to option element (opt)
      opt.appendChild( document.createTextNode(data[k].name) );
      opt.value = data[k].alpha3Code;
      datame.appendChild(opt);
    }
});
}

function createHeader2(){
  checkCountry();
  knowWhoYouAre();
  fetchCurrency();
  //createCountry();
  var eventName = getCookie("Name");
  var sel = document.getElementById('EName');
  sel.disabled = true;
  var option = document.createElement('option');
  option.value = eventName;
  option.appendChild(document.createTextNode(eventName));
  sel.appendChild(option);
  sel.value = eventName;
  sel.removeChild(sel.options[0]);
  document.getElementById('date').innerHTML = "Date: "+getCookie('Date');
  document.getElementById('time').innerHTML = "Time: "+getCookie('Time');
  document.getElementById('Venue').innerHTML = "Venue: "+getCookie('Venue');

  var negaraku = ['MYS','SGP','HKG'];
  document.getElementById('TotalRegistration').innerHTML = "Total Registration: 0";
  document.getElementById('TotalAmount').innerHTML = "(Amount Spent: MYR 0.00)";
  document.getElementById('Step2').style.display = "none";
  document.getElementById('Step4').style.display = "none";
  document.getElementById('Step5').style.display = "none";
  document.getElementById('Step1').style.display = "block";
  document.getElementById('Country').style.marginTop = "60px";
  document.getElementById('Table-Country').style.display = "block";
  document.getElementById('Add').style.display = "block";
  document.getElementById('TotalRegistration').style.display = "block";
  document.getElementById('TotalAmount').style.display = "block";
  document.getElementById('Conversion').style.display = "block";
  thePrice2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  theCurrency2 = ["MYR","MYR","MYR","MYR","MYR","MYR","MYR","MYR","MYR","MYR"];
  theQuantity2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,,0,0,0,0,0,0,0,0];
  theCPL2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,,0,0,0,0,0,0,0,0];
  document.getElementById('lastRow').value = negaraku.length;
  let negarakuku = ['PHL','THA','CHN'];
  var pricingTable = document.getElementById('Country');
  pricingTable.style.display = "block";
  pricingTable.innerHTML = "";
  var tr = pricingTable.insertRow(-1);
  var header = document.createElement('th');
  var headerText = document.createTextNode("Country");
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
  negaraku.forEach((item, i) => {
    var table = document.getElementById('Country');
    var tr = table.insertRow(-1);
    var tabCell = tr.insertCell(-1);
    var input = document.createElement('input');
    input.style.width="90%";
    input.style.textAlign = "center";
    input.placeholder = negarakuku[Math.floor(Math.random() * 3)];
    input.className = "negara";
    input.type = "text";
    input.onchange = function(){
      if(first == true){
        document.getElementById('Country').style.marginTop = "40px";
        document.getElementById('Step2').style.display = 'block';
        document.getElementById('Step1').style.display = 'none';
      }
    }
    input.setAttribute('list','countryRoad');
    tabCell.appendChild(input);
    tabCell.style.width = "20%";
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
    input.value = 0;
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
    input.value = 0;
    tabCell.appendChild(input);
    input.className = "Pricez";
    var tabCell = tr.insertCell(-1);
    tabCell.style.width = "20%";
    tabCell.className = "CPL";
    tabCell.innerHTML = "0";
  });
}
var count = 0;
function addInputRow(){
  let negarakuku = ['PHL','THA','CHN'];
  var table = document.getElementById('Country');
  var tr = table.insertRow(-1);
  document.getElementById('lastRow').value = tr.rowIndex;
  var tabCell = tr.insertCell(-1);
  var input = document.createElement('input');
  input.style.width="90%";
  input.style.textAlign = "center";
  input.placeholder = negarakuku[Math.floor(Math.random() * 3)];
  input.className = "negara";
  input.type = "text";
  input.setAttribute('list','countryRoad');
  tabCell.appendChild(input);
  var tabCell = tr.insertCell(-1);
  tabCell.style.width = "10%";
  var input = document.createElement('input');
  input.style.width="90%";
  input.className = "Kuantiti";
  input.onclick = function(){
    this.parentNode.style.border = "2px solid #1a73e8";
  }
  input.onchange = function() {
    calculationCPL(this);
  };
  input.value = 0;
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
  selecting.appendChild(options);
  selecting.onchange = function() {
    calculationCPL(this);
  };
  tabCell.appendChild(selecting);
  var tabCell = tr.insertCell(-1);
  tabCell.style.width = "20%";
  var input = document.createElement('input');
  input.style.width="90%";
  input.className = "Pricez";
  input.onclick = function(){
    this.parentNode.style.border = "2px solid #1a73e8";
  }
  input.onchange = function() {
    calculationCPL(this);
  };
  input.value = 0;
  tabCell.appendChild(input);
  var tabCell = tr.insertCell(-1);
  tabCell.style.width = "10%";
  tabCell.className = "CPL";
  count+=1;
}
function createCountry(){
  createHeader2();
}
