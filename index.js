function showTab(tabName) {
    var tabs = document.querySelectorAll('.nav-link');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    var activeTab = document.getElementById(tabName + '-tab');
    activeTab.classList.add('active');

    var contents = document.querySelectorAll('.tab-content');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    document.getElementById(tabName).style.display = 'block';
}
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');
  
    links.forEach(link => {
      link.addEventListener('click', function() {
        links.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });
  
const themeToggler = document.getElementById('theme-toggler');
const body = document.body;

// Function to set the theme
function setTheme(theme) {
body.classList.toggle('dark-theme', theme === 'dark'); // Apply the dark theme if theme is 'dark'
const currentSrc = themeToggler.getAttribute('src');
const lightThemeSrc = 'https://static.thenounproject.com/png/4157080-200.png';
const darkThemeSrc = 'https://static.vecteezy.com/system/resources/previews/026/625/794/non_2x/light-mode-icon-symbol-design-illustration-vector.jpg';
const newSrc = theme === 'dark' ? darkThemeSrc : lightThemeSrc;
themeToggler.setAttribute('src', newSrc);
}

// Function to toggle the theme and store the preference in local storage
function toggleTheme() {
const isDarkTheme = body.classList.contains('dark-theme');
const theme = isDarkTheme ? 'light' : 'dark'; // Toggle theme between 'light' and 'dark'
console.log('Toggling theme to:', theme); // Debugging statement
localStorage.setItem('theme', theme); // Store the theme preference in local storage
setTheme(theme); // Apply the themehttps://static.thenounproject.com/png/4808961-200.png
}

// Check if a theme preference exists in local storage
const storedTheme = localStorage.getItem('theme');
console.log('Stored theme:', storedTheme); // Debugging statement
if (storedTheme) {
setTheme(storedTheme); // Apply the stored theme preference
}

// Event listener for theme toggler
themeToggler.addEventListener('click', () => {
toggleTheme(); // Toggle theme and store the preference in local storage
});

 
const scriptURL = 'https://script.google.com/macros/s/AKfycbxMs1ouwnb9uMOdWheAwc0a4dR8uD1oBn5c5wLAhFOXIer31ktTbjvXNpEG7hDtvF5GMg/exec'
const form = document.forms['submit-to-google-sheet']
const alertSuccess = document.querySelector('.alert-success');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {
        alertSuccess.classList.add('show'); // Add the 'show' class to display the alert
        form.reset(); // Reset the form
        console.log('Success!', response);
    })
    .catch(error => console.error('Error!', error.message))
    .finally(() => {
        submitBtn.disabled = false; 
    });
});



ScrollReveal().reveal('.container', {
    distance: '500px',
    opacity: 0.8,
    origin: 'bottom'
});

ScrollReveal().reveal('.info-sabari', {
    distance: '500px',
    opacity: 0.8,
    origin: 'left'
});

ScrollReveal().reveal('.imgbox', {
    distance: '500px',
    opacity: 0.8,
    origin: 'right'
});
ScrollReveal().reveal('.skill-card', {
    distance: '500px',
    opacity: 0.8,
    origin: 'bottom'
});
ScrollReveal().reveal('.font-weight-normal', {
    distance: '500px',
    opacity: 0.8,
    origin: 'bottom'
});
ScrollReveal().reveal('.cardgrad1', {
    distance: '100px',
    opacity: 0.8,
    origin: 'bottom'
});
