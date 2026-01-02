// ===== FAQ Accordion =====
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const isOpen = faqItem.classList.contains('open');

        // Close all other FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('open');
        });

        // Toggle current item
        if (!isOpen) {
            faqItem.classList.add('open');
        }
    });
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Navbar Background on Scroll =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.8)';
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ===== Mobile Menu Toggle =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-open');
        mobileMenuBtn.classList.toggle('active');
    });
}

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add animation classes to elements
document.querySelectorAll('.section-header, .problem-card, .step-card, .industry-card, .pricing-card, .testimonial-card, .about-content').forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
});

// ===== Add animation styles dynamically =====
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Stagger animations for grids */
    .problem-grid .animate-visible:nth-child(2) { transition-delay: 0.1s; }
    .problem-grid .animate-visible:nth-child(3) { transition-delay: 0.2s; }
    .problem-grid .animate-visible:nth-child(4) { transition-delay: 0.3s; }
    
    .industries-grid .animate-visible:nth-child(2) { transition-delay: 0.1s; }
    .industries-grid .animate-visible:nth-child(3) { transition-delay: 0.2s; }
    
    .testimonials-grid .animate-visible:nth-child(2) { transition-delay: 0.1s; }
    .testimonials-grid .animate-visible:nth-child(3) { transition-delay: 0.2s; }
    .testimonials-grid .animate-visible:nth-child(4) { transition-delay: 0.3s; }
    
    /* Mobile menu styles */
    @media (max-width: 768px) {
        .nav-links.mobile-open {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(10, 10, 15, 0.98);
            padding: 24px;
            gap: 16px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .mobile-menu-btn.active span:nth-child(1) {
            transform: rotate(45deg) translate(6px, 6px);
        }
        
        .mobile-menu-btn.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-btn.active span:nth-child(3) {
            transform: rotate(-45deg) translate(6px, -6px);
        }
    }
`;
document.head.appendChild(animationStyles);

// ===== Button Hover Effect =====
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mouseenter', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        this.style.setProperty('--x', `${x}px`);
        this.style.setProperty('--y', `${y}px`);
    });
});

// ===== Typing Effect for Hero Badge (optional enhancement) =====
const heroBadge = document.querySelector('.hero-badge');
if (heroBadge) {
    heroBadge.style.opacity = '0';
    heroBadge.style.transform = 'translateY(-10px)';

    setTimeout(() => {
        heroBadge.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        heroBadge.style.opacity = '1';
        heroBadge.style.transform = 'translateY(0)';
    }, 300);
}

// ===== Console Welcome Message =====
console.log('%c🇬🇧 Talk with Dave - Executive English Coaching', 'font-size: 16px; font-weight: bold; color: #6366f1;');
console.log('%cBuilt for professionals who need to speak with authority.', 'font-size: 12px; color: #888;');
