/* == == == == Splash Screen == == == == */
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
        },1900);
    });
});

/* == == == == Nav Menu == == == == */
const navMenu = document.getElementById('nav_menu'),
      navToggle = document.getElementById('nav_toggle'),
      navClose = document.getElementById('nav_close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show_menu');
        navToggle.classList.toggle('remove');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show_menu')
        navToggle.classList.remove('remove');
    })
}

const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav_menu')
    
}