document.addEventListener("DOMContentLoaded", () => {
    
    try {
        const currentYear = new Date().getFullYear();
        const yearElement = document.getElementById("current-year");
        if (yearElement) {
            yearElement.textContent = currentYear;
        }
    } catch (e) {
        console.error("Error getting current year:", e);
    }

    try {
        const lastModified = document.lastModified;
        const modifiedElement = document.getElementById("last-modified");
        if (modifiedElement) {
            modifiedElement.textContent = lastModified;
        }
    } catch (e) {
        console.error("Error getting last modified date:", e);
    }

    
    const temperatureC = parseFloat(document.getElementById("temp")?.textContent) || 0;
    const windSpeedKmh = parseFloat(document.getElementById("wind")?.textContent) || 0;

    const windChillElement = document.getElementById("windchill");
    
    function calculateWindChill(temp, speed) {
        return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
    }

    let windChillValue = "N/A";

    if (temperatureC <= 10 && windSpeedKmh > 4.8) {
        const rawWindChill = calculateWindChill(temperatureC, windSpeedKmh);
        windChillValue = `${rawWindChill.toFixed(1)}°C`;
    }

    if (windChillElement) {
        windChillElement.textContent = windChillValue;
    }
});