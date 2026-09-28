// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
// Form Submission Handling (Prevents page reload and shows alert)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you! We have received your message and will contact you shortly.');
        contactForm.reset();
    });
}

// Franchise Form Submission Handling
const franchiseForm = document.getElementById('franchiseForm');
if (franchiseForm) {
    franchiseForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your interest! Our franchise team will reach out to you shortly.');
        franchiseForm.reset();
    });
}