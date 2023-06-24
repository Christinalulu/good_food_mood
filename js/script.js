
const menuIcon = document.querySelector("#menu_icon")
const navBar = document.querySelector(".navbar_menu")

menuIcon.addEventListener('click' , () => {
   menuIcon.classList.toggle('bx-x');
   navBar.classList.toggle('active');
})