import './modules'

console.log(`app.js has loaded!`)


const siteBody = document.querySelector('.ui-site-wrapper');

document.querySelector('.js-nav-toggle').addEventListener('click', e => {
  e.preventDefault();

  siteBody.classList.toggle('is-active');
  document.querySelector('.ui-nav').classList.toggle('is-active');
});