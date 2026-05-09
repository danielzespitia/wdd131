document.addEventListener("DOMContentLoaded", function() {
    try {
        const yearElement = document.getElementById("currentyear");
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        
        if (yearElement) {
            yearElement.textContent = currentYear;
        }

        const lastModifiedElement = document.getElementById("lastModified");
        const lastModifiedDate = document.lastModified;
        
        if (lastModifiedElement) {
            lastModifiedElement.textContent = "Last Modified: " + lastModifiedDate;
        }

    } catch (error) {
        console.error("Error in getdates.js:", error);
    }
});