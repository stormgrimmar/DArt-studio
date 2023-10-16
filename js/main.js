var button = document.getElementById("myButton");
var modal = document.getElementById("myModal");

button.onclick = function () {
  modal.style.display = "block";
};

var close = document.getElementsByClassName("close")[0];
close.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 10;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide"))
          animItem.classList.remove("_active");
      }
    }
  }
}
function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.scrollX || document.documentElement.scrollLeft,
    scrollTop = window.scrollY || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}
setTimeout(() => {
  animOnScroll();
}, 400);

// slider //

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: "true",
  effect: "coverflow",
  slidesPerView: 1,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// Планый скроллинг

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Отменяем стандартное поведение ссылки
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth", // Добавляем плавный скроллинг
    });
  });
});
