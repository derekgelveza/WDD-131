document.addEventListener("DOMContentLoaded", () => {
    const welcomeBar = document.getElementById('welcome-bar');
    const mainNav = document.getElementById('main-nav');

    setTimeout(() => {
        welcomeBar.style.opacity = "0";

        setTimeout(() => {
        welcomeBar.remove();
        mainNav.classList.remove("hidden");
        }, 600);
    }, 2000);
});
