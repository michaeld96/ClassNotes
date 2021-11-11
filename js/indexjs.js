const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-dropdown");
var change_display = document.getElementById(".nav-dropdown");
hamburger.addEventListener("click", mobilemenu);
//Adds an active class on hamburger and nav-menu.
function mobilemenu()
{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    // change_display.style.display = "block;
}


