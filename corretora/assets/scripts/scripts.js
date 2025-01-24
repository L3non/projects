/* == == == Header == == == */
const navMenu = document.getElementById('nav_menu'),
    navToggle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('nav_close')

/* Menu show */
navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show_menu')
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show_menu')
})

/* == == == Search == == == */
const search = document.getElementById('search'),
    searchBtn = document.getElementById('search_btn'),
    searchClose = document.getElementById('search_close')

/* Search show */
searchBtn.addEventListener('click', () =>{
    search.classList.add('show_search')
})

/* Search hidden */
searchClose.addEventListener('click', () =>{
    search.classList.remove('show_search')
})