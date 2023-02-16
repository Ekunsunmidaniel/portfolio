const year = document.querySelector(".year");
const links = document.querySelectorAll("a");
const header = document.querySelector(".header");
const sectionHero = document.querySelector("#section-hero");
const btnNav = document.querySelector(".btn-mobile-nav");
const form = document.querySelector('.contact-form');
const formInput = form.querySelectorAll('.input');
const formMessage = form.querySelector('.message');

// Set current year
const currentYear = new Date().getFullYear();
year.innerHTML = currentYear;

// Mobile Navigation buttons
btnNav.addEventListener('click', function() {
    header.classList.toggle('nav-open');
})

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    console.log(link);
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to link
    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});


// Form

form.addEventListener('submit', e => {
    e.preventDefault();
    formInput.forEach(input => {
        input.value = "";
    });
    formMessage.value = '';
});