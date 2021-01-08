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
