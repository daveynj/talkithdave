import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // ===== FAQ Accordion =====
    const faqQuestions = document.querySelectorAll('.faq-question');
    const handleFaqClick = (button: Element) => {
      const faqItem = button.parentElement;
      if (!faqItem) return;
      const isOpen = faqItem.classList.contains('open');

      // Close all other FAQ items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('open');
      });

      // Toggle current item
      if (!isOpen) {
        faqItem.classList.add('open');
      }
    };

    faqQuestions.forEach(button => {
      button.addEventListener('click', () => handleFaqClick(button));
    });

    // ===== Smooth Scroll for Anchor Links =====
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            const navbar = document.querySelector('.navbar') as HTMLElement;
            const navHeight = navbar ? navbar.offsetHeight : 0;
            const targetPosition = (element as HTMLElement).offsetTop - navHeight;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);

    // ===== Navbar Background on Scroll =====
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
      if (!navbar) return;
      const currentScroll = window.pageYOffset;

      if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
      } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.8)';
        navbar.style.boxShadow = 'none';
      }
    };
    window.addEventListener('scroll', handleScroll);

    // ===== Mobile Menu Toggle =====
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    const handleMobileToggle = () => {
      if (navLinks && mobileMenuBtn) {
        navLinks.classList.toggle('mobile-open');
        mobileMenuBtn.classList.toggle('active');
      }
    };

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', handleMobileToggle);
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

    // ===== Button Hover Effect =====
    document.querySelectorAll('.btn-primary').forEach(btn => {
      btn.addEventListener('mouseenter', function (this: HTMLElement, e: any) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        this.style.setProperty('--x', `${x}px`);
        this.style.setProperty('--y', `${y}px`);
      });
    });

    // ===== Typing Effect for Hero Badge =====
    const heroBadge = document.querySelector('.hero-badge') as HTMLElement;
    if (heroBadge) {
      heroBadge.style.opacity = '0';
      heroBadge.style.transform = 'translateY(-10px)';

      setTimeout(() => {
        heroBadge.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        heroBadge.style.opacity = '1';
        heroBadge.style.transform = 'translateY(0)';
      }, 300);
    }

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', handleScroll);
      if (mobileMenuBtn) mobileMenuBtn.removeEventListener('click', handleMobileToggle);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="exact-user-site">
      <style dangerouslySetInnerHTML={{ __html: `
        /* ===== CSS VARIABLES ===== */
        :root {
            /* Colors - Dark Premium Theme */
            --bg-primary: #0a0a0f;
            --bg-secondary: #12121a;
            --bg-tertiary: #1a1a25;
            --bg-card: rgba(26, 26, 37, 0.8);
            --bg-glass: rgba(255, 255, 255, 0.03);

            --text-primary: #ffffff;
            --text-secondary: rgba(255, 255, 255, 0.7);
            --text-muted: rgba(255, 255, 255, 0.5);

            --accent-primary: #6366f1;
            --accent-secondary: #8b5cf6;
            --accent-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%);

            --success: #10b981;
            --warning: #f59e0b;
            --danger: #ef4444;

            --border-color: rgba(255, 255, 255, 0.1);
            --border-glow: rgba(99, 102, 241, 0.3);

            /* Typography */
            --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            --font-display: 'Playfair Display', Georgia, serif;

            /* Spacing */
            --section-padding: 120px;
            --container-width: 1200px;

            /* Effects */
            --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
            --shadow-md: 0 8px 32px rgba(0, 0, 0, 0.4);
            --shadow-lg: 0 16px 64px rgba(0, 0, 0, 0.5);
            --shadow-glow: 0 0 40px rgba(99, 102, 241, 0.3);

            --radius-sm: 8px;
            --radius-md: 12px;
            --radius-lg: 20px;
            --radius-xl: 32px;

            --transition-fast: 0.2s ease;
            --transition-normal: 0.3s ease;
            --transition-slow: 0.5s ease;
        }

        .exact-user-site {
            font-family: var(--font-primary);
            background: var(--bg-primary);
            color: var(--text-primary);
            line-height: 1.6;
            overflow-x: hidden;
        }

        .exact-user-site *, .exact-user-site *::before, .exact-user-site *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .exact-user-site a { color: inherit; text-decoration: none; }
        .exact-user-site img { max-width: 100%; height: auto; }
        .exact-user-site ul { list-style: none; }
        .exact-user-site .container { width: 100%; max-width: var(--container-width); margin: 0 auto; padding: 0 24px; }
        .exact-user-site h1, .exact-user-site h2, .exact-user-site h3, .exact-user-site h4, .exact-user-site h5, .exact-user-site h6 { font-weight: 700; line-height: 1.2; }
        .exact-user-site .gradient-text { background: var(--accent-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .exact-user-site .text-danger { color: var(--danger); }
        .exact-user-site .section-header { text-align: center; margin-bottom: 60px; }
        .exact-user-site .section-label { display: inline-block; padding: 8px 16px; background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: 100px; font-size: 0.875rem; font-weight: 500; color: var(--accent-primary); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px; }
        .exact-user-site .section-title { font-size: clamp(2rem, 5vw, 3rem); font-weight: 800; margin-bottom: 16px; }
        .exact-user-site .section-subtitle { font-size: 1.125rem; color: var(--text-secondary); max-width: 600px; margin: 0 auto; }
        .exact-user-site .btn { display: inline-flex; flex-direction: column; align-items: center; justify-content: center; padding: 16px 32px; border-radius: var(--radius-md); font-weight: 600; font-size: 1rem; cursor: pointer; border: none; transition: all var(--transition-normal); text-align: center; }
        .exact-user-site .btn-primary { background: var(--accent-gradient); color: white; box-shadow: var(--shadow-glow); }
        .exact-user-site .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 0 60px rgba(99, 102, 241, 0.5); }
        .exact-user-site .btn-secondary { background: var(--bg-glass); border: 1px solid var(--border-color); color: var(--text-primary); }
        .exact-user-site .btn-secondary:hover { background: rgba(255, 255, 255, 0.1); border-color: var(--accent-primary); }
        .exact-user-site .btn-outline { background: transparent; border: 2px solid var(--accent-primary); color: var(--accent-primary); }
        .exact-user-site .btn-outline:hover { background: var(--accent-primary); color: white; }
        .exact-user-site .btn-lg { padding: 20px 40px; font-size: 1.125rem; }
        .exact-user-site .btn-block { width: 100%; }
        .exact-user-site .btn-subtext { font-size: 0.75rem; font-weight: 400; opacity: 0.8; margin-top: 4px; }
        .exact-user-site .navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; padding: 16px 0; background: rgba(10, 10, 15, 0.8); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border-color); transition: all var(--transition-normal); }
        .exact-user-site .nav-container { display: flex; align-items: center; justify-content: space-between; max-width: var(--container-width); margin: 0 auto; padding: 0 24px; }
        .exact-user-site .nav-logo { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 1.25rem; }
        .exact-user-site .logo-icon { font-size: 1.5rem; }
        .exact-user-site .nav-links { display: flex; gap: 32px; }
        .exact-user-site .nav-links a { color: var(--text-secondary); font-weight: 500; transition: color var(--transition-fast); }
        .exact-user-site .nav-links a:hover { color: var(--text-primary); }
        .exact-user-site .nav-cta { display: flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--accent-gradient); border-radius: var(--radius-md); font-weight: 600; transition: all var(--transition-normal); }
        .exact-user-site .nav-cta:hover { transform: translateY(-2px); box-shadow: var(--shadow-glow); }
        .exact-user-site .cta-arrow { transition: transform var(--transition-fast); }
        .exact-user-site .nav-cta:hover .cta-arrow { transform: translateX(4px); }
        .exact-user-site .mobile-menu-btn { display: none; flex-direction: column; gap: 6px; background: none; border: none; cursor: pointer; padding: 8px; }
        .exact-user-site .mobile-menu-btn span { width: 24px; height: 2px; background: var(--text-primary); transition: all var(--transition-fast); }
        .exact-user-site .hero { position: relative; min-height: 100vh; display: flex; align-items: center; padding: 140px 0 80px; overflow: hidden; }
        .exact-user-site .hero-bg { position: absolute; inset: 0; z-index: -1; }
        .exact-user-site .hero-gradient { position: absolute; inset: 0; background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.3), transparent), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(139, 92, 246, 0.15), transparent), radial-gradient(ellipse 40% 30% at 20% 80%, rgba(168, 85, 247, 0.1), transparent); }
        .exact-user-site .hero-container { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; max-width: var(--container-width); margin: 0 auto; padding: 0 24px; }
        .exact-user-site .hero-content { max-width: 600px; }
        .exact-user-site .hero-badge { display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: 100px; font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 24px; }
        .exact-user-site .badge-icon { color: var(--warning); }
        .exact-user-site .hero-title { font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 800; line-height: 1.1; margin-bottom: 24px; }
        .exact-user-site .hero-subtitle { font-size: 1.25rem; color: var(--text-secondary); margin-bottom: 32px; line-height: 1.7; }
        .exact-user-site .hero-features { display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 40px; }
        .exact-user-site .hero-feature { display: flex; align-items: center; gap: 8px; padding: 10px 16px; background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: var(--radius-md); font-size: 0.875rem; }
        .exact-user-site .feature-icon { font-size: 1.125rem; }
        .exact-user-site .hero-cta-group { display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 24px; }
        .exact-user-site .hero-guarantee { display: flex; align-items: center; gap: 8px; font-size: 0.875rem; color: var(--text-muted); }
        .exact-user-site .guarantee-icon { color: var(--success); }
        .exact-user-site .hero-media { display: flex; justify-content: center; }
        .exact-user-site .video-container { position: relative; width: 100%; max-width: 500px; }
        .exact-user-site .video-glow { position: absolute; inset: -20px; background: var(--accent-gradient); border-radius: var(--radius-xl); opacity: 0.3; filter: blur(40px); z-index: -1; }
        .exact-user-site .video-wrapper { position: relative; padding-bottom: 56.25%; border-radius: var(--radius-lg); overflow: hidden; border: 1px solid var(--border-color); background: var(--bg-secondary); }
        .exact-user-site .video-wrapper iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
        .exact-user-site .video-caption { display: flex; align-items: center; gap: 12px; margin-top: 16px; padding: 12px 16px; background: var(--bg-glass); border: 1px solid var(--border-color); border-radius: var(--radius-md); }
        .exact-user-site .caption-avatar { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid var(--accent-primary); }
        .exact-user-site .caption-text { display: flex; flex-direction: column; font-size: 0.875rem; }
        .exact-user-site .caption-text span { color: var(--text-muted); font-size: 0.75rem; }
        .exact-user-site .social-proof-bar { padding: 40px 0; background: var(--bg-secondary); border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); }
        .exact-user-site .proof-items { display: flex; justify-content: center; align-items: center; gap: 48px; flex-wrap: wrap; }
        .exact-user-site .proof-item { display: flex; flex-direction: column; align-items: center; text-align: center; }
        .exact-user-site .proof-number { font-size: 2.5rem; font-weight: 800; background: var(--accent-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .exact-user-site .proof-label { font-size: 0.875rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.05em; }
        .exact-user-site .proof-divider { width: 1px; height: 40px; background: var(--border-color); }
        .exact-user-site .problem-section { padding: var(--section-padding) 0; background: var(--bg-primary); }
        .exact-user-site .problem-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; margin-bottom: 48px; }
        .exact-user-site .problem-card { padding: 32px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); transition: all var(--transition-normal); }
        .exact-user-site .problem-card:hover { transform: translateY(-4px); border-color: var(--danger); box-shadow: 0 8px 32px rgba(239, 68, 68, 0.1); }
        .exact-user-site .problem-icon { font-size: 2.5rem; margin-bottom: 16px; }
        .exact-user-site .problem-card h3 { font-size: 1.25rem; margin-bottom: 12px; }
        .exact-user-site .problem-card p { color: var(--text-secondary); font-size: 0.9375rem; }
        .exact-user-site .problem-cta { text-align: center; }
        .exact-user-site .problem-statement { font-size: 1.25rem; color: var(--text-secondary); }
        .exact-user-site .problem-statement strong { color: var(--text-primary); }
        .exact-user-site .solution-section { padding: var(--section-padding) 0; background: var(--bg-secondary); }
        .exact-user-site .solution-steps { display: flex; flex-direction: column; gap: 32px; margin-bottom: 48px; }
        .exact-user-site .step-card { display: grid; grid-template-columns: auto 1fr; gap: 32px; padding: 40px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); transition: all var(--transition-normal); }
        .exact-user-site .step-card:hover { border-color: var(--accent-primary); box-shadow: var(--shadow-glow); }
        .exact-user-site .step-number { font-size: 3rem; font-weight: 800; background: var(--accent-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; line-height: 1; }
        .exact-user-site .step-content h3 { font-size: 1.5rem; margin-bottom: 12px; }
        .exact-user-site .step-content p { color: var(--text-secondary); margin-bottom: 16px; }
        .exact-user-site .step-highlight { display: inline-flex; align-items: center; gap: 8px; padding: 8px 16px; background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: var(--radius-sm); font-size: 0.875rem; color: var(--accent-primary); }
        .exact-user-site .solution-cta { text-align: center; }
        .exact-user-site .industries-section { padding: var(--section-padding) 0; background: var(--bg-primary); }
        .exact-user-site .industries-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 24px; margin-bottom: 32px; }
        .exact-user-site .industry-card { padding: 32px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); transition: all var(--transition-normal); }
        .exact-user-site .industry-card:hover { transform: translateY(-4px); }
        .exact-user-site .industry-finance:hover { border-color: #10b981; box-shadow: 0 8px 32px rgba(16, 185, 129, 0.15); }
        .exact-user-site .industry-medical:hover { border-color: #3b82f6; box-shadow: 0 8px 32px rgba(59, 130, 246, 0.15); }
        .exact-user-site .industry-sales:hover { border-color: #f59e0b; box-shadow: 0 8px 32px rgba(245, 158, 11, 0.15); }
        .exact-user-site .industry-icon { font-size: 2.5rem; margin-bottom: 16px; }
        .exact-user-site .industry-card h3 { font-size: 1.5rem; margin-bottom: 8px; }
        .exact-user-site .industry-subtitle { font-size: 0.875rem; color: var(--text-muted); margin-bottom: 20px; }
        .exact-user-site .industry-topics { margin-bottom: 20px; }
        .exact-user-site .industry-topics li { padding: 8px 0; padding-left: 24px; position: relative; color: var(--text-secondary); font-size: 0.9375rem; }
        .exact-user-site .industry-topics li::before { content: "✓"; position: absolute; left: 0; color: var(--success); }
        .exact-user-site .industry-example { padding: 12px 16px; background: var(--bg-glass); border-radius: var(--radius-sm); font-size: 0.875rem; }
        .exact-user-site .example-label { color: var(--text-muted); margin-right: 8px; }
        .exact-user-site .industries-other { text-align: center; color: var(--text-secondary); }
        .exact-user-site .pricing-section { padding: var(--section-padding) 0; background: var(--bg-secondary); }
        .exact-user-site .pricing-cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px; max-width: 800px; margin: 0 auto 48px; }
        .exact-user-site .pricing-card { position: relative; padding: 40px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); transition: all var(--transition-normal); }
        .exact-user-site .pricing-card.featured { border-color: var(--accent-primary); box-shadow: var(--shadow-glow); }
        .exact-user-site .pricing-badge { position: absolute; top: -12px; left: 24px; padding: 6px 16px; background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: 100px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
        .exact-user-site .pricing-ribbon { position: absolute; top: -12px; right: 24px; padding: 6px 16px; background: var(--accent-gradient); border-radius: 100px; font-size: 0.75rem; font-weight: 600; color: white; }
        .exact-user-site .pricing-header { text-align: center; margin-bottom: 32px; }
        .exact-user-site .pricing-header h3 { font-size: 1.25rem; margin-bottom: 16px; }
        .exact-user-site .pricing-price { display: flex; align-items: flex-start; justify-content: center; gap: 4px; }
        .exact-user-site .price-currency { font-size: 1.5rem; font-weight: 600; margin-top: 8px; }
        .exact-user-site .price-amount { font-size: 4rem; font-weight: 800; line-height: 1; background: var(--accent-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .exact-user-site .pricing-duration { font-size: 0.875rem; color: var(--text-muted); margin-top: 8px; }
        .exact-user-site .pricing-features { margin-bottom: 32px; }
        .exact-user-site .pricing-features li { padding: 12px 0; border-bottom: 1px solid var(--border-color); display: flex; align-items: center; gap: 12px; }
        .exact-user-site .pricing-features li:last-child { border-bottom: none; }
        .exact-user-site .pricing-features .check { color: var(--success); font-weight: 600; }
        .exact-user-site .pricing-note { text-align: center; font-size: 0.875rem; color: var(--text-muted); margin-top: 12px; }
        .exact-user-site .pricing-guarantee { max-width: 600px; margin: 0 auto; }
        .exact-user-site .guarantee-box { display: flex; align-items: center; gap: 16px; padding: 24px; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: var(--radius-md); }
        .exact-user-site .guarantee-shield { font-size: 2.5rem; }
        .exact-user-site .guarantee-text strong { display: block; margin-bottom: 4px; }
        .exact-user-site .guarantee-text p { color: var(--text-secondary); font-size: 0.9375rem; margin: 0; }
        .exact-user-site .testimonials-section { padding: var(--section-padding) 0; background: var(--bg-primary); }
        .exact-user-site .testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; }
        .exact-user-site .testimonial-card { padding: 32px; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-lg); transition: all var(--transition-normal); }
        .exact-user-site .testimonial-card:hover { transform: translateY(-4px); border-color: var(--accent-primary); }
        .exact-user-site .testimonial-card.featured { grid-column: span 2; }
        .exact-user-site .testimonial-rating { font-size: 1.25rem; margin-bottom: 16px; }
        .exact-user-site .testimonial-quote { font-size: 1rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 24px; font-style: italic; }
        .exact-user-site .testimonial-author { display: flex; align-items: center; gap: 12px; }
        .exact-user-site .author-avatar { width: 48px; height: 48px; background: var(--accent-gradient); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.875rem; }
        .exact-user-site .author-info { display: flex; flex-direction: column; }
        .exact-user-site .author-info span { font-size: 0.875rem; color: var(--text-muted); }
        .exact-user-site .about-section { padding: var(--section-padding) 0; background: var(--bg-secondary); }
        .exact-user-site .about-content { display: grid; grid-template-columns: 1fr 1.5fr; gap: 60px; align-items: center; }
        .exact-user-site .about-image { position: relative; }
        .exact-user-site .about-image img { width: 100%; border-radius: var(--radius-lg); border: 1px solid var(--border-color); }
        .exact-user-site .about-badge { position: absolute; bottom: 24px; left: 24px; display: flex; align-items: center; gap: 8px; padding: 8px 16px; background: rgba(0, 0, 0, 0.5); backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 100px; font-size: 0.875rem; font-weight: 700; }
        .exact-user-site .about-text h2 { font-size: clamp(2rem, 5vw, 3rem); margin-bottom: 24px; }
        .exact-user-site .about-intro { font-size: 1.25rem; margin-bottom: 24px; color: var(--text-primary); }
        .exact-user-site .about-text p { color: var(--text-secondary); margin-bottom: 20px; }
        .exact-user-site .about-credentials { display: grid; gap: 16px; margin-top: 32px; }
        .exact-user-site .credential { display: flex; align-items: center; gap: 12px; font-size: 0.9375rem; font-weight: 500; }
        .exact-user-site .credential-icon { font-size: 1.25rem; color: var(--accent-primary); }
        .exact-user-site .faq-section { padding: var(--section-padding) 0; background: var(--bg-primary); }
        .exact-user-site .faq-grid { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px; }
        .exact-user-site .faq-item { background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); overflow: hidden; }
        .exact-user-site .faq-question { width: 100%; padding: 24px; background: none; border: none; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: left; font-size: 1.125rem; font-weight: 600; color: var(--text-primary); }
        .exact-user-site .faq-icon { font-size: 1.5rem; color: var(--accent-primary); transition: transform 0.3s ease; }
        .exact-user-site .faq-answer { max-height: 0; padding: 0 24px; overflow: hidden; transition: all 0.3s ease; color: var(--text-secondary); }
        .exact-user-site .faq-item.open .faq-answer { max-height: 200px; padding-bottom: 24px; }
        .exact-user-site .faq-item.open .faq-icon { transform: rotate(45deg); }
        .exact-user-site .footer { padding: 80px 0 40px; background: #050508; border-top: 1px solid var(--border-color); }
        .exact-user-site .footer-top { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 40px; margin-bottom: 60px; }
        .exact-user-site .footer-links { display: flex; gap: 32px; flex-wrap: wrap; }
        .exact-user-site .footer-links a { color: var(--text-muted); font-size: 0.875rem; transition: color 0.2s ease; }
        .exact-user-site .footer-links a:hover { color: var(--text-primary); }
        .exact-user-site .footer-bottom { text-align: center; padding-top: 40px; border-top: 1px solid rgba(255, 255, 255, 0.05); color: var(--text-muted); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.2em; }
        .exact-user-site .animate-on-scroll { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .exact-user-site .animate-visible { opacity: 1; transform: translateY(0); }
        .exact-user-site .problem-grid .animate-visible:nth-child(2) { transition-delay: 0.1s; }
        .exact-user-site .problem-grid .animate-visible:nth-child(3) { transition-delay: 0.2s; }
        .exact-user-site .problem-grid .animate-visible:nth-child(4) { transition-delay: 0.3s; }
        .exact-user-site .industries-grid .animate-visible:nth-child(2) { transition-delay: 0.1s; }
        .exact-user-site .industries-grid .animate-visible:nth-child(3) { transition-delay: 0.2s; }
        .exact-user-site .testimonials-grid .animate-visible:nth-child(2) { transition-delay: 0.1s; }
        .exact-user-site .testimonials-grid .animate-visible:nth-child(3) { transition-delay: 0.2s; }
        .exact-user-site .testimonials-grid .animate-visible:nth-child(4) { transition-delay: 0.3s; }

        @media (max-width: 1024px) {
            .exact-user-site .hero-container { grid-template-columns: 1fr; text-align: center; }
            .exact-user-site .hero-content { max-width: 100%; }
            .exact-user-site .hero-features, .exact-user-site .hero-cta-group { justify-content: center; }
            .exact-user-site .hero-guarantee { justify-content: center; }
            .exact-user-site .about-content { grid-template-columns: 1fr; }
            .exact-user-site .about-image { max-width: 500px; margin: 0 auto; }
        }

        @media (max-width: 768px) {
            .exact-user-site .nav-links, .exact-user-site .nav-cta { display: none; }
            .exact-user-site .mobile-menu-btn { display: flex; }
            .exact-user-site .nav-links.mobile-open { display: flex !important; flex-direction: column; position: absolute; top: 100%; left: 0; right: 0; background: rgba(10, 10, 15, 0.98); padding: 24px; gap: 16px; border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
            .exact-user-site .mobile-menu-btn.active span:nth-child(1) { transform: rotate(45deg) translate(6px, 6px); }
            .exact-user-site .mobile-menu-btn.active span:nth-child(2) { opacity: 0; }
            .exact-user-site .mobile-menu-btn.active span:nth-child(3) { transform: rotate(-45deg) translate(6px, -6px); }
        }
      ` }} />
      
      {/* Navigation */}
      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <a href="#" className="nav-logo">
            <span className="logo-icon">🇬🇧</span>
            <span className="logo-text">Talk with Dave</span>
          </a>
          <div className="nav-links" id="navLinks">
            <a href="#how-it-works">How It Works</a>
            <a href="#industries">Industries</a>
            <a href="#testimonials">Results</a>
            <a href="#faq">FAQ</a>
          </div>
          <a href="https://calendly.com/daveynj113/your-first-lesson" target="_blank" className="nav-cta">
            Book Assessment <span className="cta-arrow">→</span>
          </a>
          <button className="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-bg">
          <div className="hero-gradient"></div>
        </div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge"><span className="badge-icon">⭐</span><span>Trusted by 150+ Professionals Worldwide</span></div>
            <h1 className="hero-title">Command the <span className="gradient-text">Boardroom</span> in English</h1>
            <p className="hero-subtitle">The 25-hour transformation program for <strong>Finance, Medical, and Sales executives</strong> who need to speak with British-level authority.</p>
            <div className="hero-features">
              <div className="hero-feature"><span className="feature-icon">🎯</span><span>AI-Built Custom Curriculum</span></div>
              <div className="hero-feature"><span className="feature-icon">🇬🇧</span><span>Native UK Speaker</span></div>
              <div className="hero-feature"><span className="feature-icon">💼</span><span>Industry-Specific Training</span></div>
            </div>
            <div className="hero-cta-group">
              <a href="https://calendly.com/daveynj113/your-first-lesson" target="_blank" className="btn btn-primary btn-lg">
                <span>Start Your Transformation</span>
                <span className="btn-subtext">$20 Assessment → Credited to Package</span>
              </a>
              <a href="#how-it-works" className="btn btn-secondary btn-lg">See How It Works</a>
            </div>
            <div className="hero-guarantee"><span className="guarantee-icon">🛡️</span><span>100% Money-Back Guarantee on Assessment</span></div>
          </div>
          <div className="hero-media">
            <div className="video-container">
              <div className="video-glow"></div>
              <div className="video-wrapper">
                <iframe src="https://www.youtube.com/embed/oU39nHNpSZY?rel=0&modestbranding=1" title="Meet Dave" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="video-caption">
                <img src="https://talkwithdave.co.uk/dave_profile2.jpg" alt="Dave Jackson" className="caption-avatar" />
                <div className="caption-text"><strong>Dave Jackson</strong><span>Native UK • 10+ Years Experience</span></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Social Proof Bar */}
      <section className="social-proof-bar">
        <div className="container">
          <div className="proof-items">
            <div className="proof-item"><span className="proof-number">150+</span><span className="proof-label">Professionals Trained</span></div>
            <div className="proof-divider"></div>
            <div className="proof-item"><span className="proof-number">4.9</span><span className="proof-label">Average Rating</span></div>
            <div className="proof-divider"></div>
            <div className="proof-item"><span className="proof-number">15+</span><span className="proof-label">Countries Served</span></div>
            <div className="proof-divider"></div>
            <div className="proof-item"><span className="proof-number">10+</span><span className="proof-label">Years Teaching</span></div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">The Challenge</span>
            <h2 className="section-title">Your English is <span className="text-danger">Holding You Back</span></h2>
          </div>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">😰</div>
              <h3>Hesitating in Meetings</h3>
              <p>You have great ideas but struggle to express them with the same authority as native speakers.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">📧</div>
              <h3>Email Anxiety</h3>
              <p>Every important email takes 3x longer because you're second-guessing your word choices.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">🎤</div>
              <h3>Presentation Fear</h3>
              <p>You avoid speaking opportunities that could advance your career because you don't feel confident.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">🤝</div>
              <h3>Missed Opportunities</h3>
              <p>Promotions and client relationships are going to colleagues who communicate more naturally.</p>
            </div>
          </div>
          <div className="problem-cta">
            <p className="problem-statement"><strong>Sound familiar?</strong> These are the exact challenges my students overcome in 25 hours.</p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <span className="section-label">The Solution</span>
            <h2 className="section-title">Your <span className="gradient-text">25-Hour Transformation</span></h2>
            <p className="section-subtitle">One package. One price. Complete fluency roadmap built entirely around <em>your</em> profession.</p>
          </div>
          <div className="solution-steps">
            <div className="step-card">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Diagnostic Assessment</h3>
                <p>In our first $20 session, I analyze your current level, your job requirements, and your specific communication challenges. You leave with a complete roadmap.</p>
                <div className="step-highlight"><span className="highlight-icon">💡</span><span>$20 fully credited toward your package</span></div>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>AI-Powered Curriculum</h3>
                <p>Using proprietary AI technology, I build a 100% custom curriculum covering exactly what you need: your industry vocabulary, your meeting types, your presentation scenarios.</p>
                <div className="step-highlight"><span className="highlight-icon">🤖</span><span>No generic lessons—everything is built for your role</span></div>
              </div>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>25-Hour Mastery Program</h3>
                <p>Over 25 one-hour sessions, we systematically work through your curriculum. You practice real scenarios, receive immediate feedback, and build unshakeable confidence.</p>
                <div className="step-highlight"><span className="highlight-icon">🏆</span><span>From hesitant to boardroom-confident</span></div>
              </div>
            </div>
          </div>
          <div className="solution-cta">
            <a href="https://calendly.com/daveynj113/your-first-lesson" target="_blank" className="btn btn-primary btn-lg">
              <span>Book Your Diagnostic Session</span><span className="btn-subtext">$20 • 100% Risk-Free</span>
            </a>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section" id="industries">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Specializations</span>
            <h2 className="section-title">Built for <span className="gradient-text">Your Industry</span></h2>
            <p className="section-subtitle">I don't teach generic "Business English." I teach the exact language you need for your job.</p>
          </div>
          <div className="industries-grid">
            <div className="industry-card industry-finance">
              <div className="industry-icon">💼</div>
              <h3>Finance & Banking</h3>
              <p className="industry-subtitle">Investment Banking • Asset Management • Corporate Finance</p>
              <ul className="industry-topics">
                <li>Earnings calls & investor presentations</li>
                <li>M&A negotiations & due diligence</li>
                <li>Regulatory briefings & compliance</li>
                <li>Client relationship management</li>
              </ul>
              <div className="industry-example"><span className="example-label">Sample:</span><span>"Leading a Q3 earnings call with analyst Q&A"</span></div>
            </div>
            <div className="industry-card industry-medical">
              <div className="industry-icon">🏥</div>
              <h3>Medical & Healthcare</h3>
              <p className="industry-subtitle">Physicians • Researchers • Healthcare Executives</p>
              <ul className="industry-topics">
                <li>Patient consultations & explanations</li>
                <li>Medical conference presentations</li>
                <li>Research paper discussions</li>
                <li>Hospital administration meetings</li>
              </ul>
              <div className="industry-example"><span className="example-label">Sample:</span><span>"Presenting clinical trial results at an international conference"</span></div>
            </div>
            <div className="industry-card industry-sales">
              <div className="industry-icon">📈</div>
              <h3>Sales & Business Development</h3>
              <p className="industry-subtitle">Account Executives • Sales Directors • Entrepreneurs</p>
              <ul className="industry-topics">
                <li>High-stakes client pitches</li>
                <li>Objection handling & negotiation</li>
                <li>Executive-level presentations</li>
                <li>Contract discussions & closing</li>
              </ul>
              <div className="industry-example"><span className="example-label">Sample:</span><span>"Pitching a $2M enterprise solution to C-suite"</span></div>
            </div>
          </div>
          <div className="industries-other">
            <p><strong>Also serving:</strong> Technology, Legal, Consulting, Academia, Government, and more.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Investment</span>
            <h2 className="section-title">Simple, <span className="gradient-text">Transparent Pricing</span></h2>
          </div>
          <div className="pricing-cards">
            <div className="pricing-card pricing-assessment">
              <div className="pricing-badge">Start Here</div>
              <div className="pricing-header">
                <h3>Diagnostic Assessment</h3>
                <div className="pricing-price"><span className="price-currency">$</span><span className="price-amount">20</span></div>
                <p className="pricing-duration">30-minute session</p>
              </div>
              <ul className="pricing-features">
                <li><span className="check">✓</span> Complete skills analysis</li>
                <li><span className="check">✓</span> Custom curriculum preview</li>
                <li><span className="check">✓</span> Personalized roadmap</li>
                <li><span className="check">✓</span> 100% credited to package</li>
                <li><span className="check">✓</span> Money-back guarantee</li>
              </ul>
              <a href="https://calendly.com/daveynj113/your-first-lesson" target="_blank" className="btn btn-outline btn-block">Book Assessment</a>
            </div>
            <div className="pricing-card pricing-package featured">
              <div className="pricing-ribbon">Most Popular</div>
              <div className="pricing-header">
                <h3>25-Hour Transformation</h3>
                <div className="pricing-price"><span className="price-currency">$</span><span className="price-amount">750</span></div>
                <p className="pricing-duration">Complete program • $30/hour</p>
              </div>
              <ul className="pricing-features">
                <li><span className="check">✓</span> 25 one-hour sessions</li>
                <li><span className="check">✓</span> AI-built custom curriculum</li>
                <li><span className="check">✓</span> Industry-specific training</li>
                <li><span className="check">✓</span> Roleplay & simulations</li>
                <li><span className="check">✓</span> Homework & materials</li>
                <li><span className="check">✓</span> Email & document review</li>
                <li><span className="check">✓</span> Flexible scheduling</li>
                <li><span className="check">✓</span> Progress tracking</li>
              </ul>
              <a href="https://calendly.com/daveynj113/your-first-lesson" target="_blank" className="btn btn-primary btn-block">Start with $20 Assessment</a>
              <p className="pricing-note">Assessment fee credited to package</p>
            </div>
          </div>
          <div className="pricing-guarantee">
            <div className="guarantee-box"><span className="guarantee-shield">🛡️</span>
              <div className="guarantee-text"><strong>100% Risk-Free Assessment</strong>
                <p>If you don't feel the diagnostic session was valuable, I'll refund your $20 immediately. No questions asked.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Success Stories</span>
            <h2 className="section-title">What <span className="gradient-text">Professionals</span> Say</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card featured">
              <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <blockquote className="testimonial-quote">"Dave's approach is completely different from any English course I've taken. He understood my job as an investment analyst and built lessons around my actual daily tasks. After 3 months, I led my first earnings call in English with complete confidence."</blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">KL</div>
                <div className="author-info"><strong>Kevin L.</strong><span>Investment Analyst • Hong Kong</span></div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <blockquote className="testimonial-quote">"Dave is really friendly and patient. He explains the background behind idioms and phrases, and discusses cultural differences. Not only the content but his teaching style helps tremendously."</blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">MW</div>
                <div className="author-info"><strong>Michael W.</strong><span>Software Engineer • China</span></div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <blockquote className="testimonial-quote">"The AI curriculum was a game-changer. Every lesson felt relevant to my work in medical research. Dave even helped me prepare for an international conference presentation."</blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">YT</div>
                <div className="author-info"><strong>Dr. Yuki T.</strong><span>Medical Researcher • Japan</span></div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <blockquote className="testimonial-quote">"I was skeptical about online lessons, but Dave made every session count. His focus on sales communication directly improved my close rate with international clients."</blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">HP</div>
                <div className="author-info"><strong>Hana P.</strong><span>Sales Director • South Korea</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img src="https://talkwithdave.co.uk/dave_profile2.jpg" alt="Dave Jackson - Executive English Coach" />
              <div className="about-badge"><span className="badge-flag">🇬🇧</span><span>Native UK Speaker</span></div>
            </div>
            <div className="about-text">
              <span className="section-label">Your Coach</span>
              <h2>Meet Dave Jackson</h2>
              <p className="about-intro">I'm a native British English speaker with over <strong>10 years of teaching experience</strong> and a <strong>Business Administration degree from the University of Southampton</strong>.</p>
              <p>What sets me apart isn't my credentials—it's my approach. I don't believe in generic "Business English" courses. I understand your specific job, your specific challenges, and build a curriculum that solves your specific problems.</p>
              <p>I've helped investment bankers lead earnings calls, doctors present at international conferences, and sales executives close multi-million dollar deals.</p>
              <div className="about-credentials">
                <div className="credential"><span className="credential-icon">🎓</span><span>BA Business Administration, University of Southampton</span></div>
                <div className="credential"><span className="credential-icon">📅</span><span>10+ Years Teaching Experience</span></div>
                <div className="credential"><span className="credential-icon">🌍</span><span>150+ Professionals Trained</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Questions</span>
            <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <button className="faq-question"><span>What happens in the $20 diagnostic session?</span><span className="faq-icon">+</span></button>
              <div className="faq-answer">
                <p>In this 30-minute session, I assess your current English level, understand your job requirements, and identify your specific communication challenges. By the end, you'll have a clear roadmap. The $20 is fully credited toward your package if you continue.</p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question"><span>What if I'm not satisfied with the assessment?</span><span className="faq-icon">+</span></button>
              <div className="faq-answer">
                <p>If you don't feel the session was valuable, I'll refund your $20 immediately. No questions asked. My goal is to find the perfect fit between my coaching and your needs.</p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question"><span>How does the AI-built curriculum work?</span><span className="faq-icon">+</span></button>
              <div className="faq-answer">
                <p>I use custom-designed AI prompts to analyze your industry, job title, and daily communication tasks. The result is a set of 25 unique lessons that use the exact vocabulary and scenarios you encounter at work.</p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question"><span>What is the typical class schedule?</span><span className="faq-icon">+</span></button>
              <div className="faq-answer">
                <p>Most students find 1-2 sessions per week ideal. However, the 25-hour program is flexible to accommodate your busy executive schedule. We can adjust the pace based on your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="footer" id="contact">
        <div className="container">
          <div className="footer-top">
            <a href="#" className="nav-logo">
              <span className="logo-icon">🇬🇧</span>
              <span className="logo-text">Talk with Dave</span>
            </a>
            <div className="footer-links">
              <a href="#how-it-works">How It Works</a>
              <a href="#industries">Industries</a>
              <a href="#testimonials">Results</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Dave Jackson • Southampton, England • Professional British Coaching</p>
          </div>
        </div>
      </section>
    </div>
  );
}
