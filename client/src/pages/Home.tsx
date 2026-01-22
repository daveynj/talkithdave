import { useEffect, useState } from "react";
import davePhoto from "@assets/my_professional_photo_1767370992057.png";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    console.log("%c🇬🇧 Talk with Dave - Executive English Coaching", "font-size: 16px; font-weight: bold; color: #1a56db;");
  }, []);

  return (
    <div className="landing-page">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .landing-page {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          color: #1e293b;
          line-height: 1.6;
          background: #f8fafc;
        }

        /* Header */
        .header {
          padding: 20px 24px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .header-content {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1a56db;
          font-style: italic;
          text-decoration: none;
        }
        
        .header-cta {
          background: #1a56db;
          color: white;
          padding: 10px 20px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.875rem;
          transition: background 0.2s;
        }
        
        .header-cta:hover {
          background: #1e429f;
        }

        /* Hero Section */
        .hero {
          background: linear-gradient(135deg, #f0f7ff 0%, #e8f4fd 100%);
          padding: 60px 24px;
        }
        
        .hero-container {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        
        .hero-content h1 {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 700;
          color: #1e293b;
          line-height: 1.2;
          margin-bottom: 16px;
        }
        
        .hero-content .subtitle {
          font-size: 1.125rem;
          color: #475569;
          margin-bottom: 8px;
        }
        
        .hero-content .subtitle strong {
          color: #1a56db;
        }
        
        .hero-content .offer-text {
          font-size: 1rem;
          color: #1a56db;
          font-weight: 500;
          margin-bottom: 24px;
        }
        
        .hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #1a56db;
          color: white;
          padding: 14px 28px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.2s;
          box-shadow: 0 4px 14px rgba(26, 86, 219, 0.3);
        }
        
        .hero-cta:hover {
          background: #1e429f;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(26, 86, 219, 0.4);
        }
        
        .hero-image {
          display: flex;
          justify-content: center;
        }
        
        .hero-photo {
          width: 100%;
          max-width: 320px;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        /* Trust Badges */
        .trust-badges {
          background: white;
          padding: 24px;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .trust-badges-container {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }
        
        .trust-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9375rem;
          color: #475569;
        }
        
        .trust-badge svg {
          width: 20px;
          height: 20px;
          color: #22c55e;
        }

        /* Section Styles */
        .section {
          padding: 64px 24px;
        }
        
        .section-alt {
          background: white;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 48px;
        }
        
        .section-title {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 8px;
        }
        
        .section-subtitle {
          font-size: 1rem;
          color: #64748b;
          max-width: 500px;
          margin: 0 auto;
        }

        /* Who Is This For */
        .audience-grid {
          max-width: 900px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        
        .audience-card {
          text-align: center;
          padding: 24px;
        }
        
        .audience-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          font-size: 2rem;
        }
        
        .audience-card h3 {
          font-size: 1rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 4px;
        }
        
        .audience-card p {
          font-size: 0.875rem;
          color: #64748b;
        }

        /* What You'll Get */
        .benefits-grid {
          max-width: 900px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        
        .benefit-card {
          text-align: center;
          padding: 24px;
        }
        
        .benefit-icon {
          width: 64px;
          height: 64px;
          border-radius: 12px;
          background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }
        
        .benefit-icon svg {
          width: 28px;
          height: 28px;
          color: #1a56db;
        }
        
        .benefit-card h3 {
          font-size: 1rem;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 4px;
        }
        
        .benefit-card p {
          font-size: 0.875rem;
          color: #64748b;
        }

        /* Testimonial */
        .testimonial-section {
          background: linear-gradient(135deg, #f0f7ff 0%, #e8f4fd 100%);
          padding: 64px 24px;
        }
        
        .testimonial-card {
          max-width: 700px;
          margin: 0 auto;
          background: white;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }
        
        .testimonial-quote {
          font-size: 1.125rem;
          color: #1e293b;
          line-height: 1.7;
          margin-bottom: 24px;
          font-style: italic;
        }
        
        .testimonial-quote::before {
          content: '"';
          font-size: 3rem;
          color: #1a56db;
          line-height: 0;
          vertical-align: -0.5em;
          margin-right: 4px;
        }
        
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .author-photo {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          color: #1a56db;
        }
        
        .author-info {
          flex: 1;
        }
        
        .author-stars {
          display: flex;
          gap: 2px;
          margin-bottom: 4px;
        }
        
        .author-stars svg {
          width: 16px;
          height: 16px;
          fill: #fbbf24;
        }
        
        .author-name {
          font-weight: 600;
          color: #1e293b;
        }
        
        .author-role {
          font-size: 0.875rem;
          color: #64748b;
        }

        /* Final CTA */
        .final-cta {
          background: linear-gradient(135deg, #1a56db 0%, #1e429f 100%);
          padding: 64px 24px;
          text-align: center;
        }
        
        .final-cta h2 {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          color: white;
          margin-bottom: 8px;
        }
        
        .final-cta p {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 24px;
        }
        
        .final-cta p strong {
          color: white;
        }
        
        .final-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: white;
          color: #1a56db;
          padding: 14px 28px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.2s;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
        }
        
        .final-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        /* Footer */
        .footer {
          background: #1e293b;
          padding: 32px 24px;
          text-align: center;
        }
        
        .footer-logo {
          font-size: 1.125rem;
          font-weight: 600;
          color: white;
          font-style: italic;
          margin-bottom: 8px;
        }
        
        .footer-text {
          font-size: 0.8125rem;
          color: rgba(255, 255, 255, 0.6);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .hero-image {
            order: -1;
          }
          
          .hero-photo {
            max-width: 240px;
          }
          
          .trust-badges-container {
            flex-direction: column;
            gap: 16px;
            align-items: center;
          }
          
          .audience-grid,
          .benefits-grid {
            grid-template-columns: 1fr;
            max-width: 320px;
          }
          
          .header-cta {
            display: none;
          }
        }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <a href="#" className="logo">Talk with Dave</a>
          <a href="https://calendly.com/daveynj113/your-first-lesson" target="_blank" className="header-cta">
            Book Free Session
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Command the Boardroom.<br />In English.</h1>
            <p className="subtitle">
              The <strong>25-hour transformation</strong> for Finance, Medical & Sales executives.
            </p>
            <p className="offer-text">Free 30-Minute Assessment to Start</p>
            <a href="https://calendly.com/daveynj113/your-first-lesson" target="_blank" className="hero-cta">
              Book Your Free Session
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          <div className="hero-image">
            <img src={davePhoto} alt="Dave Jackson - Executive English Coach" className="hero-photo" />
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <div className="trust-badges">
        <div className="trust-badges-container">
          <div className="trust-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            Industry-Specific Training
          </div>
          <div className="trust-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            AI-Built Custom Curriculum
          </div>
          <div className="trust-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            From Hesitant to Boardroom-Ready
          </div>
        </div>
      </div>

      {/* Who Is This For */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Who Is This For?</h2>
        </div>
        <div className="audience-grid">
          <div className="audience-card">
            <div className="audience-icon">💼</div>
            <h3>Finance & Banking</h3>
            <p>Investment bankers, analysts & corporate executives</p>
          </div>
          <div className="audience-card">
            <div className="audience-icon">🏥</div>
            <h3>Medical & Healthcare</h3>
            <p>Physicians, researchers & healthcare leaders</p>
          </div>
          <div className="audience-card">
            <div className="audience-icon">📈</div>
            <h3>Sales & Business</h3>
            <p>Account executives, directors & entrepreneurs</p>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="section section-alt">
        <div className="section-header">
          <h2 className="section-title">What You'll Get</h2>
        </div>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <h3>Fluency Evaluation</h3>
            <p>& Feedback</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            </div>
            <h3>Tailored Learning</h3>
            <p>Plan</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <h3>Expert Tips to</h3>
            <p>Achieve Your Goals</p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial-section">
        <div className="testimonial-card">
          <p className="testimonial-quote">
            Dave understood my job as an investment analyst and built lessons around my actual daily tasks. After 3 months, I led my first earnings call in English with complete confidence.
          </p>
          <div className="testimonial-author">
            <div className="author-photo">MK</div>
            <div className="author-info">
              <div className="author-stars">
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <div className="author-name">Michael K.</div>
              <div className="author-role">Investment Analyst, Singapore</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <h2>Ready to Command the Boardroom?</h2>
        <p>Claim Your Free <strong>30-Minute</strong> Assessment Today!</p>
        <a href="https://calendly.com/daveynj113/your-first-lesson" target="_blank" className="final-cta-btn">
          Book Your Free Session
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">Talk with Dave</div>
        <p className="footer-text">© 2025 Talk with Dave. Executive English Coaching.</p>
      </footer>
    </div>
  );
}
