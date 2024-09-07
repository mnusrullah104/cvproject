// Example: Adding a simple dark mode toggle
var toggleDarkMode = function () {
    document.body.classList.toggle('dark-mode');
};
var button = document.createElement('button');
button.textContent = 'Toggle Dark Mode';
button.addEventListener('click', toggleDarkMode);
document.body.appendChild(button);
