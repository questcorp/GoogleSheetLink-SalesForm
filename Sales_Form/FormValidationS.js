function validation(){
  var register = document.getElementById('Register').value;
  var showup = document.getElementById('ShowUP').value;
  var selected = false;
  thePrice.forEach((item) => {
    if(item>0){
      selected = true;
    }
  });
  if(register == ""){
    alert("Please enter the number of registeration. Thank you.");
  }
  else if(showup == ""){
    alert("Please enter the Show Up rate. Thank you.");

  }
  else if(selected == false){
    alert('Please enter a sales for the events. Thank you');

  }
  else{
    insert_valu();
  }
}
