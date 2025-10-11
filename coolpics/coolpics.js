const nav = document.querySelector("nav");
    nav.classList.add('hide');

const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", toggleMenu)
function toggleMenu(){
    nav.classList.toggle("hide");
};

const galleryImages = document.querySelectorAll(".gallery img")
const dialog = document.querySelector(".image-modal")
const dialogImg = dialog.querySelector(".dialog-img")
const closeButton = dialog.querySelector(".close-viewer")

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        dialogImg.src = img.src;
        dialog.showModal();
    });
});

closeButton.addEventListener('click', (event) => {
    dialog.close();
});

function handleResize(){
    const menu = document.querySelector("nav")
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}
handleResize();
window.addEventListener("resize", handleResize);