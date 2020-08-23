var totalPrice = 0;
var thePrice;
var theCurrency;
var theQuantity;
var thePricePerPax;
function checkRadio(){
  const rbs = document.querySelectorAll('input[name="currencz"]');
  let selectedValue;
  for (const rb of rbs) {
    if (rb.checked) {
        selectedValue = rb.value;
        break;
    }
  }
  document.getElementById('Currencx').innerHTML = selectedValue;

  var price = parseInt(document.getElementById('Subtotal').innerHTML.slice(3));
  document.getElementById('Subtotal').innerHTML = selectedValue +" "+ price.toFixed(2);
}
var previous = [0,0,0,0,0,0,0,0,0,0,0,0,0];
function checkConditionb4AddRow(){
  if(countz>=6){
    alert("Sorry. Other payment exceed the maximum account. \n Please refer to IT department for more enquires.");
  }
  else{
    var totalRowIndex = parseInt(document.getElementById('lastRow').value)+countz;
    if(document.getElementById('lastRow').value <0){
      totalRowIndex+=1;
    }
    alert(totalRowIndex);
    if(countz ==0 || document.getElementsByClassName('Quantitz')[totalRowIndex-1].value !=0){
      addRow();
    }
    else{
      alert('Sorry. Please fill up the rows before proceed.');
    }

  }
}
function addRow(){
  var value = parseInt(document.getElementById('lastRow').value);
  var pricingTable = document.getElementById('Pricing');
  var tr =  pricingTable.insertRow(-1);
  var tabCell = tr.insertCell(-1);
  tabCell.style.padding = "0";
  tabCell.style.margin = "0";
  var selecting = document.createElement('select');
  selecting.className = "Type";
  selecting.style.border="none";
  selecting.style.width="100%";
  selecting.style.marginLeft = "0px";
  var options = document.createElement('option');
  options.value ="Deposit";
  options.innerHTML = "Deposit";
  selecting.appendChild(options);
  var options = document.createElement('option');
  options.value ="KIV";
  options.innerHTML = "KIV";
  selecting.appendChild(options);
  var options = document.createElement('option');
  options.value ="partial";
  options.innerHTML = "Partial";
  selecting.appendChild(options);
  var options = document.createElement('option');
  options.value ="Others";
  options.innerHTML = "Others";
  selecting.appendChild(options);
  tabCell.appendChild(selecting);
  var tabCell = tr.insertCell(-1);
  var qtyInput = document.createElement('input');
  qtyInput.type = "number";
  qtyInput.disabled = true;
  qtyInput.placeholder = "0";
  qtyInput.className = "Quantitz";
  tabCell.appendChild(qtyInput);
  var tabCell = tr.insertCell(-1);
  tabCell.innerHTML = "MYR";
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
  button.value = countz;
  button.onclick = function(){
    updatePopUp(this.value);
    document.getElementsByClassName('ShowUP')[0].style.visibility="hidden";
    document.getElementsByClassName('Register')[0].style.visibility="hidden";
    location.href = "#popup1";
  }
  function updatePopUp(count){
    var number = parseInt(count);
    var lastRow = parseInt(document.getElementById('lastRow').value);
    var rowIndede = number + lastRow;
    if(rowIndede <0){
      rowIndede = 0;
    }
    document.getElementById('buttonNo').value = number;
    var sel = document.getElementsByClassName('Type')[number];
    var opt = sel.options[sel.selectedIndex];
    document.getElementById('PaymentType').innerHTML = opt.value;
    document.getElementById('Comment').innerHTML = "Please enter price and quantity for "+document.getElementById('PaymentType').innerHTML;
    var currency = document.createElement('table');
    var tr =  currency.insertRow(-1);
    var tabCell = tr.insertCell(-1);
    tabCell.innerHTML = "Currency: ";
    var tabCell = tr.insertCell(-1);
    var input = document.createElement('input');
    input.type = "radio";
    input.className = "currencz";
    input.name = "currencz";
    input.value = "MYR";
    input.checked = "true";
    input.onchange = function(){
      checkRadio();
    }
    tabCell.appendChild(input);
    var tabCell = tr.insertCell(-1);
    tabCell.innerHTML = "MYR";
    var tabCell = tr.insertCell(-1);
    var input = document.createElement('input');
    input.type = "radio";
    input.className = "currencz";
    input.name = "currencz";
    input.value = "USD";
    input.onchange = function(){
      checkRadio();
    }
    tabCell.appendChild(input);
    var tabCell = tr.insertCell(-1);
    tabCell.innerHTML = "USD";
    document.getElementById('PackageTitle').innerHTML = "";
    document.getElementById('PackageTitle').appendChild(currency);
    document.getElementById('FullPayment').innerHTML = "";
    var table = document.getElementById('FullPayment');
    tr.style.zIndex = 2;
    var tr = table.insertRow(-1);
    var tabCell = tr.insertCell(-1);
    tabCell.id = "Currencx";
    tabCell.innerHTML = "MYR";
    var tabCell = tr.insertCell(-1);
    tabCell.style.width = "70px";
    var input = document.createElement('input');
    input.type = "number";
    input.id = "Pricess";
    input.title = "Price for "+document.getElementById('PaymentType').innerHTML;
    input.style.width = "65px";
    input.style.fontSize = "1.2rem";
    input.style.paddingLeft = "15px";
    input.style.marginLeft = "-12px";
    if(previous[number] != 0){
      input.value = previous[number][1];
    }
    input.oninput = function(){
      document.getElementById('Comment').innerHTML = 'Entering the price('+document.getElementById('Subtotal').innerHTML.substring(0,3)+')...';
    }
    input.onchange = function(){
      totalUpOthers();
    }
    tabCell.appendChild(input);
    var tabCell = tr.insertCell(-1);
    tabCell.innerHTML = "X";
    var tabCell = tr.insertCell(-1);
    tabCell.style.width = "40px";
    var input = document.createElement('input');
    input.type = "number";
    input.value = document.getElementsByClassName;
    input.id = "Quantity";
    input.title = "Quantity for "+document.getElementById('PaymentType').innerHTML;
    input.style.width = "35px";
    input.style.fontSize = "1.2rem";
    input.oninput = function(){
      document.getElementById('Comment').innerHTML = 'Entering the quantity...';
    }
    input.onchange = function(){
      totalUpOthers();
    }
    if(previous[number] != 0){
      input.value = previous[number][2];
    }
    tabCell.appendChild(input);
    var tabCell = tr.insertCell(-1);
    tabCell.innerHTML = "=";
    var tabCell = tr.insertCell(-1);
    var tabCell = tr.insertCell(-1);
    tabCell.id = "Subtotal";
    tabCell.innerHTML = "MYR 0.00";
    if(previous[number] != 0){
      tabCell.innerHTML = previous[number][0]+" "+ previous[number][3];
    }
  }
  tabCell.appendChild(button);
  countz+=1;


}


