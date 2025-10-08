// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// News Search
const searchInput = document.getElementById('searchInput');
const newsGrid = document.getElementById('newsGrid');
if (searchInput && newsGrid) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        Array.from(newsGrid.children).forEach(card => {
            card.style.display = card.textContent.toLowerCase().includes(term) ? 'block' : 'none';
        });
    });
}

// Contact Form Demo
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Press submission received! (Demo - Integrate with email service like Formspree for real functionality)');
        contactForm.reset();
    });
}