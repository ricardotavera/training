

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