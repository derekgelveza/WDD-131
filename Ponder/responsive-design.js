document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const navLinks = document.querySelectorAll("nav a");

  menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("change");
    
    navLinks.forEach(link => {
      if (link.style.display === "block") {
        link.style.display = "none";
      } else {
        link.style.display = "block";
      }
    });
  });
});
