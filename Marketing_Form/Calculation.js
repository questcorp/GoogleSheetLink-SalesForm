var thePrice = [];
var theCurrency = [];
var theQuantity = [];
var theCPL = [];
function calculationCPL(val){

  var rowIndex = val.parentNode.parentNode.rowIndex-1;
  var bilangan = document.getElementsByClassName('Quantitz')[rowIndex];
  theQuantity[rowIndex] = parseFloat(bilangan.value);
  if(val.className == 'Quantitz'){
    document.getElementById('Step2').style.display = "none";
    document.getElementById('Step3').style.display = "block";
  }
  else{
    document.getElementById('Step3').style.display = "none";
    document.getElementById('Step2').style.display = "block";
  }
  var sel = document.getElementsByClassName('Type')[rowIndex];
  var opt = sel.options[sel.selectedIndex];
  var karenci = opt.value;
  theCurrency[rowIndex] = karenci;
  var harga = document.getElementsByClassName('Pricez')[rowIndex];
  thePrice[rowIndex] = parseFloat(harga.value);
  var CPLz  = document.getElementsByClassName('CPL')[rowIndex];
  val.parentNode.style.border = "1px solid #ccc";
  var CPLrate = parseFloat(harga.value)/parseFloat(bilangan.value);
  if(bilangan.value == "0"){
    CPLrate = 0;
  }
  theCPL[rowIndex] = CPLrate;
  CPLz.innerHTML = CPLrate.toFixed(3);
  if(bilangan.value !="0" && harga.value !="0" ){
    document.getElementById('Step2').style.display = "none";
    document.getElementById('Step3').style.display = "none";
    document.getElementById('Step4').style.display = "block";
    document.getElementById('Step5').style.display = "block";
    document.getElementById('Submit').style.marginTop = "-10px";
  }
  calculateTotal();
  //alert(harga.value);
}

function fetchCurrency(){
  fetch("https://api.exchangeratesapi.io/latest?base=USD")
    .then(response=>response.json())
    .then(rates =>{console.log(rates.rates.MYR);
      document.getElementById('Conversion').innerHTML = "Conversion Rate: USD 1 = MYR "+rates.rates.MYR;
      document.getElementById('ConversionRate').value = rates.rates.MYR;
    });
}
var lastRow = 0;
function calculateTotal(){
  lastRow = document.getElementById('lastRow').value;
  var totalR = 0;
  var totalSpent = 0;
  thePrice = underCalculation();
  for(var x=0;x<lastRow;x++){
    totalR += parseInt(theQuantity[x]);
    totalSpent += parseFloat(thePrice[x]);
  }
  console.log(theCurrency);
  console.log(thePrice);
  console.log(totalR);
  document.getElementById('TotalRegistration').innerHTML = "Total Registration: "+totalR;
  document.getElementById('TotalAmount').innerHTML = "(Amount Spent: "+theCurrency[0]+" "+totalSpent.toFixed(2)+")";
}

var currencyChange = false;
var MYR2USD = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
var USD2MYR = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
function underCalculation(){
  var current = theCurrency[0];
  theCurrency.forEach((item, i) => {
    if(item != current && current == "MYR" && USD2MYR[i] == false ){
      thePrice[i] = thePrice[i] * document.getElementById('ConversionRate').value;
      USD2MYR[i] = true;
    }
    else if(item != current && current == "USD" && MYR2USD[i] == false){
      thePrice[i] = thePrice[i] / document.getElementById('ConversionRate').value;
      MYR2USD[i] = true;
    }
    else if(item == current && i <lastRow){
      console.log("Price for "+i+"row = "+document.getElementsByClassName('Pricez')[i].value);
      thePrice[i] = parseFloat(document.getElementsByClassName('Pricez')[i].value);
      MYR2USD[i] = false;
      USD2MYR[i] = false;
    }
  });
  return thePrice;
}
