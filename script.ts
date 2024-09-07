// Example: Adding a simple dark mode toggle

const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };
  
  const button = document.createElement('button');
  button.textContent = 'Toggle Dark Mode';
  button.addEventListener('click', toggleDarkMode);
  
  document.body.appendChild(button);
  