function totalUpOthers(){
  var prevprev = [];
  if(document.getElementById('Quantity').value == ""){
    document.getElementById('Comment').innerHTML = "Please enter the quantity. <br>Thank you.";
  }
  else if(document.getElementById('Pricess').value == ""){
    document.getElementById('Comment').innerHTML = "Please enter the price for "+ document.getElementById('PaymentType').innerHTML+". <br>Thank you. ";
  }
  else{
    var totalOthers = parseInt(document.getElementById('Quantity').value) * parseInt(document.getElementById('Pricess').value);
    prevprev.push(document.getElementById('Subtotal').innerHTML.substring(0,3));
    prevprev.push(parseInt(document.getElementById('Pricess').value));
    prevprev.push(parseInt(document.getElementById('Quantity').value));
    prevprev.push(totalOthers.toFixed(2));
    document.getElementById('Subtotal').innerHTML = document.getElementById('Subtotal').innerHTML.substring(0,3)+" "+totalOthers.toFixed(2);
    document.getElementById('Comment').innerHTML = "Calculation is done. <br>"+document.getElementById('PaymentType').innerHTML+" had earned "+ document.getElementById('Subtotal').innerHTML;
  }
  previous[parseInt(document.getElementById('buttonNo').value)] = prevprev;
}

function differentiate(){
  if(document.getElementById('PaymentType').innerHTML == "Full Payment"){
    saveInfo();
  }
  else{
    saveInfo2();
  }
}

function saveInfo2(){
  //alert(document.getElementById('lastRow').value);
  var lastRow = parseInt(document.getElementById('lastRow').value);
  var otherCount = parseInt(document.getElementById('buttonNo').value);
  var ownRow = lastRow + otherCount;
  //alert(ownRow);
  if(lastRow == -1){
    ownRow +=1;
  }
  document.getElementsByClassName('Quantitz')[ownRow].value = document.getElementById('Quantity').value;
  theQuantity[ownRow] = document.getElementById('Quantity').value;
  document.getElementsByClassName('Price')[ownRow].innerHTML = document.getElementById('Subtotal').innerHTML.slice(3);
  thePrice[ownRow]= parseFloat(document.getElementById('Subtotal').innerHTML.slice(3));
  theCurrency[ownRow] = document.getElementById('Subtotal').innerHTML.substring(0,3);
  thePricePerPax[ownRow] = document.getElementById('Pricess').value;
  thePackage[ownRow] = document.getElementById('PaymentType').innerHTML;
  document.getElementsByClassName('Curren')[ownRow].innerHTML =  document.getElementById('Subtotal').innerHTML.substring(0,3);
  document.getElementsByClassName('ShowUP')[0].style.visibility="visible";
  document.getElementsByClassName('Register')[0].style.visibility="visible";
  document.getElementById('TotalCollection').innerHTML = "Total Collection: "+ document.getElementsByClassName('Curren')[0].innerHTML+" "+sum().toFixed(2);
  if(document.getElementsByClassName('Curren')[0].innerHTML == "USD"){
    document.getElementById('TotalCollection').innerHTML += "(MYR "+(sum()*document.getElementById('ConversionRate').value).toFixed(2)+")";
  }
  location.href='#';
  //alert(thePrice);
}

function sum(){
  var current = document.getElementsByClassName('Curren')[0].innerHTML;
  theCurrency.forEach((item, i) => {
    if(item != current && current == "MYR"){
      thePrice[i] = thePrice[i] * document.getElementById('ConversionRate').value;
    }
    else if(item != current && current == "USD"){
      thePrice[i] = thePrice[i] / document.getElementById('ConversionRate').value;
    }
  });
  return thePrice.reduce((a,b)=>a+b,0);
}
