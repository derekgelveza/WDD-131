document.addEventListener("DOMContentLoaded", () => {


  const welcomeBar = document.getElementById("welcome-bar");
  const mainNav = document.getElementById("main-nav");

  if (welcomeBar && mainNav) {
    setTimeout(() => {
      welcomeBar.style.opacity = "0";

      setTimeout(() => {
        welcomeBar.remove();
        mainNav.classList.remove("hidden");
      }, 600);
    }, 2000);
  }

  const slides = [
    {
      title: "Nutrition App",
      text: "Imagine a world where healthy eating is effortless, personalized, and tailored to your lifestyle. My app does exactly that. By analyzing the ingredients you already have at home and your personal dietary goals, it generates meal suggestions complete with nutritional information, calories, protein, carbs, and fats, so you always know what you’re eating. No more guessing, no more wasted food, and no more complicated meal planning. My app will not only help you save time and money, but it also helps you stay on track with your health and fitness goals, making every meal a step toward a healthier, smarter lifestyle.",
      img: "images2/Project1.png"
    },
    {
      title: "Coming Soon",
      text: "Stay tuned for more exciting projects!",
      img: "images2/project-2.png"
    }
  ];

  let currentIndex = 0;

  const titleEl = document.getElementById("project-title");
  const textEl = document.getElementById("project-text");
  const imgEl = document.getElementById("project-img");

  function renderSlide(index) {
    titleEl.style.opacity = 0;
    textEl.style.opacity = 0;
    imgEl.style.opacity = 0;

    setTimeout(() => {
      titleEl.textContent = slides[index].title;
      textEl.textContent = slides[index].text;
      imgEl.src = slides[index].img;
      imgEl.alt = slides[index].title;

      titleEl.style.opacity = 1;
      textEl.style.opacity = 1;
      imgEl.style.opacity = 1;
    }, 200);
  }

  if (titleEl && textEl && imgEl) {
    renderSlide(currentIndex);

    document.getElementById("next")?.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % slides.length;
      renderSlide(currentIndex);
    });

    document.getElementById("prev")?.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      renderSlide(currentIndex);
    });
  }

  const resumeBtn = document.getElementById("resume-btn");
  const modal = document.getElementById("resume-modal");
  const closeBtn = document.getElementById("close-modal");
  const header = modal?.querySelector(".modal-header");

  if (resumeBtn && modal && closeBtn && header) {

    resumeBtn.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });


    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    header.addEventListener("mousedown", (e) => {
      isDragging = true;
      offsetX = e.clientX - modal.offsetLeft;
      offsetY = e.clientY - modal.offsetTop;
    });

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      modal.style.left = `${e.clientX - offsetX}px`;
      modal.style.top = `${e.clientY - offsetY}px`;
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
    });
  }

    const contactBtn = document.getElementById("contact-btn");
    const contactModal = document.getElementById("contact-modal");
    const closeContactBtn = document.getElementById("close-contact");
    const contactHeader = contactModal?.querySelector(".modal-header");

    if (contactBtn && contactModal && closeContactBtn && contactHeader) {

    contactBtn.addEventListener("click", () => {
        contactModal.classList.remove("hidden");
    });

    closeContactBtn.addEventListener("click", () => {
        contactModal.classList.add("hidden");
    });

        let isDraggingContact = false;
    let offsetXContact = 0;
    let offsetYContact = 0;

    contactHeader.addEventListener("mousedown", (e) => {
        isDraggingContact = true;
        offsetXContact = e.clientX - contactModal.offsetLeft;
        offsetYContact = e.clientY - contactModal.offsetTop;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDraggingContact) return;
        contactModal.style.left = `${e.clientX - offsetXContact}px`;
        contactModal.style.top = `${e.clientY - offsetYContact}px`;
    });

    document.addEventListener("mouseup", () => {
        isDraggingContact = false;
    });
    }

    const menuBtn = document.getElementById("menu-btn");
    const phoneMenu = document.getElementById("phone-menu");

    if (menuBtn && phoneMenu) {
    menuBtn.addEventListener("click", () => {
        phoneMenu.classList.toggle("hidden");
    });
    }

});


/*Tutorial followed: https://www.kirupa.com/animations/animated_3d_starfield_effect.htm*/

const outerspace = document.querySelector("#outerspace");
const mainContext = outerspace.getContext("2d");

const canvasWidth = outerspace.width;
const canvasHeight = outerspace.height;

const centerX = canvasWidth * 0.5;
const centerY = canvasHeight * 0.5;

const numberOfStars = 500;
const stars = [];

const frames_per_second = 60;
const interval = Math.floor(1000 / frames_per_second);

let startTime = performance.now();
let previousTime = startTime;
let currentTime = 0;
let deltaTime = 0;

class Star {
  constructor() {
    this.x = getRandomInt(-centerX, centerX);
    this.y = getRandomInt(-centerY, centerY);
    this.counter = getRandomInt(1, canvasWidth);
    this.radiusMax = Math.random() * 2.5 + 0.5;
    this.speed = getRandomInt(1, 5);
  }

  drawStar() {
    this.counter -= this.speed * (deltaTime / 1000);

    if (this.counter < 1) {
      this.counter = canvasWidth;
      this.x = getRandomInt(-centerX, centerX);
      this.y = getRandomInt(-centerY, centerY);
      this.radiusMax = getRandomInt(1, 10);
      this.speed = getRandomInt(20, 80);
    }

    const xRatio = this.x / this.counter;
    const yRatio = this.y / this.counter;

    const starX = remap(xRatio, 0, 1, 0, canvasWidth);
    const starY = remap(yRatio, 0, 1, 0, canvasHeight);

    const radius = remap(this.counter, 0, canvasWidth, this.radiusMax, 0);

    mainContext.beginPath();
    mainContext.arc(starX, starY, radius, 0, Math.PI * 2);
    mainContext.fillStyle = "#FFF";
    mainContext.fill();
  }
}

function setupStars() {
  for (let i = 0; i < numberOfStars; i++) {
    stars.push(new Star());
  }
}
setupStars();

function drawStars(timestamp) {
  currentTime = timestamp;
  deltaTime = currentTime - previousTime;

  if (deltaTime > interval) {
    previousTime = currentTime - (deltaTime % interval);

    mainContext.clearRect(0, 0, canvasWidth, canvasHeight);
    mainContext.fillStyle = "#111";
    mainContext.fillRect(0, 0, canvasWidth, canvasHeight);

    mainContext.translate(centerX, centerY);
    stars.forEach(star => star.drawStar());
    mainContext.translate(-centerX, -centerY);
  }

  requestAnimationFrame(drawStars);
}
drawStars();


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function remap(value, istart, istop, ostart, ostop) {
  return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
}
