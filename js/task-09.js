const bodyEl = document.body;
const changeButton = document.querySelector(".change-color");
const spanText = document.querySelector(".color");
function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
changeButton.addEventListener("click", () => {
	bodyEl.style.backgroundColor = getRandomHexColor();
	spanText.textContent = getRandomHexColor();
});
