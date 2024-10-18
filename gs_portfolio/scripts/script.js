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

/* == == == == Dark Light Theme == == == == */
const themeBtn = document.getElementById('theme_btn');
const darkTheme = 'dark_theme';
const iconSun = 'fa-sun';
const iconMoon = 'fa-moon';

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected_theme');
const selectedIcon = localStorage.getItem('selected_icon');

// Obtain the current theme and icon based on the class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeBtn.classList.contains(iconMoon) ? 'fa-moon' : 'fa-sun';

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