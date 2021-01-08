
function addColumn(){
    let columnCount = document.querySelectorAll(".column").length;
    columnCount /= document.querySelectorAll(".row").length;
    alert(columnCount)
}

function addRow(){
    let table = document.querySelector("table");
    let newRow = document.querySelectorAll(".row").length;
    let columnCount = document.querySelectorAll(".column").length;
    columnCount /= newRow;

    let template1 = `
        <div class="row">
   `
    let template2 = `
        <div class="column"></div>
    `
    let template3 = `
        </div>
    `
    table.innerHTML += template1;
    for(let i = 0; i < columnCount; i++){
        table.innerHTML += template2;
    }
    table.innerHTML += template3;

}
//var selectedColor = document.getElementById('colors')

function fillColor(){
  var selectedColor = document.getElementById('colors').value;
  document.getElementsByClassName('column').style.background-color = red;
}
//var fillColor = document.getElementById('fillall')
