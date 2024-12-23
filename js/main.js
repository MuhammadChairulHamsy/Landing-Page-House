// Toggle class active untuk hamburger-menu
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamberger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};


const hm = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
});