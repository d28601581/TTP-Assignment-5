

function changeColor() {        
    var txtInput = document.getElementById("txtInput");
    var ddl = document.getElementById("dropdown");
    var text = ddl.options[ddl.selectedIndex].innerHTML;
        txtInput.style.color = text;          
}