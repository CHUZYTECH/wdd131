// Menu toggle functionality for mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Toggle the navigation links when the hamburger icon is clicked
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Form validation for the contact page
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

// Function to validate form inputs
form.addEventListener('submit', (e) => {
    let valid = true;
    
    // Check name input
    if (nameInput.value.trim() === '') {
        valid = false;
        alert('Name is required.');
    }

    // Check email input
    if (emailInput.value.trim() === '') {
        valid = false;
        alert('Email is required.');
    }

    // Check message input
    if (messageInput.value.trim() === '') {
        valid = false;
        alert('Message is required.');
    }

    // If any input is invalid, prevent form submission
    if (!valid) {
        e.preventDefault();
    }
});

// Example of using localStorage (can be added to a page, e.g., to store user preferences)
localStorage.setItem('userPreferences', JSON.stringify({ theme: 'dark', language: 'en' }));
