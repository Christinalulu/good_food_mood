const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search_result");
const conatiner = document.querySelector(".content");
let searchQuery = "";
const APP_ID = "8bb43601";
const APP_KEY = "24d8a66c7aafccf59f81d282dd3e55ee";

searchForm.addEventListener("submit", (e) => {
	e.preventDefault();
	searchQuery = e.target.querySelector("input").value;
	fetchApi();
});

async function fetchApi() {
	const BASE_URL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}&to=28`;
	const response = await fetch(BASE_URL);
	const data = await response.json();
	generateHTML(data.hits);
}
function generateHTML(results) {
	let generatedHTML = "";
	results.map((result) => {
		generatedHTML += `
      <div class="card">
			<img src="${result.recipe.image}" alt="food">
			<div class="inner_card">
					<h2 class="inner-card_title">${result.recipe.label}</h2>
				</div>
	<p>Calories: ${result.recipe.calories.toFixed(2)} </p>
      <p>Cuisine: ${result.recipe.cuisineType} </p>
      <p>Dish: ${result.recipe.dishType} </p>
		<a class="btn_view" href="${result.recipe.url}" target="_blank">View more</a>
		</div>
      `;
	});
	searchResultDiv.innerHTML = generatedHTML;
}
