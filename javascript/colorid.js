let $ = function(id) {
    return document.getElementById(id);
};

$('colorPicker').addEventListener("input", function(){
    let color = $('colorPicker').value;
    $('view').style.backgroundColor = color; 
});