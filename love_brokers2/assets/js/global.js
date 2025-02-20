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