const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const fadeElements = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", () => {
	console.log("click hamburger");

	if (header.classList.contains("open")) {
		// close menu
		header.classList.remove("open");
		body.classList.remove("noscroll");
		fadeElements.forEach((element) => {
			element.classList.remove("fade-in");
			element.classList.add("fade-out");
		});
	} else {
		// open menu
		header.classList.add("open");
		body.classList.add("noscroll");
		fadeElements.forEach((element) => {
			element.classList.remove("fade-out");
			element.classList.add("fade-in");
		});
	}
});
