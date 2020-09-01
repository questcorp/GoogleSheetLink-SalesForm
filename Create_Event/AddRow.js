var count = 0;
var prev = 0;
function addRow(){
  var packages = document.getElementsByClassName('Package')[count];
  var prices = document.getElementsByClassName('Price')[count];
  var currency = document.getElementsByClassName('Currency')[count];
  if(packages.value ==""||prices.value==""||currency.value == " "){
    alert('Sorry. Empty row is detected');
  }
  else{
    count+=1;
    if(count>=5){
      alert('Too much pricing. Please check again');
      return 0;
    }
    var plan = [['Standard',12.99],['Premium',15.99],['Family Package',33.99],["Ultimate Package",44.99],["Billionstar","99.99"]];
    var num = Math.floor(Math.random()*5);
    while(prev == num){
      var num = Math.floor(Math.random()*5);
    }
    var table = document.getElementById('Pricing');
    tr = table.insertRow(-1);
    var tabCell = tr.insertCell(-1);
    var input = document.createElement('input');
    input.placeholder = plan[num][0];
    input.className = "Package";
    input.id="Package-"+count;
    input.required = true;
    input.onchange = function(){checkNumber(this);};
    prev = num;
    input.style.marginLeft="0%";
    tabCell.appendChild(input);
    var tabCell = tr.insertCell(-1);
    input = document.createElement('select');
    var option = document.createElement("option");
    option.text = "- - -";
    option.value = "$";
    option.id = "$";
    input.add(option);
    input.className = "Currency";
    option = document.createElement("option");
    option.text = "USD";
    option.value = "USD";
    input.add(option);
    option = document.createElement("option");
    option.text = "MYR";
    option.value = "MYR";
    input.add(option);
    tabCell.appendChild(input);
    var tabCell = tr.insertCell(-1);
    input = document.createElement('input');
    input.type = "number";
    input.className = "Price";
    input.placeholder = plan[num][1];
    input.style.marginLeft="1%";
    input.onchange = function(){checkNumber(this);};
    input.id="Price-"+count;
    input.required = true;
    tabCell.appendChild(input);
    var art = document.getElementById('c');
    var height = 800 + count*60;
    art.style.height = height.toString()+"px";
  }
  }
  var first = true;
  function checkNumber(value){
    setnone();
    var packages = "Package-"+count;
    var price = "Price-"+count;
    if(value.id == packages){
      if(first == true){
        document.getElementById('Step8').style.display = 'block';
        first = false;
      }

      if(document.getElementById(price).value !=""){
        document.getElementById('Package').innerHTML = (count+1) +"package(s) is entered."
      }
    }
    else{
      document.getElementById('Step10').style.display = 'block';
      document.getElementById('Step11').style.display = 'block';
      document.getElementById('TotalBar').style.marginTop = '40px';
      document.getElementById('BackHome').style.marginBottom = "-100px";
      if(document.getElementById(packages).value !=""){
        document.getElementById('Package').innerHTML = (count+1) +" package(s) is entered."
      }
    }
  }
