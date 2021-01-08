function deleteRow(){
    if(document.querySelectorAll(".row").length > 1){
        document.querySelector(".row").remove();
    }
}

function deleteColumn(){
    let columnCount = document.querySelectorAll(".column").length;
    columnCount /= document.querySelectorAll(".row").length;
    let Rows = document.querySelectorAll(".row");
    if(columnCount > 1){
        for(let i = 0; i < Rows.length; i++){
            Rows[i].getElementsByClassName("column")[0].remove();
        }
    }
}

function addColumn(){
    let columnCount = document.querySelectorAll(".column").length;
    columnCount /= document.querySelectorAll(".row").length;
    let Rows = document.querySelectorAll(".row");
    let template = `
        <div class="column"></div>
    `
    for(let i = 0; i < Rows.length; i++){
        Rows[i].innerHTML += template;
    }
}

function addRow(){
    let table = document.querySelector("table");
    let Rows = document.querySelectorAll(".row");
    let columnCount = document.querySelectorAll(".column").length;
    columnCount /= Rows.length;
    let template1 = `
        <div class="row"></div>
   `
    let template2 = `
        <div class="column"></div>
    `
    table.innerHTML += template1;
    Rows = document.querySelectorAll(".row");

    for(let i = 0; i < columnCount; i++){
        Rows[Rows.length - 1].innerHTML += template2;
    }
    table.innerHTML += template3;
}
function fillAll(){
  var selectedColor = document.getElementById('colors').value;
  var columns = document.getElementsByClassName('column');
  for(let i=0;columns.length;i++){
    columns[i].style.backgroundColor = selectedColor;
  }
}
function clearAll(){
  var columns = document.getElementsByClassName('column');
  for(let i=0;columns.length;i++){
    columns[i].style.backgroundColor = "white";
  }
}