const menuIcon = document.querySelector("#menu_icon");
const navBar = document.querySelector(".main-headrer_navbar");
menuIcon.addEventListener("click", () => {
	menuIcon.classList.toggle("bx-x");
	navBar.classList.toggle("active");
});
