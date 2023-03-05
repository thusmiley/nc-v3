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
// Block background color scrolling animation
$(window)
  .scroll(function () {
    let $window = $(window),
      $body = $("body"),
      $block = $(".block");
    let scroll = $window.scrollTop() + $window.height() / 3;
    $block.each(function () {
      let $this = $(this);
      if (
        $this.position().top <= scroll &&
        $this.position().top + $this.height() > scroll
      ) {
        $body.removeClass(function (index, css) {
          return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
        });

        $body.addClass("color-" + $(this).data("color"));
      }
    });
  })
  .scroll();
