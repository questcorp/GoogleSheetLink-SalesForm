function compareTime(){
  var today = new Date();
  //alert(document.getElementById('Time-Start').value);
  ///alert(document.getElementById('Time-End').value);
  var Day = document.getElementById('EDate').value;
  var checkDateTime = false;
  if(Day==""){
    alert('Please enter the date.Thank you');
  }
  else{
    var eventStart = new Date(Day+" "+document.getElementById('Time-Start').value);
    var duration = eventStart - today;
    if(duration <=604800000){
      alert('Event cannot be created (Must be book before 2 weeks before the event)');
    }
    else{
      var eventEnd = new Date(Day+" "+document.getElementById('Time-End').value);
      var timeDuration = eventEnd - eventStart;
      //alert(timeDuration);
      if(timeDuration <=0){
        alert('Please check the time start and time end again');
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

  var dateTimeCheck = compareTime();

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
