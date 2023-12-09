document.addEventListener("DOMContentLoaded", () => {
  const navbarLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section-container");
    let currentSectionId = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight - 50) {
        currentSectionId = section.id;
      }
    });

    navbarLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  });
});