const inputContainer = document.getElementById("font-size-control");
inputContainer.value = inputContainer.getAttribute("min");
const spanText = document.getElementById("text");
inputContainer.addEventListener("input", () => {
	const inputValue = inputContainer.value;
	spanText.style.fontSize = inputValue + "px";
});
