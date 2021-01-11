// initialize variables
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

// behavior

// Opening nav bar and presenting nav links
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// Closing nav bar
navLinks.forEach (link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})