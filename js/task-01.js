const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.querySelectorAll("li.item");
console.log("Number of categories: " + categoryItems.length);
categoryItems.forEach((item) => {
	const itemTitle = item.querySelector("h2").textContent;
	const itemItems = item.querySelectorAll("ul li");
	console.log("Category: " + itemTitle);
	console.log("Elements: " + itemItems.length);
});
