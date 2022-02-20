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

let num = 0;
let multiplier = 1;

setInterval(function () {
    num += multiplier;
    if (num > 100){
        num = 100;
    }
    $("loadpercent").textContent = num + "%";
    if(num === 100){
         window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=1s";
    }
    multiplier += num;
}, 1000);

