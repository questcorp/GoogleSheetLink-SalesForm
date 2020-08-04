var script_url= "https://script.google.com/macros/s/AKfycbyGgg64nF9MMGlQAzFO7qIHcDR7lmH-HE5sJkw6BNSKUIEukBg/exec";

function read_value2() {
  var url = script_url + "?action=readM";
$.getJSON(url, function(json) {
  var latest = json.records.length-1;
  var readEvent = [];
  readEvent[0] = json.records[latest].Event;
  document.getElementById('Event-Name').innerHTML = readEvent[0];
  readEvent[1] = json.records[latest].Total_Register.toString();
  //alert(readEvent[1]);
  readEvent[2] = json.records[latest].Total_Show_Up;
  readEvent[3] = json.records[latest].Full_Payment;
  readEvent[4] = json.records[latest].Quantity_Full;
  readEvent[5] = json.records[latest].Amount_Full;
  readEvent[6] = json.records[latest].Deposit;
  readEvent[7] = json.records[latest].Quantity_Deposit;
  readEvent[8] = json.records[latest].Amount_Deposit;
  readEvent[9] = json.records[latest].KIV;
  readEvent[10] = json.records[latest].Quantity_KIV;
  readEvent[11] = json.records[latest].Amount_KIV;
  readEvent[12] = json.records[latest].Partial;
  readEvent[13] = json.records[latest].Quantity_Partial;
  readEvent[14] = json.records[latest].Amount_Partial;
  readEvent[15] = json.records[latest].Others;
  readEvent[16] = json.records[latest].Quantity_Others;
  readEvent[17] = json.records[latest].Amount_Others;
  readEvent[18] = json.records[latest].Total_Amount;
  document.getElementById('Revenue').innerHTML = "Total Revenue(RM)"+readEvent[18].toFixed(2);
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
     var data = google.visualization.arrayToDataTable([
       ['Payment', 'Revenue(RM)'],
       ['Full',   readEvent[5]],
       ['Deposit',    readEvent[8]],
       ['KIV',readEvent[11]],
       ['Partial',readEvent[14]],
       ['Others',   readEvent[17]]
     ]);

     var options = {
         titlePosition: 'none',
         backgroundColor: 'transparent',
         width: '500',
         height: '330',
         legend: {
             position: 'bottom'
         },
         tooltip: {isHtml: true},
         vAxis: {
             gridlines: {
                 count: 5
             },
             format: 'short'
         },
     }
     var chart = new google.visualization.PieChart(document.getElementById('Pie'));
     chart.draw(data, options);
   }
});

}
