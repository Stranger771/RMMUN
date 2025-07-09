const Eltimer = document.querySelector(".timer");
const nav = document.querySelector(".nav-bar");
const header = document.querySelector("#landing");
const items = document.querySelectorAll(".nav-item");
const submitBtn = document.querySelector(".contact-form form");
// const presentTime = new Date();
// const day = presentTime.getDate();
// const hours = presentTime.getHours();
// const min = presentTime.getMinutes();
// const targetDate = []
// Eltimer.textContent = `${day}:${hours}:${min}`;
// console.log(day, hours, min);
const targetDate = new Date("2024-11-01T00:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(() => {
  // Get current date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const distance = targetDate - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the timer element
  Eltimer.innerHTML = `
                ${String(days).padStart(2, "0")}:${String(hours).padStart(
    2,
    "0"
  )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}
            `;

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(countdown);
    Eltimer.innerHTML = "Countdown Finished!";
  }
}, 1000);
console.log(items);
//NAV BAR STICKY
const heightNav = nav.getBoundingClientRect().height;
const stickyNav = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
    items.forEach((item) => {
      item.classList.add("list-style");
      document.querySelector(".logo h3").style.color = "white";
    });
  } else {
    nav.classList.remove("sticky");
    items.forEach((item) => {
      item.classList.remove("list-style");
      document.querySelector(".logo h3").style.color = "white";
    });
  }
};
const observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${-heightNav}px`,
});
observer.observe(header);

//Email
// console.log(submitBtn);
// emailjs.init("ismailjadoon20@gmail.com");
// submitBtn.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let params = {
//     userEmail: e.target.elements.userEmail.value,
//     sender: e.target.elements.name.value,
//     message: e.target.elements.text.value,
//   };
//   const serviceId = "service_vwayzym";
//   const templateId = "template_qviw6vf";
//   emailjs
//     .send(serviceId, templateId, params)
//     .then((resolve) => {
//       alert("Email send Successfuly");
//     })
//     .catch((err) => {
//       alert("Error Occured");
//     });
// });

//nav bar for mobile
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

  // }else{
  //     document.querySelector('.nav-bar').style.width = '0px';
  //     document.querySelector('.nav-bar').style.padding = '0px 0px';
  //     document.querySelector('.toggleButton').style.transform = 'rotateY(0)'
  //     search.style.width = '0';
  //     search.style.opacity = '0';
  //     clicked = false
  //     isClicked = false
  // }
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
// document.querySelector(".landing-btn").addEventListener("click", (e) => {
//   const coords = document
//     .querySelector("#multi-container")
//     .getBoundingClientRect();
//   window.scrollTo({
//     left: coords.x + window.pageXOffset,
//     top: coords.y + window.pageYOffset,
//     behavior: "smooth",
//   });
// });
document.querySelector(".register-btn").addEventListener("click", (e) => {
  location.href = "registration/registration.html";
});
const handleLinks = function (e) {
  if (!e.target.classList.contains("nav-item")) return;
  const links = e.target;
  const siblings = links.closest(".nav-bar").querySelectorAll(".nav-item");
  const logo = links.closest(".nav-bar").querySelector("img");
  siblings.forEach((sibling) => {
    if (sibling !== links) {
      sibling.style.opacity = this;
    }
  });
  logo.style.opacity = this;
};
nav.addEventListener("mouseover", handleLinks.bind(0.5));
nav.addEventListener("mouseout", handleLinks.bind(1));
