const currentPage = window.location.href;

const navLinks = document.querySelectorAll(".nav-bar a");

navLinks.forEach((link) => {
  if (link.href === currentPage) {
    link.classList.add("active");
  }
});
