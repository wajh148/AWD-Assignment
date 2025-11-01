const themeToggle = document.getElementById('theme-toggle');
let isDarkMode = true;

themeToggle.addEventListener('click', function() {
    isDarkMode = !isDarkMode;
    
    if (isDarkMode) {
        document.body.classList.remove('light-theme');
        themeToggle.textContent = 'Light Mode';
    } else {
        document.body.classList.add('light-theme');
        themeToggle.textContent = 'Dark Mode';
    }
});


