// Resilience Inc - Main JavaScript

document.addEventListener(‘DOMContentLoaded’, function() {
// Mobile Navigation Toggle
const hamburger = document.querySelector(’.hamburger’);
const navMenu = document.querySelector(’.nav-menu’);

if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
    
    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Pre-fill service field from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const serviceParam = urlParams.get('service');
const serviceSelect = document.getElementById('service');

if (serviceParam && serviceSelect) {
    // Map URL parameters to select values
    const serviceMap = {
        'security': 'security',
        'cloud': 'cloud',
        'devops': 'devops'
    };
    
    if (serviceMap[serviceParam]) {
        serviceSelect.value = serviceMap[serviceParam];
    }
}

// Form Handling
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm && formStatus) {
    contactForm.addEventListener('submit', function(e) {
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        // Formspree will handle the actual submission
        // We just need to handle the UI feedback
        
        // Note: If using Formspree's AJAX submission instead of form post,
        // you would handle it here. For now, we rely on Formspree's redirect.
    });
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation to service cards
const animateElements = document.querySelectorAll('.service-card, .process-step, .trust-item');
animateElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Add active state to navigation based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a[href*=' + sectionId + ']').forEach(link => {
                link.classList.add('active');
            });
        } else {
            document.querySelectorAll('.nav-menu a[href*=' + sectionId + ']').forEach(link => {
                link.classList.remove('active');
            });
        }
    });
});

});

// Add CSS for active nav links dynamically if not in stylesheet
const style = document.createElement(‘style’);
style.textContent = `
.nav-menu a.active {
color: var(–primary-color);
font-weight: 600;
}

.hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
    opacity: 0;
}

.hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
}

`;
document.head.appendChild(style);
