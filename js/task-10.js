function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
const boxesDiv = document.getElementById("boxes");
function createBoxes(amount) {
	for (let i = 1; i <= amount; i++) {
		const box = document.createElement("div");
		box.style.width = `${30 + i * 10}px`;
		box.style.height = `${30 + i * 10}px`;
		box.style.backgroundColor = getRandomHexColor();
		boxesDiv.appendChild(box);
	}
}

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
createButton.addEventListener("click", () => {
	const input = document.querySelector("input");
	const inputVal = parseInt(input.value);
	createBoxes(inputVal);
});
destroyButton.addEventListener("click", () => {
	const input = document.querySelector("input");
	const inputVal = parseInt(input.value);
	const boxes = boxesDiv.querySelectorAll("div");
	for (let i = 0; (i < inputVal) & (i < boxes.length); i++) {
		boxesDiv.removeChild(boxes[i]);
	}
});
