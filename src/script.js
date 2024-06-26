const display = document.querySelector("#displayInput");

function appendToDisplay(input) {
  //   console.log("next");
  display.value += input;
}
function clearDisplay() {
  //   console.log("next");
  display.value = "";
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
function clearDigits() {
  display.value = display.value.toString().slice(0, -1);
}
function percentCalculate() {
  try {
    //display.value += percent.id;
    display.value = eval(display.value) / 100;
  } catch (error) {
    display.value = "Error";
  }
}

//for toggle icon
const toggleIcon = document.querySelector(".toggle-icon");
const darkMode = document.querySelector(".dark-mode");
const toggle = document.querySelector(".fa-toggle-on");
toggleIcon.addEventListener("click", () => {
  darkMode.classList.toggle("dark");
  toggle.classList.toggle("fa-flip-horizontal")
 // toggle.classList.remove(".fa-flip-vertical")
});
