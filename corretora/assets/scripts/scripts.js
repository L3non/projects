/* == == == Contacts button == == == */

const trigger = document.querySelector('menu > .trigger');
trigger.addEventListener('click', (e) => {
    e.currentTarget.parentElement.classList.toggle('open');
})

/* == == == Header == == == */

const navMenu = document.getElementById('nav_menu'),
    navToggle = document.getElementById('nav_toggle'),
    navClose = document.getElementById('nav_close')

// Menu show
navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show_menu')
})

// Menu hidden
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show_menu')
})

// Show Dropdown Menu
const dropdownItems = document.querySelectorAll('.drop_item');
 
// 1. Select each dropdown item
dropdownItems.forEach((item) => {
    const dropdownButton = item.querySelector('.drop_btn');

    // 2. Select each button click
    dropdownButton.addEventListener('click', () => {
       
        // 7. Select the current show_drop class
        const showDropdown = document.querySelector('.show_drop');

        // 5. Call the toggleItem function
        toggleItem(item);

        // 8. Remove the show_dropdown class from other items
        if (showDropdown && showDropdown !== item) {
            toggleItem(showDropdown);
        }
    });
})
 
// 3. Create a function to display the dropdown
const toggleItem = (item) => {
    // 3.1. Select each dropdown content
    const dropdownContainer = item.querySelector('.drop_container');
 
    // 6. If the same item contains the show_drop class, remove
    if (item.classList.contains('show_drop')) {
        dropdownContainer.removeAttribute('style');
        item.classList.remove('show_drop');
    } else {
        // 4. Add the maximum heigh to the dropdown content and add the show_drop class
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px';
        item.classList.add('show_drop');
     }
}

// Delete dropdown styles
const mediaQuery = matchMedia('(min-width: 1118px)'), dropdownContainer = document.querySelectorAll('.drop_container');
 
// Function to remove dropdown styles in mobile mode when browser resizes
const removeStyle = () => {
    // Validate if the media query raches 1118px
    if (mediaQuery.matches) {
        // Remove the dropdown container height style
        dropdownContainer.forEach((e) => {
        e.removeAttribute('style');
        });
 
        // Remove the show_drop class from dropdown item
        dropdownItems.forEach((e) => {
            e.classList.remove('show_drop');
        });
    }
}
addEventListener('resize', removeStyle);

/* == == == Search == == == */

const search = document.getElementById('search'),
    searchBtn = document.getElementById('search_btn'),
    searchClose = document.getElementById('search_close')

// Search show
searchBtn.addEventListener('click', () =>{
    search.classList.add('show_search')
})

// Search hidden
searchClose.addEventListener('click', () =>{
    search.classList.remove('show_search')
})

/* == == == Hero == == == */

let slider = document.querySelector('.slider .list'),
    items = document.querySelectorAll('.slider .list .item'),
    next = document.getElementById('next'),
    prev = document.getElementById('prev'),
    dots = document.querySelectorAll('.slider .dots li'),
    lengthItems = items.length - 1,
    active = 0;

next.onclick = function() {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}

prev.onclick = function() {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}

let refreshInterval = setInterval(()=> {next.click()}, 3000);

function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';

    let last_active_dot = document.querySelector('.slider .dots li.active');

    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 7000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
        active = key;
        reloadSlider();
    })
})

window.onresize = function(event) {
    reloadSlider();
};