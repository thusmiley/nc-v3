// Mobile menu
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const nav = document.querySelector("#header-nav");
const overlay = document.querySelector(".overlay");
function openNav() {
  overlay.style.height = "100%";
  openMenu.classList.add("active");
  closeMenu.classList.add("active");
  nav.classList.add("active");
  console.log("working");
}
function closeNav() {
  overlay.style.height = "0%";
  openMenu.classList.remove("active");
  closeMenu.classList.remove("active");
  nav.classList.remove("active");
}
// =============Scroll animations
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("load", () => {
  handleScrollAnimation();
});

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
