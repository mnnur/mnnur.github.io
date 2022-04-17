const $ = function (id) {
    return document.getElementById(id);
};

$('colorPicker').addEventListener("input", function () {
    let color = this.value;
    let rgb = hexToRgb(color);
    let red = rgb[0];
    let green = rgb[1];
    let blue = rgb[2];
    $('view').style.backgroundColor = color;
    $('colorHex').value = color;
    $('r').value = red;
    $('g').value = green;
    $('b').value = blue;
});

$('colorHex').addEventListener("input", function () {
    let color = this.value;
    let rgb = hexToRgb(color);
    let red = rgb[0];
    let green = rgb[1];
    let blue = rgb[2];
    $('view').style.backgroundColor = color;
    $('colorPicker').value = color;
    $('r').value = red;
    $('g').value = green;
    $('b').value = blue;
});

const hexToRgb = hex =>
    hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
        , (m, r, g, b) => '#' + r + r + g + g + b + b)
        .substring(1).match(/.{2}/g)
        .map(x => parseInt(x, 16))

function decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = "0" + hex;
    }

    return hex;
}

function RGBtoHex(r, g, b) {
    return "#" + decimalToHex(r) + decimalToHex(g) + decimalToHex(b);
}

document.addEventListener("input", function (e) {
    if (e.target.id === 'r' || e.target.id === 'g' || e.target.id === 'b') {
        let r = $('r').value;
        let g = $('g').value;
        let b = $('b').value;
        let color = RGBtoHex(r, g, b);
        $('view').style.backgroundColor = color;
        $('colorPicker').value = color;
        $('colorHex').value = color;
    }
})