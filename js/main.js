const hamburger = document.querySelector('.nav__hamburger');
const navMenu = document.querySelector('.nav__menu');

hamburger.addEventListener('click', function(e) {
    hamburger.classList.toggle('active');
    if(hamburger.classList.contains("active")) {
        $('.nav__menu').slideDown(600);
    }
    else {
        $('.nav__menu').slideUp(600);
    }
});


