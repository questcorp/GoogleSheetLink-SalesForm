var script_url = "https://script.google.com/macros/s/AKfycbyaTRcnKWNczR6-0QWXAQmgsAbTGFiqxXF2SPQWXXLxbprZGUM/exec";
function knowWhoYouAre() {
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
  for (var i = 0; i < json.records.length; i++) {
    username[i]=json.records[i].Username;
  }
  var value = sorting(username);
  username.sort();

  var index = recursiveFunction(username,getCookie("bigName"));
  if(index>=0){
      if(json.records[value[index]].ProfilePicture == ""){
        document.getElementById('creator').src = "https://www.qscasia.com/wp-content/uploads/2018/08/q-fav.jpg";
        document.getElementById('Footer').innerHTML = "Form is filled by "+getCookie('bigName');
      }
      else{
        alert(json.records[value[index]].ProfilePicture);
      }

      //document.getElementById('creator').src = json.record[value[index]].ProfilePicture;
    }
    else{
      alert('User not found. Please log in again');
      location.replace("http://127.0.0.1:3000/Login.html");
    }
  });
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
