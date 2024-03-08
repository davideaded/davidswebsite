const pages = ["Home", "About", "Projects"];
const mobileNav = document.getElementById("mobile-nav");
const mainNav = document.getElementById("main-nav");
const mobileNavMenu = document.getElementById("menu");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", () => {
  const isDarkMode = localStorage.getItem("darkMode");
  isDarkMode === "true" ? toggleDarkMode() : null;
})

document.getElementById("theme-toggle").addEventListener("click", () => {
  toggleDarkMode();

  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode.toString());
})

document.getElementById("h-menu").addEventListener("click", () => {
  mobileNav.style.width = "100%";
  mobileNav.style.left = "0";

  const closeNav = document.getElementById("close-nav");
  closeNav.addEventListener("click", () => {
    mobileNav.style.width = "0";
    mobileNav.style.left = "100%";
  })
})

const createNavBar = (parentDiv) => {
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

const displayCurrentPage = () => {
  const currentPath = window.location.pathname.substring(1).toLowerCase();
  console.log(currentPath);

  const linkElements = document.querySelectorAll(`.${currentPath}`);
  if (linkElements) {
    linkElements.forEach(e => e.classList.add('current-page'));
  } else {
    console.log("Current element not found");
  }
}

createNavBar(mobileNavMenu);
createNavBar(mainNav);
displayCurrentPage();