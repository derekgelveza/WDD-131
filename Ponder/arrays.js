const exampleSteps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}
const exampleStepsHtml = exampleSteps.map(listTemplate);
document.querySelector("#MyList").innerHTML = exampleStepsHtml.join("");

const grades = ["A", "B", "A"];

function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}

const gpaPoints = grades.map(convertGradeToPoints);
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;


console.log("GPA Points:", gpaPoints);
console.log("Average GPA:", gpa);

const words = ["watermelon", "peach", "apple", "tomato", "grape"];

const shortWords = words.filter(word => word.length < 6);

console.log("Short words:", shortWords); 

const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
const luckyIndex = myArray.indexOf(luckyNumber);

console.log("Lucky number index:", luckyIndex);
