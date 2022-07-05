const hamburgerButton = document.querySelector(".hamburger-button");
const mobileMenu = document.querySelector(".mobile-menu");

hamburgerButton.addEventListener("click", function()
{
    hamburgerButton.classList.toggle("open");
    mobileMenu.classList.toggle("hide");
    document.body.classList.toggle("no-scroll");
});