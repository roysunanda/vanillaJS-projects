// spellchecker: disable
"use strict";

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let min = 0;
let max = hex.length - 1;

function RandomGen() {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function HEXgen() {
	let hexValue = "#";
	for (let i = 0; i < 6; i++) {
		hexValue += hex[RandomGen()];
	}
	return hexValue;
}

// HEXgen();
// console.log(hexValue);

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
	let hexColor = HEXgen();
	document.body.style.backgroundColor = hexColor;
	color.textContent = hexColor;
	console.log(hexColor);
});
