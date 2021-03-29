const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav__link');

navToggle.addEventListener('click', () => { //when we click we want to do a function
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})