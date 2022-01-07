let $ = function(id) {
    return document.getElementById(id);
};

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

