// script.js

const themeToggle = document.getElementById('theme-toggle');
const themeLink = document.getElementById('theme-link');

themeToggle.addEventListener('click', function() {
    if (themeLink.getAttribute('href') === 'styles.css') {
        themeLink.setAttribute('href', 'light-mode.css');
        themeToggle.textContent = 'Alternar para Dark Mode';
    } else {
        themeLink.setAttribute('href', 'styles.css');
        themeToggle.textContent = 'Alternar para Light Mode';
    }
});

