import { useEffect } from "react";
import { Link } from "wouter";
import { Calendar, Home, ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@shared/blog";

const CALENDLY_URL = "https://calendly.com/daveynj113/your-first-lesson";
const BASE_URL = "https://talkwithdave.co.uk";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndex() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "English Learning Blog for Professionals | Talk with Dave";

    const setMeta = (selector: string, attr: string, name: string, content: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      'meta[name="description"]',
      "name",
      "description",
      "Practical English tips for international professionals: business writing, speaking confidence, interview prep and more, from native British coach Dave Jackson.",
    );

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", `${BASE_URL}/blog`);

    return () => {
      const c = document.querySelector('link[rel="canonical"]');
      if (c) c.setAttribute("href", `${BASE_URL}/`);
    };
  }, []);

  const sorted = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div style={pageStyle}>
      <style dangerouslySetInnerHTML={{ __html: sharedCss }} />

      <nav style={navStyle}>
        <div style={navInnerStyle}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Link href="/">
              <button style={iconBtnStyle} aria-label="Home">
                <Home className="w-5 h-5" />
              </button>
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={logoMarkStyle}>DJ</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "1.125rem" }}>Talk with Dave</div>
                <div style={logoSubStyle}>English Learning Blog</div>
              </div>
            </div>
          </div>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="td-btn-primary" style={navCtaStyle}>
            <Calendar className="w-4 h-4" />
            Book Free Diagnostic
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      <header style={heroStyle}>
        <div style={heroBgStyle} />
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={badgeStyle}>Free resources for international professionals</div>
          <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", fontWeight: 800, lineHeight: 1.1, margin: "24px 0 16px" }}>
            The <span className="td-gradient-text">English Learning</span> Blog
          </h1>
          <p style={{ fontSize: "1.25rem", color: "var(--td-text-secondary)", lineHeight: 1.7 }}>
            Practical, no-fluff tips to help you speak and write English with confidence at work — from a native British coach with 10+ years of experience.
          </p>
        </div>
      </header>

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 100px" }}>
        <div style={gridStyle}>
          {sorted.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="td-card" style={cardStyle}>
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img src={post.image} alt={post.imageAlt} loading="lazy" className="td-card-img" style={imgStyle} />
                </div>
                <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={metaRowStyle}>
                    <span style={categoryStyle}>{post.category}</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <Clock className="w-3.5 h-3.5" /> {post.readTime} min read
                    </span>
                  </div>
                  <h2 style={{ fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.35, margin: "12px 0" }}>{post.title}</h2>
                  <p style={{ color: "var(--td-text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, flex: 1 }}>
                    {post.excerpt}
                  </p>
                  <div style={readMoreStyle}>
                    Read article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div style={ctaBoxStyle}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, marginBottom: "12px" }}>
            Want a curriculum built around your job?
          </h2>
          <p style={{ color: "var(--td-text-secondary)", maxWidth: "560px", margin: "0 auto 28px", fontSize: "1.05rem" }}>
            These articles are a starting point. In a free 30-minute diagnostic session, I'll assess your English and map a plan tailored to your career.
          </p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="td-btn-primary" style={bigCtaStyle}>
            <Calendar className="w-5 h-5" />
            Book Your Free Diagnostic
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </main>
    </div>
  );
}

const pageStyle: React.CSSProperties = {
  background: "var(--td-bg-primary)",
  color: "var(--td-text-primary)",
  minHeight: "100vh",
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
};
const navStyle: React.CSSProperties = {
  position: "sticky",
  top: 0,
  zIndex: 1000,
  padding: "16px 24px",
  background: "rgba(10, 10, 15, 0.85)",
  backdropFilter: "blur(20px)",
  borderBottom: "1px solid var(--td-border)",
};
const navInnerStyle: React.CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
const iconBtnStyle: React.CSSProperties = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  background: "var(--td-bg-glass)",
  border: "1px solid var(--td-border)",
  color: "var(--td-text-primary)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};
const logoMarkStyle: React.CSSProperties = {
  width: "40px",
  height: "40px",
  background: "var(--td-accent-gradient)",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
};
const logoSubStyle: React.CSSProperties = {
  fontSize: "0.75rem",
  color: "var(--td-text-muted)",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
};
const navCtaStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "12px 20px",
  borderRadius: "12px",
  fontWeight: 600,
  color: "white",
  textDecoration: "none",
  border: "none",
  cursor: "pointer",
};
const heroStyle: React.CSSProperties = {
  position: "relative",
  padding: "100px 24px 60px",
  overflow: "hidden",
};
const heroBgStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.3), transparent), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(139, 92, 246, 0.12), transparent)",
  zIndex: 0,
};
const badgeStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "8px 16px",
  background: "var(--td-bg-glass)",
  border: "1px solid var(--td-border)",
  borderRadius: "100px",
  fontSize: "0.875rem",
  color: "var(--td-text-secondary)",
};
const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
  gap: "28px",
  marginTop: "40px",
};
const cardStyle: React.CSSProperties = {
  background: "var(--td-bg-card)",
  border: "1px solid var(--td-border)",
  borderRadius: "16px",
  overflow: "hidden",
  cursor: "pointer",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease, border-color 0.3s ease",
};
const imgStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.5s ease",
};
const metaRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "0.8rem",
  color: "var(--td-text-muted)",
};
const categoryStyle: React.CSSProperties = {
  color: "var(--td-accent-primary)",
  fontWeight: 600,
};
const readMoreStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "6px",
  marginTop: "18px",
  color: "var(--td-accent-primary)",
  fontWeight: 600,
  fontSize: "0.9rem",
};
const ctaBoxStyle: React.CSSProperties = {
  marginTop: "80px",
  padding: "56px 24px",
  textAlign: "center",
  background:
    "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99, 102, 241, 0.18), transparent), var(--td-bg-secondary)",
  border: "1px solid var(--td-border)",
  borderRadius: "24px",
};
const bigCtaStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  padding: "18px 36px",
  borderRadius: "12px",
  fontWeight: 700,
  fontSize: "1.05rem",
  color: "white",
  textDecoration: "none",
};

export const sharedCss = `
  :root {
    --td-bg-primary: #0a0a0f;
    --td-bg-secondary: #12121a;
    --td-bg-card: rgba(26, 26, 37, 0.6);
    --td-bg-glass: rgba(255, 255, 255, 0.03);
    --td-text-primary: #ffffff;
    --td-text-secondary: rgba(255, 255, 255, 0.7);
    --td-text-muted: rgba(255, 255, 255, 0.5);
    --td-accent-primary: #818cf8;
    --td-accent-gradient: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%);
    --td-border: rgba(255, 255, 255, 0.1);
  }
  .td-gradient-text {
    background: var(--td-accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .td-btn-primary {
    background: var(--td-accent-gradient);
    box-shadow: 0 0 40px rgba(99, 102, 241, 0.3);
    transition: all 0.3s ease;
  }
  .td-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 60px rgba(99, 102, 241, 0.5);
  }
  .td-card:hover {
    transform: translateY(-4px);
    border-color: rgba(129, 140, 248, 0.4) !important;
  }
  .td-card:hover .td-card-img {
    transform: scale(1.05);
  }
  a { color: inherit; }
`;
