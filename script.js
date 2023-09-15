const navToggle = document.getElementById("nav-toggle");
const navLinkUl = document.querySelector('.nav-links ul');
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll('section');
const navLogo = document.getElementById("nav-logo");

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset > (sectionTop - (sectionHeight / 3))) {
            section.classList.replace('opacity-0','opacity-100');
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach((navLink) => {
        navLink.classList.remove('active');
        if (navLink.classList.contains(current)) {
            navLink.classList.add('active');
        }
        navLink.addEventListener('click', () => {
            navLinkUl.classList.remove('toggle');
        });
    });
});

navToggle.addEventListener('click', () => {
    navLinkUl.classList.toggle("toggle");
})

navLogo.addEventListener("click", () => {
  if(navLinkUl.classList.contains("toggle")){
    navLinkUl.classList.remove("toggle");
  }
});






