function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
  });
}
const scrollUpBtn = document.getElementById("scrollUpBtn");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    scrollUpBtn.classList.remove("hidden");
  } else {
    scrollUpBtn.classList.add("hidden");
  }
});

scrollUpBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
}

function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
  });
}
