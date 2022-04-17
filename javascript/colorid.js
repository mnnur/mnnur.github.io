const $ = function (id) {
    return document.getElementById(id);
};

function updateRGBValue(r, g, b) {
    $('r').value = r;
    $('g').value = g;
    $('b').value = b;
}

function updateHSVValue(h, s, v) {
    $('h').value = convertToDegree(h);
    $('s').value = convertToPercent(s);
    $('v').value = convertToPercent(v);
}

function convertToDegree(h) {
    return Math.round(h * 360);
}

function convertToPercent(value) {
    return Math.round(value * 100);
}

$('colorPicker').addEventListener("input", function () {
    let color = this.value;
    let rgb = hexToRgb(color);
    let red = rgb[0];
    let green = rgb[1];
    let blue = rgb[2];
    let hsv = RGBtoHSB(red, green, blue);
    $('view').style.backgroundColor = color;
    $('colorHex').value = color;
    updateRGBValue(red, green, blue);
    updateHSVValue(hsv[0], hsv[1], hsv[2]);
});

$('colorHex').addEventListener("input", function () {
    let color = this.value;
    let rgb = hexToRgb(color);
    let red = rgb[0];
    let green = rgb[1];
    let blue = rgb[2];
    let hsv = RGBtoHSB(red, green, blue);
    $('view').style.backgroundColor = color;
    $('colorPicker').value = color;
    updateRGBValue(red, green, blue);
    updateHSVValue(hsv[0], hsv[1], hsv[2]);
});

function hexToRgb (hex){
    return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
        , (m, r, g, b) => '#' + r + r + g + g + b + b)
        .substring(1).match(/.{2}/g)
        .map(x => parseInt(x, 16))
}

function decimalToHex(d, padding) {
    let hex = Number(d).toString(16);
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
        let red = $('r').value;
        let green = $('g').value;
        let blue = $('b').value;
        let color = RGBtoHex(red, green, blue);
        let hsv = RGBtoHSB(red, green, blue);
        $('view').style.backgroundColor = color;
        $('colorPicker').value = color;
        $('colorHex').value = color;
        updateHSVValue(hsv[0], hsv[1], hsv[2]);
    }
})

function RGBtoHSB(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, v = max;

    let d = max - min;
    s = max == 0 ? 0 : d / max;

    if (max == min) {
        h = 0; // achromatic
    } else {
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h, s, v];
}

function HSBtoRGB(h, s, v) {
    let r, g, b;
    let i;
    let f, p, q, t;
    s = s / 100;
    v = v / 100;
    if (s == 0) {
        r = g = b = v;
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }
    h = h / 360;
    h *= 6;
    i = Math.floor(h);
    f = h - i;
    p = v * (1 - s);
    q = v * (1 - s * f);
    t = v * (1 - s * (1 - f));
    switch (i) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

document.addEventListener("input", function (e) {
    if (e.target.id === 'h' || e.target.id === 's' || e.target.id === 'v') {
        let h = $('h').value;
        let s = $('s').value;
        let v = $('v').value;
        let rgb = HSBtoRGB(h, s, v);
        let red = rgb[0];
        let green = rgb[1];
        let blue = rgb[2];
        let color = RGBtoHex(red, green, blue);
        $('view').style.backgroundColor = color;
        $('colorPicker').value = color;
        $('colorHex').value = color;
        updateRGBValue(red, green, blue);
    }
});

$('uploadImage').addEventListener("change", function() {
    changeImage(this);
  });
  
  function changeImage(input) {
    let reader;
  
    if (input.files && input.files[0]) {
      reader = new FileReader();
  
      reader.onload = function(e) {
        $("imageDisplay").setAttribute('src', e.target.result);
      }
  
      reader.readAsDataURL(input.files[0]);
    }
  }