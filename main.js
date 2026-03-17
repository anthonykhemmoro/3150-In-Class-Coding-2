//all the buttons
const catBtn = document.getElementById("catBtn");
const dogBtn = document.getElementById("dogBtn");
const cowBtn = document.getElementById("cowBtn");
const resetBtn = document.getElementById("resetBtn");
//shows the animal boxes
const catBox = document.getElementById("catBox");
const dogBox = document.getElementById("dogBox");
const cowBox = document.getElementById("cowBox");
//animal count
const counter = document.getElementById("counter");
const hideButtons = document.querySelectorAll(".hide-btn");

let count = 0;
//updates the counter
function updateCounter() {
  counter.textContent = "Animals on screen: " + count;
}
//shows the animal thats hiding
function showAnimal(box, button) {
  if (box.classList.contains("hidden")) {
    box.classList.remove("hidden");
    button.classList.add("active");
    count++;
    updateCounter();
  }
}
// hides the animeal thats showing
function hideAnimal(box, button) {
  if (!box.classList.contains("hidden")) {
    box.classList.add("hidden");
    button.classList.remove("active");
    count--;
    updateCounter();
  }
}

catBtn.addEventListener("click", function () {
  showAnimal(catBox, catBtn);
});

dogBtn.addEventListener("click", function () {
  showAnimal(dogBox, dogBtn);
});

cowBtn.addEventListener("click", function () {
  showAnimal(cowBox, cowBtn);
});

hideButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const animal = button.dataset.animal;

    if (animal === "cat") {
      hideAnimal(catBox, catBtn);
    } else if (animal === "dog") {
      hideAnimal(dogBox, dogBtn);
    } else if (animal === "cow") {
      hideAnimal(cowBox, cowBtn);
    }
  });
});
//resets everything to normla
resetBtn.addEventListener("click", function () {
  catBox.classList.add("hidden");
  dogBox.classList.add("hidden");
  cowBox.classList.add("hidden");

  catBtn.classList.remove("active");
  dogBtn.classList.remove("active");
  cowBtn.classList.remove("active");

  count = 0;
  updateCounter();
});