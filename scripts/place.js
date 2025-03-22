// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) + " °C";
    } else {
        return "N/A";
    }
}

// Apply wind chill calculation on page load
document.addEventListener("DOMContentLoaded", () => {
    let temp = parseFloat(document.getElementById("temperature").textContent);
    let windSpeed = parseFloat(document.getElementById("wind-speed").textContent);
    document.getElementById("windchill").textContent = calculateWindChill(temp, windSpeed);
});

document.addEventListener("DOMContentLoaded", function () {
    // Set current year
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    
    // Set last modified date
    document.getElementById("lastModification").textContent = "Last Modification: " + document.lastModified;
});
