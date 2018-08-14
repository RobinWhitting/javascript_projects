const rows = [["Promo Name", "Bonus/IMS Code", "Keep?"], ["VW 14","89289"," "], ["Casino - Slots Bonus Drop","90017","Keep"]];
let csvContent = "data:text/csv;charset=utf-8,";
rows.forEach(function(rowArray){
  let row = rowArray.join(",");
  csvContent += row + '\r\n';
});

console.log(csvContent);
let encodedUri = encodeURI(csvContent);
let link = document.createElement('a');
link.setAttribute('href', encodedUri);
link.setAttribute('download', 'Gemini_Bonuses.csv');
link.innerHTML = "Click here to download";
document.body.appendChild(link);
