let darktoggler = document.querySelector(".darkmode-toggler");

let elem = document.querySelector(".body");

darktoggler.onclick = function () {
  if (darktoggler.checked) {
    elem.classList.add("dark-theme");
  } else {
    elem.classList.remove("dark-theme");
  }
};
