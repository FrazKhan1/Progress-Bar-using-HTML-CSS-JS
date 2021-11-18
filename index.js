let progress = document.querySelector(".progress");
let nextBtn = document.querySelector(".nextButton");
let prevBtn = document.querySelector(".prevButton");
let circles = document.querySelectorAll(".circle");

let currentCircle = 1;

nextBtn.addEventListener("click", () => {
  currentCircle++;
  if (currentCircle > circles.length) {
    currentCircle = circles.length;
  }
  update();
});

prevBtn.addEventListener("click", () => {
  currentCircle--;
  if (currentCircle < 1) {
    currentCircle = 1;
  }
  update();
});

function update() {
  circles.forEach((crl, index) => {
    if (index < currentCircle) {
      crl.classList.add("active");
    } else {
      crl.classList.remove("active");
    }
  });

  let actives = document.querySelectorAll(".active");
  console.log(actives.length, circles.length);
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentCircle === 1) {
    prevBtn.disabled = true;
  } else if (currentCircle === 4) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
    prevBtn.disabled = false;
  }
}
