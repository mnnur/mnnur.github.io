let $ = function(id) {
    return document.getElementById(id);
};

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 8; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
}

function changebg() {
    document.body.style.backgroundImage = 'linear-gradient(to bottom,' +  generateRandomColor() + ',' +  generateRandomColor() + ')';
}

window.addEventListener("load", changebg);

$('btn-1').addEventListener("click", function(){
    window.location.href = "/explore/colorid.html";
});