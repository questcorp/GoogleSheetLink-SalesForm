var count = 0;
function addRow(){
  let sourcing = ['Instagram','Radio Ads',"Youtube","TV ads"];
  var table = document.getElementById('Marketing');
  var tr = table.insertRow(-1);
  document.getElementById('lastRow').value = tr.rowIndex;
  var tabCell = tr.insertCell(-1);
  var input = document.createElement('input');
  input.style.width="90%";
  input.style.textAlign = "center";
  input.placeholder = sourcing[Math.floor(Math.random() * 4)];
  input.className = "Sources";
  tabCell.appendChild(input);
  var tabCell = tr.insertCell(-1);
  tabCell.style.width = "10%";
  var input = document.createElement('input');
  input.style.width="90%";
  input.className = "Quantitz";
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
