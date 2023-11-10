const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");  });