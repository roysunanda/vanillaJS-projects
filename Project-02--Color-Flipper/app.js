// spellchecker: disable
"use strict";

let min = 0;
let max = 255;
function RGBgenerate() {
	let value = [];
	let RGB = "rgb()".split("");
	for (let i = 0; i < 3; i++) {
		value.push(Math.floor(Math.random() * (max - min + 1) + min));
	}
	RGB.splice(4, 0, value.toString());
	return RGB.join("");
}

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
	let rgbColor = RGBgenerate();
	document.body.style.backgroundColor = rgbColor;
	color.textContent = rgbColor;
	console.log(rgbColor);
});
