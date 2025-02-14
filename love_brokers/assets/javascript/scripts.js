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
    duration: '2400',
    delay: '1800',
    // reset: true, // Animations repeat
});

sr.reveal(`#whatsapp a`, {
    origin: 'bottom',
    delay: '2400',
    distance: '150px',
});

sr.reveal(`.home_data`, {
    origin: 'left',
    delay: '2100',
});


sr.reveal(`#home_images`, {
    origin: 'rigth',
    delay: '2100',
});

sr.reveal(`.tabs_container > ul`, {
    origin: 'left',
    delay: '2400',
    distance: '150px',
});

sr.reveal(`.tabs_container li, .search`, {
    origin: 'right',
    distance: '150px',
    delay: '2700',
    interval: '270',
});

sr.reveal(`.accordion`, {
    origin: 'left',
    delay: '600',
    interval: '90',
    duration: '600',
});

sr.reveal(`.item`, {
    delay: '900',
    interval: '120',
    duration: '900',
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

/* == == == Main == == == */
// Hero
let swiperHome = new Swiper('.home_swiper', {
    loop: true,
    spaceBetween: -15,
    grabCursos: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -21,
        }
    }
});

// Tabs
const tabsContainer = document.querySelector('.tabs_container'),
      tabsList = tabsContainer.querySelector('ul'),
      tabBtns = tabsList.querySelectorAll('a'),
      tabPanels = tabsContainer.querySelectorAll('.tabs_panels > article');

tabsList.setAttribute('role', 'tablist');

tabsList.querySelectorAll('li').forEach((listitem) => {
    listitem.setAttribute('role', 'presentation');
});

tabBtns.forEach((tab, index) => {
    tab.setAttribute('role', 'tab');

    if (index === 0) {
        tab.setAttribute('aria-selected', 'true');
    } else {
        tab.setAttribute('tabindex', '-1');
        tabPanels[index].setAttribute('hidden', '');
    }
});

tabPanels.forEach((panel) => {
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('tabindex', '0');
});

tabsContainer.addEventListener('click', (e) => {
    const clickedTab = e.target.closest('a');
    if (!clickedTab) return;
    e.preventDefault();

    switchTab(clickedTab);
});

tabsContainer.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            moveLeft();
            break;
        case 'ArrowRight':
            moveRight();
            break;
        case 'Home':
            e.preventDefault();
            switchTab(tabBtns[0]);
            break;
        case 'End':
            e.preventDefault();
            switchTab(tabBtns[tabBtns.length - 1]);
            break;
    }
});

function moveLeft() {
    const currentTab = document.activeElement;

    if (!currentTab.parentElement.previousElementSibling) {
        switchTab(tabBtns[tabBtns.length - 1]);
    } else {
        switchTab(currentTab.parentElement.previousElementSibling.querySelector('a'));
    }
}

function moveRight() {
    const currentTab = document.activeElement;

    if (!currentTab.parentElement.nextElementSibling) {
        switchTab(tabBtns[0]);
    } else {
        switchTab(currentTab.parentElement.nextElementSibling.querySelector('a'));
    }
}

function switchTab(newTab) {
    const activePanelId = newTab.getAttribute('href'),
          activePanel = tabsContainer.querySelector(activePanelId);

    tabBtns.forEach((btn) => {
        btn.setAttribute('aria-selected', false);
        btn.setAttribute('tabindex', '-1');
    })
    
    tabPanels.forEach((panel) => {
        panel.setAttribute('hidden', true);
    });
    activePanel.removeAttribute('hidden');
    newTab.setAttribute('aria-selected', true);
    newTab.setAttribute('tabindex', '0');
    newTab.focus();
}

// Search
let searchBtn = document.querySelector('.search_btn'),
    closeBtn = document.querySelector('.close_btn'),
    searchBox = document.querySelector('.search_box');

searchBtn.onclick = function () {
    searchBox.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
}

closeBtn.onclick = function () {
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
}

// Select the search input
const searchInput = document.querySelector('#search');

searchInput.addEventListener('input', (event) => {
    // Stores and formats the input value
    const value = formatString(event.target.value);
    // Select all items
    const items = document.querySelectorAll('.items .item');
    // Select the "no results" message element
    const noResults = document.querySelector('#no_results');
    // Indicates whether there are matching results
    let hasResults = false;

    if (value !== '') {
        items.forEach(item => {
            // Gets the item description element
            const itemDescriptionElement = item.querySelector('.card_description');
            // Checks if the element exists before trying to access the text
            const itemDescription = itemDescriptionElement ? itemDescriptionElement.textContent : '';

            if (formatString(itemDescription).includes(value)) {
                item.style.display = 'flex';
                hasResults = true;
            } else {
                item.style.display = 'none';
            }
        });

        // Display or hide the "no results" message
        noResults.style.display = hasResults ? 'none' : 'block';
    } else {
        // Always display all items when input is empty
        items.forEach(item => item.style.display = 'flex');
        noResults.style.display = 'none';
    }
});

// Function to format strings: removes whitespace, transforms to lowercase and removes accents
function formatString(value) {
    return value
        ? value.trim()
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
        : ''; // Returns empty string if undefined or null
}

// Tabs panels
const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    const header = accordion.querySelector('.accordion_header');
    const body = accordion.querySelector('.accordion_body');

    if (header && body) {
        header.addEventListener('click', () => {
            body.classList.toggle('active');
        });
    }
});

// Card popup
const modal = document.querySelectorAll('.modal'),
      cardBtn = document.querySelectorAll('.card_product'),
      modalClose = document.querySelectorAll('.modal_close'),
      modalCard = document.querySelectorAll('.modal_card');

let activeModal = (modalClick) => {
   modal[modalClick].classList.add('active_modal');
}

// Show modal
cardBtn.forEach((cardBtn, i) => {
    cardBtn.addEventListener('click', () => {
        activeModal(i);
    });
});

// Hide modal
modalClose.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modal.forEach((modalRemove) => {
            modalRemove.classList.remove('active_modal');
        });
   });
});

// Hide modal on background click
modal.forEach((modal) => {
    modal.addEventListener('click', () => {
        modal.classList.remove('active_modal');
    });
});

// Don't hide modal on card click (by event propagation)
modalCard.forEach((modalCard) => {
    modalCard.addEventListener('click', (e) =>{
        e.stopPropagation();
    });
});

// Image carousel
let swiper = new Swiper('.swiper_modal', {
    loop: 'true',

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEL: '.swiper-button-prev',
    },

    autoplay: {
        delay: '3000',
        disableOnInteraction: false,
    },
});