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
    duration: '2100',
    delay: '1500',
    // reset: true, // Animations repeat
});

sr.reveal(`#whatsapp a`, {
    origin: 'bottom',
    delay: '2400',
    distance: '150px',
});

sr.reveal(`.footer_col h4`, {
    delay: '150',
    interval: '150',
    duration: '720',
});

sr.reveal(`.footer_col li, .social_links a`, {
    origin: 'left',
    delay: '90',
    interval: '90',
    duration: '150',
});

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