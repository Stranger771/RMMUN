const Eltimer = document.querySelector(".timer");
const nav = document.querySelector(".nav-bar");
const header = document.querySelector("#landing");
const items = document.querySelectorAll(".nav-item");
const submitBtn = document.querySelector(".contact-form form");

document.querySelector(".bars-icon").addEventListener("click", (e) => {
  // document.querySelector('.toggleButton').style.transform = 'rotateY(180deg)'
  document.querySelector(".nav-bar").style.width = "200px";
  document.querySelector(".nav-bar").style.padding = "10px 20px";
  document.querySelector(".overlay").style.display = "block";
  document.querySelector(".bars-icon").style.transform = "rotateZ(90deg)";
  document.querySelector(".cross-icon").style.transform = "rotateZ(0deg)";
  setTimeout(() => {
    document.querySelector(".overlay").style.opacity = "0.5";
  }, 200);
});
document.querySelector(".cross-icon").addEventListener("click", (e) => {
  document.querySelector(".nav-bar").style.width = "0px";
  document.querySelector(".nav-bar").style.padding = "0px 0px";
  document.querySelector(".overlay").style.display = "none";
  document.querySelector(".bars-icon").style.transform = "rotateZ(0deg)";
  document.querySelector(".cross-icon").style.transform = "rotateZ(90deg)";
  setTimeout(() => {
    document.querySelector(".overlay").style.opacity = "0";
  }, 200);
});
