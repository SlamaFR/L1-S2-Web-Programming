"use strict";

let ajax_fruits = new XMLHttpRequest();
let ajax_prices = new XMLHttpRequest();

ajax_fruits.onload = function () {
    let json = JSON.parse(ajax_fruits.responseText);
    let table = document.getElementById("basket");
    let quantity = document.getElementById("quantity");
    let price = document.getElementById("price");

    let totalPrice = 0;
    ajax_prices.send();

    ajax_prices.onload = function () {
        let json_2 = JSON.parse(ajax_prices.responseText);
        for (let i = 0; i < json.length; i++) {
            table.innerHTML += "<tr><td>" + json[i].name + "</td><td>" + json[i].quantity + "</td><td>" + json_2[i].price + "</td></tr>";
            totalPrice += json[i].quantity * json_2[i].price;
        }

        quantity.innerText = json.reduce((acc, val) => {
            return acc + val.quantity;
        }, 0);
        price.innerText = totalPrice;
    };
};

ajax_fruits.open("GET", "fruits.json", true);
ajax_prices.open("GET", "prices.json", true);
ajax_fruits.overrideMimeType("application/json");
ajax_prices.overrideMimeType("application/json");
ajax_fruits.send();