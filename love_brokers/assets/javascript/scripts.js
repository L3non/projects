/* == == == Show menu == == == */
const navMenu = document.querySelector('#nav_menu'),
      navToggle = document.querySelector('#nav_toggle'),
      navClose = document.querySelector('#nav_close')

// Menu show
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show_menu')
    })
}

// Menu hidden
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show_menu')
    })
}

// Remove menu mobile
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
    const navMenu = document.querySelector('#nav_menu')
    // When click on each nav_link, remove the show_menu class
    navMenu.classList.remove('show_menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* == == == Hero == == == */