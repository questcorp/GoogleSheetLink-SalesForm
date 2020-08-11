var script_url = "https://script.google.com/macros/s/AKfycbyaTRcnKWNczR6-0QWXAQmgsAbTGFiqxXF2SPQWXXLxbprZGUM/exec";
function read_value() {
var url = script_url+"?action=readUser";
//alert(url);
$.getJSON(url, function (json) {
  function recursiveFunction(arr,x){
    let start=0, end=json.records.length-1;

       // Iterate while start not meets end
       while (start<=end){

           // Find the mid index
           let mid=Math.floor((start + end)/2);

           // If element is present at mid, return True
           if (arr[mid]===x) return mid;

           // Else look in left or right half accordingly
           else if (arr[mid] < x)
                start = mid + 1;
           else
                end = mid - 1;
       }

       return -1;
   }

  function sorting(test){
    var len = test.length;
    var indices = new Array(len);
    for (var i = 0; i < len; ++i) indices[i] = i;
    indices.sort(function (a, b) { return test[a] < test[b] ? -1 : test[a] > test[b] ? 1 : 0; });
    return indices;
  }
  var username = [];
  var password = [];
  var inputName = document.getElementById('Username').value;
  var inputPass = document.getElementById('Password').value;
  for (var i = 0; i < json.records.length; i++) {
    username[i]=json.records[i].Username;
  }
  var value = sorting(username);
  username.sort();

  var index = recursiveFunction(username,inputName);
  if(index>=0){
    //alert('Good');
    //alert(" Password: " + json.records[value[index]].Password);
    if(inputPass == json.records[value[index]].Password){
      alert('Login successfully');
      var d = new Date();
      d.setTime(d.getTime() + (1825 * 24 * 60 * 60 * 1000));
      var expires = "expires="+d.toUTCString();
      document.cookie = "bigName" + "=" + inputName + ";" + expires + ";path=/";
      document.cookie = "bigPassword" + "=" + inputPass + ";" + expires + ";path=/";
      insert_value(inputName);
    }
    else{
      alert('Failed to login. Please re-enter your password.');
      document.getElementById('Password').value = "";
    }
  }
  else{
    alert('Failed to login. Username not found.\nPlease contact IT department for more inquries.');
    location.reload();
  }
  });
}

function insert_value(user) {
  var url = script_url+"?callback=ctrlq&username="+user+"&action=insertOnline";
  var request = jQuery.ajax({
    crossDomain: true,
    url: url ,
    method: "GET",
    dataType: "jsonp"
  });

}
// print the returned data
function ctrlq(e) {
alert(e.result);
location.replace("http://www.w3schools.com");
}

function getCookie(cname) {
var name = cname + "=";
var decodedCookie = decodeURIComponent(document.cookie);
var ca = decodedCookie.split(';');
for(var i = 0; i <ca.length; i++) {
 var c = ca[i];
 while (c.charAt(0) == ' ') {
   c = c.substring(1);
 }
 if (c.indexOf(name) == 0) {
   return c.substring(name.length, c.length);
 }
}
return "";
}

function checkLogin(){
  if(getCookie("bigName")!="" && getCookie("bigPassword")!=""){
    insert_value(getCookie("bigName"));
  }
}
