"use strict";

const COLORS = [
    "Cornsilk", "BlanchedAlmond", "Bisque", "NavajoWhite", "Wheat",
    "BurlyWood", "Tan", "RosyBrown", "SandyBrown", "Goldenrod",
    "DarkGoldenrod", "Peru", "Chocolate", "SaddleBrown", "Sienna",
    "Brown", "Maroon"
];

function graph(canvasId, array) {
    if (array.length === 0) {
        throw "array.length === 0";
    }

    let min = array.reduce(function (a, b) {
        return (a < b) ? a : b;
    });
    let max = array.reduce(function (a, b) {
        return (a < b) ? b : a;
    });

    let canvas = document.getElementById(canvasId);
    let context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.strokeStyle = "black";
    context.moveTo(0, canvas.height / 2);
    context.lineTo(canvas.width, canvas.height / 2);
    context.stroke();

    //context.translate(0, canvas.height / 2);
    //context.scale(canvas.width / array.length, canvas.height / (min - max) / 2);


    array.forEach(function (v, i) {
        context.fillStyle = COLORS[((v >= 0) ? v : -v) % COLORS.length];
        context.fillRect((i + 0.1) * canvas.width / array.length, canvas.height / 2, 0.8 * canvas.width / array.length, v * canvas.height / (min - max) / 2);

        context.strokeText(v, (i + 0.4) * canvas.width / array.length, canvas.height / 10);
    });
}


function addThree(array) {
    /*
    let result = [];
    for (let i = 0; i < array.length; i++) result[i] = array[i] + 3;
    return result
    */
    return array.map(e => e + 3);
}

function applyForEachElement(array, f) {
    array.forEach(function (e, i) {
        array[i] = f(e);
    });
}

function addThree2(array) {
    let result = array.slice();
    applyForEachElement(result, function (e) {
        return e + 3;
    });
    return result
}

function sortedArray(array) {
    let result = array.slice();
    return result.sort((a, b) => a - b);
}

function positiveArray(array) {
    return array.filter(e => e >= 0);
}