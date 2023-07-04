const menuIcon = document.querySelector("#menu_icon");
const navBar = document.querySelector(".navbar_menu");
menuIcon.addEventListener("click", () => {
	menuIcon.classList.toggle("bx-x");
	navBar.classList.toggle("active");
});

const cardContainer = document.querySelector(".home-container_card");

async function getImageForHome() {
	const url =
		"https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes";
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "ad7236b3fdmsh69d7cf6cd804035p196104jsnad5a3a9d2072",
			"X-RapidAPI-Host": "tasty.p.rapidapi.com",
		},
	};

	try {
		const response = await fetch(url, options);

		const responseJSON = await response.json();
		console.log(response);
		console.log(responseJSON);
		console.log(responseJSON.results);
		generateHomeCardHTML(responseJSON.results);
	} catch (error) {
		console.error(error);
	}
}
getImageForHome();

function generateHomeCardHTML(results) {
	let homeCardHTML = "";

	results.map((data) => {
		// console.log(data);

		homeCardHTML += `
		<div class="home_card">
	 		<a href="${data.original_video_url}" >
				<div class="image">
					<img src="${data.thumbnail_url}" >
				</div>
				<div class="text">
					<h3>${data.name}</h3>
					<p>${data.yields}</p>
				</div>
			</a>
			</div>
		`;
	});

	cardContainer.innerHTML += homeCardHTML;
}
