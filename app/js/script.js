const btnHamburger = document.querySelector("#btnHamburger");

btnHamburger.addEventListener("click", () => {
	console.log("click hamburger");

	btnHamburger.classList.toggle("open");
});
