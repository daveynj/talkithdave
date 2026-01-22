import { useEffect } from "react";
import davePhoto from "@assets/my_professional_photo_1767370992057.png";

export default function Home() {
  useEffect(() => {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(button => {
      button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        if (!faqItem) return;
        const isOpen = faqItem.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(item => {
          item.classList.remove('open');
        });
        if (!isOpen) {
          faqItem.classList.add('open');
        }
      });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        const target = document.querySelector(href);
        if (target) {
          const navbarEl = document.querySelector('.navbar') as HTMLElement;
          const navHeight = navbarEl ? navbarEl.offsetHeight : 0;
          const targetPosition = (target as HTMLElement).offsetTop - navHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
      if (!navbar) return;
      const currentScroll = window.pageYOffset;
      if (currentScroll > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    if (mobileMenuBtn && navLinks) {
      mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-open');
        mobileMenuBtn.classList.toggle('active');
      });
    }

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

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
:root {
    --primary: #1a56db;
    --primary-dark: #1e429f;
    --primary-light: #3f83f8;
    --accent: #0ea5e9;
    
    --bg-white: #ffffff;
    --bg-light: #f8fafc;
    --bg-section: #f1f5f9;
    --bg-card: #ffffff;
    
    --text-dark: #1e293b;
    --text-body: #475569;
    --text-muted: #64748b;
    --text-light: #94a3b8;
    
    --border-light: #e2e8f0;
    --border-medium: #cbd5e1;
    
    --success: #10b981;
    --warning: #f59e0b;
    
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    
    --radius-sm: 6px;
    --radius-md: 10px;
    --radius-lg: 16px;
    --radius-xl: 24px;
    --radius-full: 9999px;
    
    --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --container-max: 1200px;
}

*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-sans);
    background: var(--bg-white);
    color: var(--text-body);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
}

a {
    color: inherit;
    text-decoration: none;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

.container {
    width: 100%;
    max-width: var(--container-max);
    margin: 0 auto;
    padding: 0 24px;
}

/* ===== NAVBAR ===== */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 16px 0;
    background: transparent;
    transition: all 0.3s ease;
}

.navbar.scrolled {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow-sm);
    border-bottom: 1px solid var(--border-light);
}

.nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--container-max);
    margin: 0 auto;
    padding: 0 24px;
}

.nav-logo {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--primary);
    font-style: italic;
}

.nav-links {
    display: flex;
    gap: 32px;
}

.nav-links a {
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--text-body);
    transition: color 0.2s ease;
}

.nav-links a:hover {
    color: var(--primary);
}

.nav-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    background: var(--primary);
    color: white;
    font-weight: 600;
    font-size: 0.9375rem;
    border-radius: var(--radius-md);
    transition: all 0.2s ease;
}

.nav-cta:hover {
    background: var(--primary-dark);
    transform: translateY(-1px);
}

.mobile-menu-btn {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
}

.mobile-menu-btn span {
    width: 22px;
    height: 2px;
    background: var(--text-dark);
    transition: all 0.2s ease;
}

/* ===== HERO SECTION ===== */
.hero {
    padding: 140px 0 80px;
    background: linear-gradient(180deg, var(--bg-light) 0%, var(--bg-white) 100%);
}

.hero-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.hero-content {
    max-width: 560px;
}

.hero-title {
    font-size: clamp(2.25rem, 4vw, 3rem);
    font-weight: 800;
    color: var(--text-dark);
    line-height: 1.15;
    margin-bottom: 20px;
}

.hero-subtitle {
    font-size: 1.125rem;
    color: var(--text-body);
    margin-bottom: 12px;
}

.hero-subtitle strong {
    color: var(--text-dark);
}

.hero-offer {
    font-size: 1rem;
    color: var(--primary);
    font-weight: 500;
    margin-bottom: 8px;
}

.hero-cta-group {
    margin-top: 24px;
}

.btn-primary-lg {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 16px 32px;
    background: var(--primary);
    color: white;
    font-size: 1.0625rem;
    font-weight: 600;
    border-radius: var(--radius-md);
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0 4px 14px rgba(26, 86, 219, 0.25);
}

