var script_url = "https://script.google.com/macros/s/AKfycbyaTRcnKWNczR6-0QWXAQmgsAbTGFiqxXF2SPQWXXLxbprZGUM/exec";
var countz = 0;
function read_value() {
  fetchCurrency();
  knowWhoYouAre();
var url = script_url+"?action=readEvent";
//alert(url);
$.getJSON(url, function (json) {

  var eventz = [];
  var index = [];

  for (var i = 0; i < json.records.length; i++) {
    //alert(typeof json.records[i].SalesReport);
    if(json.records[i].Sales_Report == false){
      var dating = new Date(json.records[i].Date_End);
      var today = new Date("2020-10-03");
      var duration = dating - today;
      //alert(duration);
      if(duration <= 0){
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
  });
}
function createHeader(){
  countz = 0;
  var pricingTable = document.getElementById('Pricing');
  pricingTable.innerHTML = "";
  var tr = pricingTable.insertRow(-1);
  var header = document.createElement('th');
  var headerText = document.createTextNode("Package");
  header.appendChild(headerText);
  tr.appendChild(header);
  var header = document.createElement('th');
  var headerText = document.createTextNode("Qty");
  header.appendChild(headerText);
  tr.appendChild(header);
  var header = document.createElement('th');
  header.colSpan = "2";
  var headerText = document.createTextNode("Total Price");
  header.appendChild(headerText);
  tr.appendChild(header);
  var header = document.createElement('th');
  var headerText = document.createTextNode("Edit");
  header.appendChild(headerText);
  tr.appendChild(header);
}

function provideDetails(){
  setnone();
  var showup_register = document.getElementById('Show');
  showup_register.style.display = "block";
  showup_register.style.marginTop = "40px";
  document.getElementById('Step2').style.display = "block";
  document.getElementsByClassName('Register')[0].style.top = "378px";
  document.getElementsByClassName('ShowUP')[0].style.top = "378px";
  var url = script_url+"?action=readEvent";
  $.getJSON(url, function (json) {
    var sel = document.getElementById('EName');
    var opt = sel.options[sel.selectedIndex];
    //alert(opt.value);
    var eventz = [];
    var index = [];
    var pname = [];
    var pcurrency = [];
    var pprice = [];
    for (var i = 0; i < json.records.length; i++) {
      //alert(json.records[i].Sales_Report);
        var dating = new Date(json.records[i].Date_End);
        var today = new Date("2020-10-03");
        var duration = dating - today;
        //alert(duration);
        if(duration <= 0){
          var ppname = [];
          var ppcurrency = [];
          var ppprice = [];
          eventz.push(json.records[i].Event);
          index.push(i);
          ppname.push(json.records[i].Price_A_Name);
          ppcurrency.push(json.records[i].CurrencyA) ;
          ppprice.push(json.records[i].Price_A);
          if(json.records[i].Price_B_Name != ""){
            ppname.push(json.records[i].Price_B_Name);
            ppcurrency.push(json.records[i].CurrencyB);
            ppprice.push(json.records[i].Price_B);
            if(json.records[i].Price_C_Name != ""){
              ppname.push(json.records[i].Price_C_Name);
              ppcurrency.push(json.records[i].CurrencyC);
              ppprice.push(json.records[i].Price_C);
              if(json.records[i].Price_D_Name != ""){
                ppname.push(json.records[i].Price_D_Name);
                ppcurrency.push(json.records[i].CurrencyD);
                ppprice.push(json.records[i].Price_D);
                if(json.records[i].Price_E_Name != ""){
                  ppname.push(json.records[i].Price_E_Name);
                  ppcurrency.push(json.records[i].CurrencyE);
                  ppprice.push(json.records[i].Price_E);
                }
              }
            }
          }
        
      }
      pname.push(ppname);
      pprice.push(ppprice);
      pcurrency.push(ppcurrency);
    }
    //alert(pname[1]);
    //alert(pcurrency);
    var last = 0;
    for(var kk=0;kk<index.length;kk++){
      //alert(opt.value);
    if(opt.value == eventz[kk]){
      thePrice =[0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      theQuantity =[0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      thePricePerPax =[0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      theCurrency = ["","","","","","","","","","","",""];
      thePackage = ["","","","","","","","","","","",""];
      document.getElementById('EventID').value = json.records[index[kk]].Event_ID;
      document.getElementById('date').innerHTML = "Date: "+ new Date(json.records[index[kk]].Date_Start).toDateString();
      document.getElementById('time').innerHTML = "Time: "+ new Date(json.records[index[kk]].Time).toLocaleTimeString();
      document.getElementById('Venue').innerHTML = "Venue: "+ json.records[index[kk]].Host_Venue;
      createHeader();
      var pricingTable = document.getElementById('Pricing');
      document.getElementById('lastRow').value = pname[kk].length;
      for(var m=0;m<pname[kk].length;m++){
        var tr =  pricingTable.insertRow(-1);
        tr.title = pcurrency[kk][m] + pprice[kk][m];
        var tabCell = tr.insertCell(-1);
        tabCell.className = "Package";
        tabCell.innerHTML = pname[kk][m];
        thePackage[m] = pname[kk][m];
        var tabCell = tr.insertCell(-1);
        var qtyInput = document.createElement('input');
        qtyInput.type = "number";
        qtyInput.required = true;
        qtyInput.placeholder = "0";
        qtyInput.className = "Quantitz";
        qtyInput.disabled = "true";
        function outsideShow(value,xprice){
          var row = value.parentNode.parentNode.rowIndex-1;
          //alert(xprice);
          var quanInput = document.getElementsByClassName('Quantitz')[row].value;
          document.getElementsByClassName("Price")[row].innerHTML = (parseFloat(quanInput) * parseFloat(xprice[row])).toFixed(2);
        }
        qtyInput.onchange = function(){
          outsideShow(this,pprice[kk]);
        }
        tabCell.appendChild(qtyInput);
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = pcurrency[kk][m];
        tabCell.style.width = "10%";
        tabCell.className = "Curren";
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = "0";
        tabCell.className = "Price";
        tabCell.style.width = "25%";
        tabCell.style.paddingLeft = "3px";
        var tabCell = tr.insertCell(-1);
        var button = document.createElement('button');
        var symbol = document.createElement('i');
        symbol.className = "fas fa-edit";
        button.appendChild(symbol);
        button.type = "button";
        button.className = "click";
        button.value =m;
        var haha = 100;
        var prev = -3;
        function insertPop(val,xname,xcurrency,xprice){
          //alert(xname);
          document.getElementById('FullPayment').innerHTML = "";
          document.getElementById('PaymentType').innerHTML = "Full Payment";
          var table = document.getElementById('FullPayment');
          var tr = table.insertRow(-1);
          var tabCell = tr.insertCell(-1);
          tabCell.id = "ReadPrice";
          var tabCell = tr.insertCell(-1);
          tabCell.innerHTML = "X";
          var tabCell = tr.insertCell(-1);
          tabCell.style.width = "40px";
          var input = document.createElement('input');
          input.type = "number";
          input.value = "";
          input.id = "Quantity";
          input.title = "Quantity for "+document.getElementById('PackageTitle').innerHTML;
          input.style.width = "35px";
          input.style.fontSize = "1.2rem";
          input.oninput = function(){
            document.getElementById('Comment').innerHTML = 'Entering the quantity...';
          }
          input.onchange = function(){
            calculate();
          }
          tabCell.appendChild(input);
          var tabCell = tr.insertCell(-1);
          tabCell.innerHTML = "=";
          var tabCell = tr.insertCell(-1);
          var tabCell = tr.insertCell(-1);
          tabCell.id = "Subtotal";
          tabCell.innerHTML = "0.00";
          var numz = parseInt(val.value);
          if(val.value != prev){
            if(document.getElementsByClassName('Quantitz')[numz].value >0){
              document.getElementById('Quantity').value = document.getElementsByClassName('Quantitz')[numz].value;
              var priceperpax = parseFloat(document.getElementById('ReadPrice').innerHTML.split(" ")[1]);
              var paxquantity = parseFloat(document.getElementById('Quantity').value);
              var totalprice = priceperpax * paxquantity;
              document.getElementById('Comment').innerHTML = "Calculation is done. <br>"+document.getElementById('PackageTitle').innerHTML+" had earned "+ document.getElementById('ReadPrice').innerHTML.split(" ")[0]+" "+totalprice.toFixed(2);
              document.getElementById('Subtotal').innerHTML = document.getElementById('ReadPrice').innerHTML.split(" ")[0]+" "+totalprice.toFixed(2);
            }
            else{
              document.getElementById('Quantity').value = "";
              document.getElementById('Comment').innerHTML = "Entering the quantity...";
            }

          }

          document.getElementById('indexNo').value = numz;
          document.getElementById('PackageTitle').innerHTML = xname[numz];
          document.getElementById('ReadPrice').innerHTML = xcurrency[numz] + " " +parseFloat(xprice[numz]).toFixed(2);
          prev = numz;
        }
        button.onclick =  function(){
          insertPop(this,pname[kk],pcurrency[kk],pprice[kk]);
          setnone();
          document.getElementById('Step5').style.display = "block";
          document.getElementById('Comment').style.marginTop = "0px";
          document.getElementById('Choice').style.marginTop = "0px";
          document.getElementById('Pricing').style.marginTop = "10px";
          document.getElementsByClassName('ShowUP')[0].style.visibility="hidden";
          document.getElementsByClassName('Register')[0].style.visibility="hidden";
          location.href='#popup1';
        }
        tabCell.style.width = "10%";
        tabCell.appendChild(button);
      }
      break;
    }
    else{
      document.getElementById('date').innerHTML = "Date: Wed Jul 1 2020";
      document.getElementById('time').innerHTML = "Time: 09:00:00";
      document.getElementById('Venue').innerHTML = "Venue: Wisam Quest";
      var pricingTable = document.getElementById('Pricing');
      pricingTable.innerHTML = "";
      createHeader();
      var tr =  pricingTable.insertRow(-1);
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = "None";
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = "---";
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = "---";
      tabCell.style.width = "10%";
      var tabCell = tr.insertCell(-1);
      tabCell.innerHTML = "0";
      tabCell.style.width = "25%";
      tabCell.style.paddingLeft = "3px";
      var tabCell = tr.insertCell(-1);
      var button = document.createElement('button');
      var symbol = document.createElement('i');
      symbol.className = "fas fa-edit";
      button.appendChild(symbol);
      tabCell.style.width = "10%"
      tabCell.appendChild(button);
    }
  }
});
}


function calculate(){
  setnone();
  document.getElementById('Comment').style.marginTop = "0px";
  document.getElementById('Choice').style.marginTop= "60px";
  document.getElementById('Step6').style.display = "block";
  document.getElementById('Step7').style.display = "block";
  var num = document.getElementById('indexNo').value;
  num = parseInt(num);
  var priceperpax = parseFloat(document.getElementById('ReadPrice').innerHTML.split(" ")[1]);
  var paxquantity = parseFloat(document.getElementById('Quantity').value);
  var totalprice = priceperpax * paxquantity;
  document.getElementById('Comment').innerHTML = "Calculation is done. <br>"+document.getElementById('PackageTitle').innerHTML+" had earned "+ document.getElementById('ReadPrice').innerHTML.split(" ")[0]+" "+totalprice.toFixed(2);
  document.getElementById('Subtotal').innerHTML = document.getElementById('ReadPrice').innerHTML.split(" ")[0]+" "+totalprice.toFixed(2);
}

function saveInfo(){
  var num = document.getElementById('indexNo').value;
  num = parseInt(num);
  var priceperpax = parseFloat(document.getElementById('ReadPrice').innerHTML.split(" ")[1]);
  var paxquantity = parseFloat(document.getElementById('Quantity').value);
  var totalprice = priceperpax * paxquantity;
  thePrice[num] = totalprice;
  thePricePerPax[num] = priceperpax;
  theQuantity[num] = paxquantity;
  theCurrency[num] = document.getElementById('ReadPrice').innerHTML.split(" ")[0];
  document.getElementsByClassName('Price')[num].innerHTML = totalprice.toFixed(2);
  document.getElementsByClassName('Quantitz')[num].value = paxquantity;
  location.href='#';
  document.getElementsByClassName('ShowUP')[0].style.visibility="visible";
  document.getElementsByClassName('Register')[0].style.visibility="visible";
  document.getElementById('TotalCollection').innerHTML = "Total Collection: "+ document.getElementsByClassName('Curren')[0].innerHTML+" "+sum().toFixed(2);
  if(document.getElementsByClassName('Curren')[0].innerHTML == "USD"){
    document.getElementById('TotalCollection').innerHTML += " (MYR "+(sum()*document.getElementById('ConversionRate').value).toFixed(2)+")";
  }
  //alert(thePrice);
}
