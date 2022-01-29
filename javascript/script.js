let $ = function(id) {
    return document.getElementById(id);
};

function genRandRGBA(){
    const randbg = [];
    for(let i = 0; i < 4; i++){
        let x = Math.floor((Math.random() * 255) + 1);
        randbg.push(x);
    }
    let randRGBA = 'rgba(' + randbg[0] + ',' + randbg[1] + ',' + randbg[2] + ',' + randbg[3] + ')';
    return randRGBA;
}

function changebg() {
    let firstcolor = genRandRGBA();
    let secondcolor = genRandRGBA();
    document.body.style.backgroundImage = 'linear-gradient(to bottom,' + firstcolor + ',' + secondcolor + ')';
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

