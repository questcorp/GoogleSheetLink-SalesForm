function dateNow(){
  var dateToday = new Date();
  document.getElementById('Date').innerHTML = dateToday.toDateString();
  read_value();
}
var eventz = 0;

function showMe(){
  var sel = document.getElementById("EName");
  var Act = sel.options[sel.selectedIndex].value;
  for(var i=0;i<items.length;i++){
    if(items[i][0] == Act){
      document.getElementById('Dating').innerHTML = "Date: "+items[i][2];
      document.getElementById('Time').innerHTML = "Time: "+ items[i][3];
      document.getElementById('Venue / Hosting Platform').innerHTML = "Venue: "+ items[i][5];
      document.getElementById('Fullx').innerHTML = items[i][6];
      document.getElementById('Full').value = 0;
      document.getElementById('TDeposit').value = 0;
      document.getElementById('TDepositx').value= 0;
      document.getElementById('TKIV').value = 0;
      document.getElementById('TKIVx').value= 0;
      document.getElementById('TPartial').value = 0;
      document.getElementById('TPartialx').value= 0;
      document.getElementById('TOther').value = 0;
      document.getElementById('TOtherx').value = 0;
      document.getElementById('Total-2').innerHTML = "0";
      document.getElementById('Total-3').innerHTML = "0";
      document.getElementById('Total-T').innerHTML = "0";
      eventz = items[i][6];
    }
  }
}
function updateTotal(value){
  var Dname = value.id+"x";
  var m = "";
  var msg = "";
  if(value.id === 'Full'){
    m = "Total-1";
    msg = "Please choose the event first. Thank you.";
  }
  else{
    eventz = document.getElementById(Dname).value;
    msg = 'Please enter the quantity 1st before enter the Price (RM)';
    if(value.id ==="TDeposit"){
      m="Total-2";
    }
    else if(value.id ==="TKIV"){
      m="Total-3";
    }
    else if(value.id ==="TPartial"){
      m="Total-4";
    }
    else{
      m = 'Total-5';
    }
  }
  //alert(eventz);
  if(eventz == 0){
    alert(msg);
    value.value = 0;
  }
  else{
    var update = eventz * value.value;
    //alert(update);
    document.getElementById(m).innerHTML = update.toFixed(2);
  }
  var totaling = 0;
  for(var k=1;k<4;k++){
    totaling +=parseFloat(document.getElementById("Total-"+k).innerHTML);
  }
  document.getElementById('Total-T').innerHTML = totaling.toFixed(2)
  eventz = 0;
  }

function comment(){
  var comment = document.getElementById('Register').value;
  var comment2 = document.getElementById('Show_Up').value;
  document.getElementById('comment').style.visibility = "visible";
  if(comment == null||comment2 == null){
    document.getElementById('comment').innerHTML="**Please enter value inside the 2 inputs.";
  }
  else if(comment <=0 || comment2 <=0){

    document.getElementById('comment').innerHTML="**Please enter a positive number";
  }
  else if(comment > 0 && comment2 > 0){
    var percent = comment2/comment *100;
    document.getElementById('comment').style.backgroundColor = "#2e2e2e";
    document.getElementById('comment').innerHTML= "**<strong> "+ comment + "</strong> people registered but <strong>"  + comment2 + "</strong> people show up. ("+percent.toFixed(3)+"%)";
  }
}
function checkNumber(){
  var addition = 0;
  var commentx = document.getElementById('Show_Up').value;
  addition += parseInt(document.getElementById('Full').value);
  addition += parseInt(document.getElementById('TDepositx').value);
  addition += parseInt(document.getElementById('TOtherx').value);
  if(addition > commentx){
    alert('Wrong total show up and the quantity inside sales. Please check.');
  }
  else{
    alert("Successful! Now Generating dashboard for you.");
    insert_value();
  }
}
