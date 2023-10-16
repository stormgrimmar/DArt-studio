// Сайдбар

window.addEventListener("scroll", function () {
  var sidebar = document.querySelector(".sidebar");
  if (window.scrollY > 400) {
    sidebar.classList.add("visible");
  } else {
    sidebar.classList.remove("visible");
  }
});

//
