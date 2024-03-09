let currentPage = "home";

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}

const changeTheme = () => {

  document.addEventListener("DOMContentLoaded", () => {
    const isDarkMode = localStorage.getItem("darkMode");
    isDarkMode === "true" ? toggleDarkMode() : null;
  })

  document.getElementById("theme-toggle").addEventListener("click", () => {
    toggleDarkMode();

    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode.toString());
  })
}

const setCurrentPage = (page) => {
  currentPage = page;
}

const createNavItem = (page, onClickHandler) => {
  const liElement = document.createElement("li");

  liElement.classList.add(page.toLowerCase(), "page-link");
  liElement.textContent = page;
  liElement.addEventListener("click", onClickHandler);

  return liElement;
}

const createNavBar = (parentDiv, pages) => {
  const ulElement = document.createElement("ul");

  const onItemClick = (page) => {
    setCurrentPage(page.toLowerCase());
    displayCurrentPage();
    hideMobileNav();
  };

  pages.forEach(page => {
    const liElement = createNavItem(page, () => onItemClick(page));
    ulElement.appendChild(liElement);
  });

  parentDiv.appendChild(ulElement);
}


const hideMobileNav = () => {
  const mobileNav = document.getElementById("mobile-nav");
  mobileNav.style.width = "0";
  mobileNav.style.left = "100%";
}

const displayMobileNav = () => {
  const mobileNavElement = document.getElementById("mobile-nav");

  document.getElementById("h-menu").addEventListener("click", () => {
    mobileNavElement.style.width = "100%";
    mobileNavElement.style.left = "0";
  })

  document.getElementById("close-nav")
    .addEventListener("click", () => hideMobileNav(mobileNavElement))
}

const setPageTitle = () => {
  const newPageTitle = currentPage === "home" ? "David's Website" : currentPage;
  document.getElementById("page-title").innerText = newPageTitle.charAt(0).toUpperCase() + newPageTitle.slice(1);
}

const displayCurrentPage = () => {
  setPageTitle();
  document.querySelectorAll(".current-page").forEach(e => e.classList.remove("current-page"));

  document.querySelectorAll(`.${currentPage}`)
    .forEach(e => e.classList.add('current-page'));
}


export { changeTheme, createNavBar, displayMobileNav, displayCurrentPage };