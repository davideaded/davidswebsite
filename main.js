import { changeTheme, createNavBar, displayMobileNav, indicateCurrentPage, changeMainContent } from "./utils";

const pages = ["Home", "About", "Projects"];
const mainNav = document.getElementById("main-nav");
const mobileNavMenu = document.getElementById("menu");

changeTheme();
createNavBar(mobileNavMenu, pages);
createNavBar(mainNav, pages);
displayMobileNav();
indicateCurrentPage();
changeMainContent();