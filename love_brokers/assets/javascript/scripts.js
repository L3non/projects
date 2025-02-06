/* == == == Splash screen == == == */
let intro = document.querySelector('#intro');
let logo = document.querySelector('#logo_header');
let logoSpan = document.querySelectorAll('.logo');

addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{

        // Makes the logo appear the screen
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 300);
        });

        // Makes the slogan go off the screen
        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 250);
            })
        },1100);

        // Makes the splash screen go off the screen
        setTimeout(()=>{
            intro.style.top = '-100vh';
        },1800);
    });
});

/* == == == Scroll reveal == == == */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: '2400',
    // reset: true, // Animations repeat
});

sr.reveal(`.home_data`);
sr.reveal(`#home_images`, {delay: 1800})
/*
sr.reveal(`.services_card`, {interval: 100})
sr.reveal(`.discount_data`, {origin: 'left'})
sr.reveal(`.discount_images`, {origin: 'right'})
*/

/* == == == Scroll up == == == */
const scrollUp = () => {
    const scrollUp = document.querySelector('#scroll_up');
    // When the scroll is higher than 350 viewport height, add the show_scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show_scroll') : scrollUp.classList.remove('show_scroll');
}
addEventListener('scroll', scrollUp);

/* == == == Header == == == */
const navMenu = document.getElementById('nav_menu'),
    navToggle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('nav_close');

// Menu show
navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show_menu');
})

// Menu hidden
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show_menu');
})

const shadowHeader = () => {
    const header = document.querySelector('header');

    // When the scroll is grater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow_header') : header.classList.remove('shadow_header');
}
window.addEventListener('scroll', shadowHeader);

// Light and dark theme
const themeBtn = document.getElementById('theme_btn'),
      darkTheme = 'dark_theme',
      iconSun = 'fa-sun',
      iconMoon = 'fa-moon';

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected_theme'),
      selectedIcon = localStorage.getItem('selected_icon');

// Obtain the current theme and icon based on the class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light',
      getCurrentIcon = () => themeBtn.classList.contains(iconMoon) ? 'fa-moon' : 'fa-sun';

// If a theme was previously selected
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeBtn.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconMoon);
    themeBtn.classList[selectedIcon === 'fa-sun' ? 'add' : 'remove'](iconSun);
}

// Toggle theme and icon manually
themeBtn.addEventListener('click', () => {
    // Toggle the theme
    document.body.classList.toggle(darkTheme);
    
    // Toggle the icon classes
    if (themeBtn.classList.contains(iconMoon)) {
        themeBtn.classList.remove(iconMoon);
        themeBtn.classList.add(iconSun);
    } else {
        themeBtn.classList.remove(iconSun);
        themeBtn.classList.add(iconMoon);
    }

    // Save the current theme and icon in localStorage
    localStorage.setItem('selected_theme', getCurrentTheme());
    localStorage.setItem('selected_icon', getCurrentIcon());
});

/* == == == Main == == == */
// Hero
let swiperHome = new Swiper('.home_swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursos: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
})