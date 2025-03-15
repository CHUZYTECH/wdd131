const menuButton = document.getElementById('menuButton');
const navMenu = document.getElementById('navMenu');

menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
  menuButton.textContent = navMenu.classList.contains('hidden') ? '☰' : '✖';
});

document.addEventListener("DOMContentLoaded", function () {
    // Set current year
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    
    // Set last modified date
    document.getElementById("lastModification").textContent = "Last Modification: " + document.lastModified;
});
