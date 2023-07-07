
const form = document.getElementById("form-recipes");
const titleInput = document.getElementById("titleInput");
const errorMessage = document.getElementById("error_msg");
const image = document.getElementById("image_input");
const description = document.getElementById("textarea_input");
const recipesContainer = document.getElementById("recipes-card");
const add = document.getElementById("add")

form.addEventListener("submit", (e) => {
	e.preventDefault();
	formValidation();
});

let formValidation = () => {
	if (titleInput.value === "") {
		errorMessage.innerHTML = "This can not be empty";	
	} else {
		errorMessage.innerHTML = "";
		acceptData();
      add.setAttribute("data-bs-dismiss", "modal")
      add.click()
      (() =>{
         add.setAttribute("data-bs-dismiss", "")
      })
	}
};

let data = {};
let acceptData = () => {
	data["title"] = titleInput.value;
	data["image"] = image.value;
	data["description"] = description.value;
	createRecipes();
};

let createRecipes = () => {
	recipesContainer.innerHTML += `
   <div>
   <div class="recipes-card_text">
			<h4>${data.title}</h4>
				<p>${data.description}</p>
			</div>
		<div class="recipes-card_image">
			<img src=${data.image} />
		</div>
		<span class="option">
			<i onClick="editRecipes(this)" data-bs-toggle="modal" data-bs-target="#form-recipes"   class="bx bxs-edit"></i>
			<i onClick="deleteRecipes(this)" class="bx bxs-trash"></i>
		</span>
   </div>
   `;
   resteFrom();
};

let deleteRecipes = (e) => {
e.parentElement.parentElement.remove();
}

let resteFrom = () =>{
   titleInput.value = ""
	 image.value= ""
	description.value = ""
}