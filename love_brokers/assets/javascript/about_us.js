/* == == == Scroll reveal == == == */
sr.reveal(`#hero h1, #hero p`, {
    duration: '1800',
    delay: '2100',
    interval: '180',
});

sr.reveal(`#quote_content, #team_images`, {
    origin: 'left',
    duration: '1500',
    delay: '300',
})

sr.reveal(`#quote_img, #team_text`, {
    origin: 'right',
    duration: '1500',
    delay: '300',
})