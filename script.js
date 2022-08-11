

function add(){
    
    addInTable(text)
}

function addInTable() {
    let input = document.getElementById('add-button')
    var table = document.getElementById("table");
    var rows = document.getElementsByTagName('tr')
    var newRow = table.insertRow(0);
    var col2 = newRow.insertCell(1);
    var col3 = newRow.insertCell(2);
    var today = new Date();

    col2 = input.value;
    col3 = today.toLocaleDateString() +' '+ today.toLocaleTimeString();

    text = 'textContent' in document ? 'textContent' : 'innerText';

    for (var i = 0, len = rows.length; i < len; i++) {
  rows[i].children[0][text] = i + ': ' + rows[i].children[0][text];

  }


}

var h1 = document.getElementsByTagName('h1')[0];
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
    seconds = 0; minutes = 0; hours = 0;    // // 
}