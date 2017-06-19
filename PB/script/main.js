var stepCounter = 1;

function createRows() {
  var myTable = document.getElementById('MainTable').getElementsByTagName('tbody')[0];
  var tr = document.createElement('tr');
  stepCounter++
  tr.innerHTML = '<td class="tbodyStepCol" contentEditable="true">' + stepCounter + '</td><td class="tbodyCol" contentEditable="true"></td><td class="tbodyCol" contentEditable="true"></td><td class="tbodyCol" contentEditable="true"></td>';
  myTable.appendChild(tr);
}
