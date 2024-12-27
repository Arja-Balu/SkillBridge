// Smooth Scroll functionality
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Add Scroll Animations (Fade In Effect)
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 150) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});

// Adding animation for the section visibility
const style = document.createElement('style');
style.innerHTML = `
    section {
        opacity: 0;
        transition: opacity 1s ease-out;
    }
    section.visible {
        opacity: 1;
    }
`;
document.head.appendChild(style);

// Adding more JavaScript Animations - On hover for features
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.2)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    });
});
