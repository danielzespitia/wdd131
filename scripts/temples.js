document.addEventListener('DOMContentLoaded', () => {
    
    const menuButton = document.querySelector('#menu');
    const navigation = document.querySelector('nav');

    if (menuButton && navigation) {
        menuButton.textContent = '☰'; 

        menuButton.addEventListener('click', () => {
            navigation.classList.toggle('open');
            menuButton.classList.toggle('open');
            
            if (menuButton.classList.contains('open')) {
                menuButton.textContent = 'X'; 
            } else {
                menuButton.textContent = '☰'; 
            }
        });
    }

    const currentYearSpan = document.querySelector('#currentyear');
    if (currentYearSpan) {
        const currentYear = new Date().getFullYear();
        currentYearSpan.textContent = currentYear;
    }

    const lastModifiedSpan = document.querySelector('#lastModified');
    if (lastModifiedSpan) {
        const lastModifiedDate = document.lastModified;
        lastModifiedSpan.textContent = lastModifiedDate;
    }
});