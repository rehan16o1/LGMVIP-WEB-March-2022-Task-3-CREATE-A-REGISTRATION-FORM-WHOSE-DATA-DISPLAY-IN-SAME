var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];

var n = 1;
var m = 0;

function AddRow() {

  var AddRown = document.getElementById('show');
  var NewRow = AddRown.insertRow(n);

  list1[m] = document.getElementById("fname").value;
  list2[m] = document.getElementById("lname").value;
  list3[m] = document.getElementById("email").value;
  list4[m] = document.getElementById("age").value;
  list5[m] = document.getElementById("mobile").value;
  if (!list1[m] || !list2[m] || !list3[m] || !list4[m] || !list5[m]) {
    alert("Fill Details");
    return;
  }
  var cel1 = NewRow.insertCell(0);
  var cel2 = NewRow.insertCell(1);
  var cel3 = NewRow.insertCell(2);
  var cel4 = NewRow.insertCell(3);
  var cel5 = NewRow.insertCell(4);

  cel1.innerHTML = list1[m];
  cel2.innerHTML = list2[m];
  cel3.innerHTML = list3[m];
  cel4.innerHTML = list4[m];
  cel5.innerHTML = list5[m];


  n++;
  m++;
}