let tabsLinks = [...document.querySelectorAll(".tabs__link")];

let tabsCards = [...document.querySelectorAll(".tabs__card")];

let tabsContainer = document.querySelector(".tabs__cards");

tabsLinks.forEach((elem, index) => elem.addEventListener("click", tabsLinkClicked));

function tabsLinkClicked(e) {
  if (e.target.classList.contains("active")) {
    return;
  }
  tabsLinks.forEach((elem, index) => {
    if (elem.classList.contains("active")) {
      elem.classList.remove("active");
    }
  });
  e.target.classList.toggle("active");
  let clickedCategory = e.target.getAttribute("data-category");
  tabsContainer.setAttribute("data-category", `${clickedCategory}`);
  categoryCheck();
}

function categoryCheck() {
  let currentCategory = tabsContainer.dataset.category;
  tabsCards.forEach((elem, index) => {
    let elementCategories = elem.getAttribute("data-category").split(" ");
    elem.classList.remove("visible");
    elem.style.display = "none";

    setTimeout(() => {
      if (elementCategories.indexOf(currentCategory) != -1) {
        elem.style.display = "flex";
        setTimeout(() => elem.classList.add("visible"), 200);
      }
    }, 200);
  });
}

categoryCheck();