.btn-primary-lg:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(26, 86, 219, 0.35);
}

.btn-primary-lg svg {
    width: 20px;
    height: 20px;
}

.hero-trust-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 32px;
}

.trust-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.875rem;
    color: var(--text-muted);
}

.trust-badge svg {
    width: 18px;
    height: 18px;
    color: var(--primary);
}

.trust-badge.success svg {
    color: var(--success);
}

.hero-image {
    display: flex;
    justify-content: center;
    position: relative;
}

.hero-photo-wrapper {
    position: relative;
    max-width: 400px;
}

.hero-photo {
    width: 100%;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-xl);
}

.hero-badge {
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    background: white;
    border-radius: var(--radius-full);
    box-shadow: var(--shadow-lg);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-dark);
    white-space: nowrap;
}

.hero-badge-flag {
    font-size: 1.125rem;
}

/* ===== SOCIAL PROOF BAR ===== */
.proof-bar {
    padding: 24px 0;
    background: var(--bg-white);
    border-bottom: 1px solid var(--border-light);
}

.proof-items {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
}

.proof-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9375rem;
    color: var(--text-body);
}

.proof-item svg {
    width: 18px;
    height: 18px;
    color: var(--primary);
}

.proof-divider {
    width: 4px;
    height: 4px;
    background: var(--border-medium);
    border-radius: 50%;
}

/* ===== WHO IS THIS FOR SECTION ===== */
.audience-section {
    padding: 80px 0;
    background: var(--bg-white);
}

.section-header {
    text-align: center;
    margin-bottom: 48px;
}

.section-title {
    font-size: clamp(1.75rem, 3vw, 2.25rem);
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 12px;
}

.section-subtitle {
    font-size: 1.0625rem;
    color: var(--text-muted);
    max-width: 600px;
    margin: 0 auto;
}

.audience-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
}

.audience-card {
    text-align: center;
    padding: 32px 24px;
    background: var(--bg-light);
    border-radius: var(--radius-lg);
    transition: all 0.3s ease;
}

.audience-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
}

.audience-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 20px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: white;
}

.audience-card h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 8px;
}

.audience-card p {
    font-size: 0.9375rem;
    color: var(--text-muted);
}

/* ===== WHAT YOU GET SECTION ===== */
.benefits-section {
    padding: 80px 0;
    background: var(--bg-section);
}

.benefits-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
}

.benefit-card {
    text-align: center;
    padding: 32px 24px;
    background: var(--bg-white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    border: 1px solid var(--border-light);
}

.benefit-icon {
    width: 64px;
    height: 64px;
    margin: 0 auto 20px;
    background: var(--bg-light);
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
}

.benefit-icon svg {
    width: 32px;
    height: 32px;
}

.benefit-card h3 {
    font-size: 1.0625rem;
    font-weight: 600;
    color: var(--text-dark);
    margin-bottom: 8px;
}

.benefit-card p {
    font-size: 0.9375rem;
    color: var(--text-muted);
}

/* ===== TESTIMONIAL SECTION ===== */
.testimonial-section {
    padding: 80px 0;
    background: var(--bg-white);
}

.testimonial-featured {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    padding: 48px;
    background: linear-gradient(135deg, var(--bg-light) 0%, #e0e7ff 100%);
    border-radius: var(--radius-xl);
}

.testimonial-quote-mark {
    font-size: 4rem;
    color: var(--primary);
    line-height: 1;
    margin-bottom: 16px;
    opacity: 0.3;
}

.testimonial-text {
    font-size: 1.25rem;
    font-style: italic;
    color: var(--text-dark);
    line-height: 1.7;
    margin-bottom: 24px;
}

.testimonial-rating {
    display: flex;
    justify-content: center;
    gap: 4px;
    margin-bottom: 20px;
}

.testimonial-rating svg {
    width: 20px;
    height: 20px;
    color: var(--warning);
    fill: var(--warning);
}

.testimonial-author {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
}

.author-avatar {
    width: 56px;
    height: 56px;
    background: var(--primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1rem;
    color: white;
}

.author-info {
    text-align: left;
}

.author-info strong {
    display: block;
    font-size: 1rem;
    color: var(--text-dark);
}

.author-info span {
    font-size: 0.875rem;
    color: var(--text-muted);
}

/* ===== VIDEO SECTION ===== */
.video-section {
    padding: 80px 0;
    background: var(--bg-section);
}

.video-container {
    max-width: 800px;
    margin: 0 auto;
}

.video-wrapper {
    position: relative;
    padding-bottom: 56.25%;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-xl);
}

.video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

/* ===== ABOUT SECTION ===== */
.about-section {
    padding: 80px 0;
    background: var(--bg-white);
}

.about-content {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 48px;
    align-items: start;
}

.about-image-wrapper {
    position: relative;
}

.about-photo {
    width: 100%;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
}

.about-badge {
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    background: white;
    border-radius: var(--radius-full);
    box-shadow: var(--shadow-md);
    font-size: 0.8125rem;
    font-weight: 600;
    white-space: nowrap;
}

.about-text h2 {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--text-dark);
    margin-bottom: 16px;
}

.about-text p {
    color: var(--text-body);
    margin-bottom: 16px;
}

.about-credentials {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 24px;
}

.credential {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--text-dark);
}

