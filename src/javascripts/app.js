import './modules'

console.log('app.js has loaded!');

const siteBody = document.querySelector('body');

// Adds function to toggle a class for
// mobile navigation element display
function toggleNav (e) {
    siteBody.classList.toggle('is-active');
    document.querySelector('.ui-nav-mobile').classList.toggle('is-active');
}
document.querySelector('.ui-menu-btn').addEventListener('click', e => {
    e.preventDefault();
    toggleNav();
    document.querySelector('.ui-menu-btn').classList.add('is-active');
    document.querySelector('.ui-menu-close').focus();
});

document.querySelector('.ui-menu-close').addEventListener('click', e => {
    e.preventDefault();
    toggleNav();
    document.querySelector('.ui-menu-btn').classList.remove('is-active');
    document.querySelector('.ui-menu-btn').focus();
});


// Adds an active class to the
// current page nav item
// Adapted from https://css-tricks.com/snippets/jquery/add-active-navigation-class-based-on-url/
var nav     = document.getElementById('nav'),
    anchor  = nav.getElementsByTagName('a'),
    current = window.location.pathname;
    
for (var i = 0; i < anchor.length; i++) {
    if(anchor[i].pathname == current) {
        anchor[i].className = 'is-active';
    }
}