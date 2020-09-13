const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");

btnHamburger.addEventListener("click", () => {
	console.log("click hamburger");

	header.classList.toggle("open");
});
