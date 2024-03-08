const pages = ["Home", "About", "Projects"];
const mobileNav = document.getElementById("mobile-nav");
const mobileNavMenu = document.getElementById("menu");

document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
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

    aElement.href = `${page.toLowerCase()}`;
    aElement.textContent = page;

    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
  });

  parentDiv.appendChild(ulElement);
}

createNavBar(mobileNavMenu);