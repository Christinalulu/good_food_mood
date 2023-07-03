const menuIcon = document.querySelector("#menu_icon");
const navBar = document.querySelector(".navbar_menu");
menuIcon.addEventListener("click", () => {
	menuIcon.classList.toggle("bx-x");
	navBar.classList.toggle("active");
});

const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search_result");
const conatiner = document.querySelector(".content");
let searchQuery = "";
const APP_ID = "8bb43601";
const APP_KEY = "24d8a66c7aafccf59f81d282dd3e55ee";

searchForm.addEventListener("submit", (e) => {
	e.preventDefault();
	searchQuery = e.target.querySelector("input").value;
	console.log(searchQuery);
	fetchApi();
});

async function fetchApi() {
	const BASE_URL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}&to=20`;
	const response = await fetch(BASE_URL);
	console.log({ response });
	const data = await response.json();
	generateHTML(data.hits);
	console.log(data);
}
function generateHTML(results) {
	let generatedHTML = "";
	results.map((result) => {
		generatedHTML += `
      <div class="card">
			<img src="${result.recipe.image}" alt="food">
			<div class="inner_card">
					<h2 class="title">${result.recipe.label}</h2>
					<a class="btn_view" href="${result.recipe.url}" target="_blank">View more</a>
				</div>
      <p>Calories: ${result.recipe.calories.toFixed(2)} </p>
      <p>Cuisine: ${result.recipe.cuisineType} </p>
      <p>Dish: ${result.recipe.dishType} </p>
		</div>
      `;
	});
   searchResultDiv.innerHTML = generatedHTML;
}
