const nav = document.querySelector("nav");
    nav.classList.add('hide');

const menuButton = document.querySelector(".menu-botton");

function toggleMenu(){
    nav.classList.toggle("hide");
};

menuButton.addEventListener("click", toggleMenu);