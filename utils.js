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

const createNavBar = (parentDiv, pages) => {
  const ulElement = document.createElement("ul");

  pages.forEach(page => {
    const liElement = document.createElement("li");
    const aElement = document.createElement("a");

    liElement.classList = page.toLowerCase();

    aElement.href = page.toLowerCase();
    aElement.textContent = page;

    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
  });

  parentDiv.appendChild(ulElement);
}

const displayMobileNav = (mobileNavElement) => {
  document.getElementById("h-menu").addEventListener("click", () => {
   mobileNavElement.style.width = "100%";
   mobileNavElement.style.left = "0";

    const closeNav = document.getElementById("close-nav");
    closeNav.addEventListener("click", () => {
     mobileNavElement.style.width = "0";
     mobileNavElement.style.left = "100%";
    })
  })
}

const setPageTitle = (currentPage) => {
  const pageTitle = currentPage === "home" ? "David's Website" : currentPage.charAt(0).toUpperCase() + currentPage.slice(1);
  document.getElementById("page-title").innerText = pageTitle;
}

const displayCurrentPage = () => {
  let currentPath = window.location.pathname.substring(1).toLowerCase();
  if (currentPath === '') currentPath = "home";
  setPageTitle(currentPath);

  const linkElements = document.querySelectorAll(`.${currentPath}`);
  linkElements.forEach(e => e.classList.add('current-page'));
}


export { changeTheme, createNavBar, displayMobileNav, displayCurrentPage };