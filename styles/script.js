// Toggle Dark Mode
const body = document.body;
const icon = document.getElementById('themeIcon');
icon.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-mode');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    }
});

// Cek Tema yang sedang digunakan
window.onload = function () {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('themeIcon').classList.remove('fa-sun');
        document.getElementById('themeIcon').classList.add('fa-moon');
    }
}

// Toggle Menu
const icon1 = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-list');
icon1.addEventListener('click', () => {
    menu.classList.toggle("hidden");
});
