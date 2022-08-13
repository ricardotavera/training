


function addInTable() {
  let input = document.getElementById('weather')

 if(input.value){
  let table = document.getElementById("table-body");
  let newRow = table.insertRow(0);
  let col1 = newRow.insertCell(0)
  let col2 = newRow.insertCell(1);
  let col3 = newRow.insertCell(2);
  let today = new Date();


  col2.innerHTML = input.value;
  col3.innerHTML = today.toLocaleDateString().replace(/[/]/g,'-') + ' ' + today.toLocaleTimeString();

  let rows = document.getElementsByTagName('tr')
  text = 'textContent' in document ? 'textContent' : 'innerText';

  for (let i = 0, len = rows.length; i < len; i++) {
    rows[i+1].children[0][text] = i+1;
  }
   
 }

 /* input.value = '' */
}

function deleteRecord() {
  
  let table = document.getElementById("table-body");
  
    if( table.rows.length > 0){
      table.deleteRow(0);
    }
   
  

}



function change() // no ';' here
{
  var elem = document.getElementById("toogle");
    if (elem.value=="Cronometro") {
      document.getElementById('wetab').style.display = 'flex'
      elem.value = "Tabla"}
    else{ elem.value = "Cronometro";
    document.getElementById('wetab').style.display = 'none'
    
  }
}