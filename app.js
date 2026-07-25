alert("1. app.js loaded");

const btn = document.getElementById("sendBtn");

if (btn) {
  alert("2. Found the button!");

  btn.addEventListener("click", function () {
    alert("3. Button clicked!");
  });
} else {
  alert("Button NOT found!");
}