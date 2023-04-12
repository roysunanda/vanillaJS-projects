// spellchecker: disable
"use strict";

let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const style = e.currentTarget.classList;
		// console.log(style);

		style.contains("decrease")
			? count--
			: style.contains("increase")
			? count++
			: (count = 0);

		count > 0
			? (value.style.color = "green")
			: count < 0
			? (value.style.color = "red")
			: (value.style.color = "#222");

		value.textContent = count;
	});
});
