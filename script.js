
 document.getElementById("wetab").style.display = 'none'

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
   
 }else{
   alert('Debe escribir algun estado para poder agregar')
 }

 input.value = ' '
}

function deleteRecord() {
  
  let table = document.getElementById("table-body");
  
    if( table.rows.length > 0){
      table.deleteRow(0);
    }else{
      alert('No hay elementos en la tabla')
    }
   
  

}



function change() // no ';' here
{
  var elem = document.getElementById("toogle");
    if (elem.value=="Tabla") {
      document.getElementById('wetab').style.display = 'flex'
      document.getElementById('crono').style.display = 'none'
      
      elem.value = "Cronometro"}
    else{ 
    document.getElementById('wetab').style.display = 'none'
    document.getElementById('crono').style.display= 'flex'
    elem.value = "Tabla";
  }
}

var h1 = document.getElementById('cron-text');
var start = document.getElementById('iniciar');
var stop = document.getElementById('parar');
var reset = document.getElementById('reiniciar');
var sec = 0;
var min = 0;
var hrs = 0;
var t;

function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
}
function add() {
    tick();
    h1.textContent = (hrs > 9 ? hrs : "0" + hrs) 
        	 + ":" + (min > 9 ? min : "0" + min)
       		 + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}

timer();
start.onclick = timer;
stop.onclick = function() {
    clearTimeout(t);
}
reset.onclick = function() {
    h1.textContent = "00:00:00";
    sec = 0; min = 0; hrs = 0; 
       clearTimeout(t)
}


