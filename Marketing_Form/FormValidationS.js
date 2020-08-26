function validation(){
  var selected = false;
  thePrice.forEach((item) => {
    if(item>0){
      selected = true;
    }
  });
  if(selected == false){
    alert('Please enter a sales for the events. Thank you');

  }
  else{
    insert_valu();
  }
}
