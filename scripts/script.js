document.addEventListener("DOMContentLoaded", function () {
    // Set current year
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    
    // Set last modified date
    document.getElementById("lastModification").textContent = "Last Modification: " + document.lastModified;
});
