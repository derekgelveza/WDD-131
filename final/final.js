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

/* followed this tutorial: https://www.kirupa.com/animations/animated_3d_starfield_effect.htm*/
let outerspace = document.querySelector("#outerspace");
let mainContext = outerspace.getContext('2d');

let canvasWidth = outerspace.width;
let canvasHeight = outerspace.height;

let centerX = canvasWidth * 0.5;
let centerY = canvasHeight * 0.5;

let numberOfStars = 500;

let stars = [];

let frames_per_second = 60;

let interval = Math.floor(1000 / frames_per_second);
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

    this.context = mainContext;
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

    let xRatio = this.x / this.counter;
    let yRatio = this.y / this.counter;

    let starX = remap(xRatio, 0, 1, 0, canvasWidth);
    let starY = remap(yRatio, 0, 1, 0, canvasHeight);

    this.radius = remap(this.counter, 0, canvasWidth, this.radiusMax, 0);

    mainContext.beginPath();

    mainContext.arc(starX, starY, this.radius, 0, Math.PI * 2, false);
    mainContext.closePath();

    mainContext.fillStyle = "#FFF";
    mainContext.fill();
  }
}

function setup() {
  for (let i = 0; i < numberOfStars; i++) {
    let star = new Star();
    stars.push(star);
  }
}
setup();

function draw(timestamp) {
  currentTime = timestamp;
  deltaTime = currentTime - previousTime;

  if (deltaTime > interval) {
    previousTime = currentTime - (deltaTime % interval);

    mainContext.clearRect(0, 0, canvasWidth, canvasHeight);
    mainContext.fillStyle = "#111";
    mainContext.fillRect(0, 0, canvasWidth, canvasHeight);

    mainContext.translate(centerX, centerY);

    for (let i = 0; i < stars.length; i++) {
      let star = stars[i];
      star.drawStar();
    }

    mainContext.translate(-centerX, -centerY);
  }

  requestAnimationFrame(draw);
}
draw();

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function remap(value, istart, istop, ostart, ostop) {

  value = Number(value);
  istart = Number(istart);
  istop = Number(istop);
  ostart = Number(ostart);
  ostop = Number(ostop);


  return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
}

const slides = [
    {
        title: "Nutrition App",
        text: "Imagine a world where healthy eating is effortless, personalized, and tailored to your lifestyle. Our app, FridgeAI, does exactly that. By analyzing the ingredients you already have at home and your personal dietary goals, it generates meal suggestions complete with nutritional information — calories, protein, carbs, and fats — so you always know what you’re eating. No more guessing, no more wasted food, and no more complicated meal planning. FridgeAI not only saves time and money, but it also helps you stay on track with your health and fitness goals, making every meal a step toward a healthier, smarter lifestyle. In short: your fridge, your goals, intelligently combined.",
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
  titleEl.textContent = slides[index].title;
  textEl.textContent = slides[index].text;
  imgEl.src = slides[index].img;
  imgEl.alt = slides[index].title;
}

renderSlide(currentIndex);

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  renderSlide(currentIndex);
});

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  renderSlide(currentIndex);
});

function renderSlide(index) {
  titleEl.style.opacity = 0;
  textEl.style.opacity = 0;
  imgEl.style.opacity = 0;

  setTimeout(() => {
    titleEl.textContent = slides[index].title;
    textEl.textContent = slides[index].text;
    imgEl.src = slides[index].img;

    titleEl.style.opacity = 1;
    textEl.style.opacity = 1;
    imgEl.style.opacity = 1;
  }, 200);
}
