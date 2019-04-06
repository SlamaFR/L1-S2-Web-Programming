"use strict";

let ajax = new XMLHttpRequest();

ajax.onreadystatechange = function () {
    if (ajax.readyState === 4) {
        let json = JSON.parse(ajax.responseText);
        let table = document.getElementById("basket");
        let quantity = document.getElementById("quantity");

        json.forEach(e => {
            table.innerHTML += "<tr><td>" + e.name + "</td><td>" + e.quantity + "</td></tr>";
        });

        quantity.innerText = json.reduce((acc, val) => {
            return acc + val.quantity;
        }, 0);

    }
};

ajax.open("GET", "fruits.json", true);
ajax.overrideMimeType("application/json");
ajax.send();