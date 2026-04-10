document.addEventListener('DOMContentLoaded', () => {
    // Form submission tracking
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const btn = contactForm.querySelector('button[type="submit"]');
            btn.innerHTML = 'PROCESSING...';
            btn.style.opacity = '0.7';
            btn.style.pointerEvents = 'none';
        });
    }

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Console easter egg
    console.log('%c RISAL LABS // SYS_ONLINE', 'color: #FFD700; background: #0f0d1b; font-size: 20px; font-family: monospace; padding: 10px;');
});
