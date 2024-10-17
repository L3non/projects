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
      navClose = document.getElementById('nav_close'),
      wBtn = document.getElementById('whatsapp')
      scBtn = document.getElementById('scrollTop')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show_menu');
        wBtn.classList.toggle('up');
        scBtn.classList.toggle('up');
        navToggle.classList.toggle('remove');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show_menu')
        wBtn.classList.remove('up');
        scBtn.classList.remove('up');
        navToggle.classList.remove('remove');
    })
}

const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show_menu')
    navToggle.classList.remove('remove');
    wBtn.classList.remove('up');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* == == == == Scroll Sections Active Link == == == == */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // Seleciona o link correto usando o href que corresponde à seção atual
            document.querySelector('#nav_menu a[href*=' + sectionId + ']').classList.add('active_link');
        } else {
            document.querySelector('#nav_menu a[href*=' + sectionId + ']').classList.remove('active_link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/* == == == == Change Background Header == == == == */
function scrollHeader() {
    const nav = document.querySelector('header')

    if (this.scrollY >= 90) nav.classList.add('scroll_header');
    else nav.classList.remove('scroll_header')
}
window.addEventListener('scroll', scrollHeader)

/* == == == == Scroll Top Fixed Button == == == == */
window.addEventListener('scroll', function() {
    let scroll = document.querySelector('#scrollTop')
        scroll.classList.toggle('active', this.window.scrollY > 450)
})

function backTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}