.credential svg {
    width: 18px;
    height: 18px;
    color: var(--success);
}

/* ===== FAQ SECTION ===== */
.faq-section {
    padding: 80px 0;
    background: var(--bg-section);
}

.faq-grid {
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.faq-item {
    background: var(--bg-white);
    border: 1px solid var(--border-light);
    border-radius: var(--radius-md);
    overflow: hidden;
}

.faq-question {
    width: 100%;
    padding: 20px 24px;
    background: none;
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    text-align: left;
    font-family: var(--font-sans);
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-dark);
}

.faq-icon {
    font-size: 1.25rem;
    color: var(--primary);
    transition: transform 0.3s ease;
}

.faq-answer {
    max-height: 0;
    padding: 0 24px;
    overflow: hidden;
    transition: all 0.3s ease;
    color: var(--text-body);
    font-size: 0.9375rem;
}

.faq-item.open .faq-answer {
    max-height: 300px;
    padding: 0 24px 20px;
}

.faq-item.open .faq-icon {
    transform: rotate(45deg);
}

/* ===== FINAL CTA SECTION ===== */
.final-cta {
    padding: 80px 0;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    text-align: center;
}

.final-cta-content h2 {
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    font-weight: 700;
    color: white;
    margin-bottom: 12px;
}

.final-cta-content p {
    font-size: 1.125rem;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 32px;
}

.final-cta-content p strong {
    color: white;
}

.btn-white-lg {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 16px 32px;
    background: white;
    color: var(--primary);
    font-size: 1.0625rem;
    font-weight: 600;
    border-radius: var(--radius-md);
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: var(--shadow-lg);
}

.btn-white-lg:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-xl);
}

.final-trust {
    display: flex;
    justify-content: center;
    gap: 32px;
    margin-top: 32px;
    flex-wrap: wrap;
}

.final-trust-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.85);
}

/* ===== FOOTER ===== */
.footer {
    padding: 48px 0 24px;
    background: var(--text-dark);
    color: rgba(255, 255, 255, 0.7);
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
}

.footer-logo {
    font-size: 1.125rem;
    font-weight: 600;
    color: white;
    font-style: italic;
}

.footer-links {
    display: flex;
    gap: 24px;
}

.footer-links a {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
    transition: color 0.2s ease;
}

.footer-links a:hover {
    color: white;
}

.footer-bottom {
    text-align: center;
    padding-top: 24px;
    margin-top: 24px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.8125rem;
}

