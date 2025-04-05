document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.section');

    function showSection(sectionId) {
        sections.forEach(section => {
            section.style.display = 'none';
        });
        const sectionToShow = document.getElementById(sectionId);
        if (sectionToShow) {
            sectionToShow.style.display = 'block';
        }
        // Update the URL hash for better navigation
        window.location.hash = sectionId;
    }

    // Show section based on hash in URL or default to home
    function loadSectionFromHash() {
        const hash = window.location.hash.substring(1); // Remove the '#'
        if (hash && document.getElementById(hash)) {
            showSection(hash);
        } else {
            showSection('home');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSectionId = this.getAttribute('href').substring(1); // Remove the '#'
            showSection(targetSectionId);
        });
    });

    // Load section on initial page load
    loadSectionFromHash();

    // Listen for hash changes (e.g., if user uses back/forward buttons)
    window.addEventListener('hashchange', loadSectionFromHash);
});
