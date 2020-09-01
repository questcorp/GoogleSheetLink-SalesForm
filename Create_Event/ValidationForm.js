function compareDate(){
  var today = new Date();
  //alert(document.getElementById('Date-Start').value);
  ///alert(document.getElementById('Date-End').value);
  var Day = document.getElementById('ETime').value;
  var checkDateTime = false;
  if(Day==""){
    alert('Please enter the date.Thank you');
  }
  else{
    var eventStart = new Date(Day+" "+document.getElementById('Date-Start').value);
    var duration = eventStart - today;
    if(duration <= 86400000){
      alert('Event cannot be created (Must be book before the event)');
    }
    else{
      var eventEnd = new Date(Day+" "+document.getElementById('Date-End').value);
      var DateDuration = eventEnd - eventStart;
      //alert(DateDuration);
      if(DateDuration <=-1){
        alert('Please check the Date start and Date end again');
      }
      else{
        checkDateTime = true;
      }
    }
  }
  return checkDateTime;
}
function checkAll(){
  var EventCheck = false;
  var EventName = document.getElementById('EventName').value;
  if(EventName === ""){
    alert("Please enter the Event Name");
  }
  else{
    EventCheck = true;
  }

  var dateTimeCheck = compareDate();

  var productCheck = false;
  //alert(document.getElementById('Product').value);
  if (document.getElementById('Product').value== "Product")
  {
    alert('Please choose your product');
  }
  else{
    productCheck = true;
  }

  var VenueCheck = false;
  var venue = document.getElementById('HostVenue').value;
  if(venue === ""){
    alert("Please enter the Venue or Hosting Platform");
  }
  else{
    VenueCheck = true;
  }
  var PriceCheck = false;
  var packages = document.getElementsByClassName('Package')[0];
  var prices = document.getElementsByClassName('Price')[0];
  if(packages.value ==""||prices.value==""){
    alert('Sorry. Please insert at least one price for the event');
  }
  else{
    PriceCheck = true;
  }

  if(EventCheck == true && dateTimeCheck == true && VenueCheck == true &&
    productCheck == true &&  PriceCheck == true){
    alert('All the details are sending to the Database....');
    CreateEvent();
    //location.reload();
  }

}
