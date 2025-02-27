/* == == == Scroll reveal == == == */
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
    delay: '1500',
});

sr.reveal(`.tabs_container li, .search`, {
    origin: 'right',
    distance: '120px',
    delay: '1800',
    interval: '210',
});

sr.reveal(`.item`, {
    delay: '600',
    interval: '90',
    duration: '900',
});

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
    const value = formatString(event.target.value);
    // Select all accordions
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        // Select items within the current accordion
        const items = accordion.querySelectorAll('.items .item');
        // Select the "no results" message for the current accordion
        const noResults = accordion.querySelector('.no_results');
        let hasResults = false;

        if (value !== '') {
            items.forEach(item => {
                const itemDescriptionElement = item.querySelector('.card_description');
                const itemDescription = itemDescriptionElement ? itemDescriptionElement.textContent : '';

                if (formatString(itemDescription).includes(value)) {
                    item.style.display = 'flex';
                    hasResults = true;
                } else {
                    item.style.display = 'none';
                }
            });

            // Show or hide the "no results" message for this accordion
            noResults.style.display = hasResults ? 'none' : 'block';
        } else {
            // Show all items when input is empty
            items.forEach(item => item.style.display = 'flex');
            noResults.style.display = 'none';
        }
    });
});

// Function to format strings: trims spaces, converts to lowercase, and removes accents
function formatString(value) {
    return value
        ? value.trim()
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Removes accent marks
        : ''; // Returns an empty string if undefined or null
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

// Function to check if an accordion has any items and show/hide the "no results" message
function checkNoResults() {
    accordions.forEach(accordion => {
        const itemsContainer = accordion.querySelector('.items'),
              items = itemsContainer.querySelectorAll('.item'),
              noResults = accordion.querySelector('.no_results');

        // Show "no results" message if there are no .item elements inside .items
        if (items.length === 0) {
            noResults.style.display = 'block';
        } else {
            noResults.style.display = 'none';
        }
    });
}

// Run check initially in case the page starts without any items
checkNoResults();

// MutationObserver to monitor changes in the .items container
accordions.forEach(accordion => {
    const itemsContainer = accordion.querySelector('.items');

    if (itemsContainer) {
        const observer = new MutationObserver(() => {
            checkNoResults();
        });

        // Observe changes in the child elements (items added or removed)
        observer.observe(itemsContainer, { childList: true });
    }
});
