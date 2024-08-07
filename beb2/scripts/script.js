    /* == == SPLASH SCREEN == == */

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

    /* == == HEADER == == */

// Show Menu
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId), nav = document.getElementById(navId);

    toggle.addEventListener('click', () =>{
        // Add show_menu class to nav menu
        nav.classList.toggle('show_menu');
 
        // Add show-icon to show and hide menu icon
        toggle.classList.toggle('show_icon');
    });
 }
 
showMenu('nav_toggle','nav_menu');

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