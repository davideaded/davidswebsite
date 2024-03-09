import { changeTheme, createNavBar, displayMobileNav, displayCurrentPage } from "./utils";

const pages = ["Home", "About", "Projects"];
const mobileNav = document.getElementById("mobile-nav");
const mainNav = document.getElementById("main-nav");
const mobileNavMenu = document.getElementById("menu");

changeTheme();
createNavBar(mobileNavMenu, pages);
createNavBar(mainNav, pages);
displayMobileNav(mobileNav);
displayCurrentPage();