/* ===== ANIMATIONS ===== */
.animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.animate-visible {
    opacity: 1;
    transform: translateY(0);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
    .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .hero-content {
        max-width: 100%;
    }
    
    .hero-trust-badges {
        justify-content: center;
    }
    
    .hero-image {
        order: -1;
    }
    
    .hero-photo-wrapper {
        max-width: 320px;
    }
    
    .about-content {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .about-image-wrapper {
        max-width: 280px;
        margin: 0 auto;
    }
    
    .about-credentials {
        justify-content: center;
    }
}

@media (max-width: 768px) {
    .nav-links, .nav-cta {
        display: none;
    }
    
    .mobile-menu-btn {
        display: flex;
    }
    
    .nav-links.mobile-open {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        padding: 24px;
        gap: 16px;
        border-bottom: 1px solid var(--border-light);
        box-shadow: var(--shadow-md);
    }
    
    .audience-grid, .benefits-grid {
        grid-template-columns: 1fr;
        max-width: 400px;
        margin: 0 auto;
    }
    
    .proof-items {
        flex-direction: column;
        gap: 16px;
    }
    
    .proof-divider {
        display: none;
    }
    
    .testimonial-featured {
        padding: 32px 24px;
    }
    
    .final-trust {
        flex-direction: column;
        gap: 16px;
    }
}
      ` }} />

      {/* Navigation */}
      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <a href="#" className="nav-logo">Talk with Dave</a>
          <div className="nav-links" id="navLinks">
            <a href="#audience">Who It's For</a>
            <a href="#benefits">What You Get</a>
            <a href="#about">About Dave</a>
            <a href="#faq">FAQ</a>
          </div>
          <a href="https://calendly.com/daveynj113/your-first-lesson" target="_blank" className="nav-cta">
            Book Free Session
          </a>
          <button className="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-title">Command the Boardroom<br />in English.</h1>
              <p className="hero-subtitle">
                The <strong>25-hour transformation</strong> for Finance, Medical, and Sales executives who need to speak with authority.
              </p>
              <p className="hero-offer"><strong>Free 30-Minute</strong> Assessment to Start</p>
              <div className="hero-cta-group">
                <a href="https://calendly.com/daveynj113/your-first-lesson" target="_blank" className="btn-primary-lg">
                  Book Your Free Session
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
              <div className="hero-trust-badges">
                <div className="trust-badge success">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  Industry-Specific Training
                </div>
                <div className="trust-badge success">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  AI-Built Custom Curriculum
                </div>
                <div className="trust-badge success">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  From Hesitant to Boardroom-Confident
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-photo-wrapper">
                <img src={davePhoto} alt="Dave Jackson - Executive English Coach" className="hero-photo" />
                <div className="hero-badge">
                  <span className="hero-badge-flag">🇬🇧</span>
                  Native UK Speaker
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Social Proof Bar */}
      <section className="proof-bar">
        <div className="container">
          <div className="proof-items">
            <div className="proof-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              150+ Professionals Trained
            </div>
            <div className="proof-divider"></div>
            <div className="proof-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              4.9 Average Rating
            </div>
            <div className="proof-divider"></div>
            <div className="proof-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              15+ Countries Served
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="audience-section" id="audience">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Who Is This For?</h2>
            <p className="section-subtitle">I work with driven professionals who need to communicate with confidence and authority</p>
          </div>
          <div className="audience-grid">
            <div className="audience-card animate-on-scroll">
              <div className="audience-icon">💼</div>
              <h3>Finance & Banking Professionals</h3>
              <p>Investment bankers, asset managers, and corporate finance executives</p>
            </div>
            <div className="audience-card animate-on-scroll">
              <div className="audience-icon">🏥</div>
              <h3>Medical & Healthcare Leaders</h3>
              <p>Physicians, researchers, and healthcare executives</p>
            </div>
            <div className="audience-card animate-on-scroll">
              <div className="audience-icon">📈</div>
              <h3>Sales & Business Executives</h3>
              <p>Account executives, sales directors, and entrepreneurs</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="benefits-section" id="benefits">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Your 25-Hour Transformation</h2>
            <p className="section-subtitle">One package. One price. Complete fluency roadmap built entirely around your profession.</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3>Fluency Evaluation & Feedback</h3>
              <p>Detailed assessment of your current speaking level with actionable improvement areas</p>
            </div>
            <div className="benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <h3>Tailored Learning Plan</h3>
              <p>Custom curriculum built specifically for your industry and career goals</p>
            </div>
            <div className="benefit-card animate-on-scroll">
              <div className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h3>Expert Tips to Achieve Your Goals</h3>
              <p>Proven strategies from 10+ years of coaching executives to boardroom confidence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section" id="testimonials">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">What Professionals Say</h2>
          </div>
          <div className="testimonial-featured animate-on-scroll">
            <div className="testimonial-quote-mark">"</div>
            <p className="testimonial-text">
              Dave's approach is completely different from any English course I've taken. He understood my job as an investment analyst and built lessons around my actual daily tasks. After 3 months, I led my first earnings call in English with complete confidence.
            </p>
            <div className="testimonial-rating">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <div className="testimonial-author">
              <div className="author-avatar">MK</div>
              <div className="author-info">
                <strong>Michael K.</strong>
                <span>Investment Analyst, Singapore</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Meet Dave</h2>
            <p className="section-subtitle">See how I help professionals transform their English confidence</p>
          </div>
          <div className="video-container animate-on-scroll">
            <div className="video-wrapper">
              <iframe 
                src="https://www.youtube.com/embed/oU39nHNpSZY?rel=0&modestbranding=1" 
                title="Meet Dave"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-content animate-on-scroll">
            <div className="about-image-wrapper">
              <img src={davePhoto} alt="Dave Jackson" className="about-photo" />
              <div className="about-badge">
                <span>🇬🇧</span> Native UK
              </div>
            </div>
            <div className="about-text">
              <h2>Meet Dave Jackson</h2>
              <p>
                I'm a native British English speaker with over <strong>10 years of teaching experience</strong> and a <strong>Business Administration degree from the University of Southampton</strong>.
              </p>
              <p>
                What sets me apart isn't my credentials — it's my deep understanding of what professionals actually need. I've worked with executives from Goldman Sachs, McKinsey, and leading hospitals. I know the exact language challenges you face.
              </p>
              <div className="about-credentials">
                <div className="credential">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  10+ Years Teaching Experience
                </div>
                <div className="credential">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Business Degree (Southampton)
                </div>
                <div className="credential">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  150+ Professionals Coached
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <button className="faq-question">
                <span>What happens in the free assessment session?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>In this 30-minute session, I assess your current English level, understand your job requirements, and identify your specific communication challenges. By the end, you'll have a clear roadmap for improvement.</p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                <span>How is this different from regular English courses?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>I don't teach generic "Business English." Everything is built around YOUR job, YOUR industry, and YOUR specific communication needs. If you're a finance executive, we practice earnings calls. If you're a doctor, we practice patient consultations.</p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                <span>What's the full program investment?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>The complete 25-hour transformation program is $750. This includes a fully customized curriculum, all 25 one-hour sessions, and ongoing support between lessons.</p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                <span>How do I know this will work for me?</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>That's exactly why I offer a free assessment first. You'll experience my teaching style, get valuable insights about your English, and only decide afterward if you want to continue with the full program.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="container">
          <div className="final-cta-content animate-on-scroll">
            <h2>Ready to Command the Boardroom?</h2>
            <p>Book your <strong>free 30-minute assessment</strong> and get your personalized transformation roadmap.</p>
            <a href="https://calendly.com/daveynj113/your-first-lesson" target="_blank" className="btn-white-lg">
              Book Your Free Session
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <div className="final-trust">
              <div className="final-trust-item">
                <span>🇬🇧</span> Native UK Speaker
              </div>
              <div className="final-trust-item">
                <span>🎯</span> Industry-Specific Training
              </div>
              <div className="final-trust-item">
                <span>⭐</span> 4.9/5 Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">Talk with Dave</div>
            <div className="footer-links">
              <a href="#audience">Who It's For</a>
              <a href="#benefits">What You Get</a>
              <a href="#about">About</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Talk with Dave. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
