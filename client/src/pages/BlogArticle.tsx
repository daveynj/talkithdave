import { useEffect } from "react";
import { Link, useRoute } from "wouter";
import { Calendar, Home, ArrowRight, ArrowLeft, Clock } from "lucide-react";
import { getBlogPost, blogPosts, type BlogBlock } from "@shared/blog";
import { sharedCss } from "./BlogIndex";
import NotFound from "./not-found";

const CALENDLY_URL = "https://calendly.com/daveynj113/your-first-lesson";
const BASE_URL = "https://talkwithdave.co.uk";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogArticle() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug ?? "";
  const post = getBlogPost(slug);

  useEffect(() => {
    if (!post) return;
    window.scrollTo(0, 0);
    document.title = post.metaTitle;
    const url = `${BASE_URL}/blog/${post.slug}`;

    const setMeta = (key: string, isProperty: boolean, content: string) => {
      const selector = isProperty ? `meta[property="${key}"]` : `meta[name="${key}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(isProperty ? "property" : "name", key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", false, post.metaDescription);
    setMeta("keywords", false, post.keywords.join(", "));
    setMeta("og:title", true, post.metaTitle);
    setMeta("og:description", true, post.metaDescription);
    setMeta("og:type", true, "article");
    setMeta("og:url", true, url);
    setMeta("og:image", true, post.image);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", url);

    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.metaDescription,
      image: post.image,
      datePublished: post.date,
      dateModified: post.date,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: {
        "@type": "Person",
        name: "Dave Jackson",
        jobTitle: "Executive English Coach",
        url: BASE_URL,
      },
      publisher: {
        "@type": "Organization",
        name: "Talk with Dave",
        url: BASE_URL,
        logo: { "@type": "ImageObject", url: `${BASE_URL}/dave-formal.jpg` },
      },
      keywords: post.keywords.join(", "),
      articleSection: post.category,
      inLanguage: "en",
    };
    const scriptId = "schema-blog-article";
    let scriptTag = document.getElementById(scriptId);
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = scriptId;
      scriptTag.setAttribute("type", "application/ld+json");
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schema);

    return () => {
      document.title = "Talk with Dave | Professional ESL Coaching";
      const c = document.querySelector('link[rel="canonical"]');
      if (c) c.setAttribute("href", `${BASE_URL}/`);
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [post]);

  if (!post) return <NotFound />;

  const moreArticles = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div style={pageStyle}>
      <style dangerouslySetInnerHTML={{ __html: sharedCss + articleCss }} />

      <nav style={navStyle}>
        <div style={navInnerStyle}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Link href="/">
              <button style={iconBtnStyle} aria-label="Home">
                <Home className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/blog">
              <span style={{ color: "var(--td-text-secondary)", cursor: "pointer", fontWeight: 600 }}>← All articles</span>
            </Link>
          </div>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="td-btn-primary" style={navCtaStyle}>
            <Calendar className="w-4 h-4" />
            Book Free Diagnostic
          </a>
        </div>
      </nav>

      <article style={{ maxWidth: "760px", margin: "0 auto", padding: "60px 24px 80px" }}>
        <div style={metaRowStyle}>
          <span style={{ color: "var(--td-accent-primary)", fontWeight: 600 }}>{post.category}</span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Clock className="w-4 h-4" /> {post.readTime} min read
          </span>
          <span>{formatDate(post.date)}</span>
        </div>

        <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", fontWeight: 800, lineHeight: 1.15, margin: "16px 0 28px" }}>
          {post.title}
        </h1>

        <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "40px", border: "1px solid var(--td-border)" }}>
          <img src={post.image} alt={post.imageAlt} style={{ width: "100%", display: "block" }} />
        </div>

        <div className="td-prose">
          {post.content.map((block, i) => renderBlock(block, i))}
        </div>

        {post.related.length > 0 && (
          <div style={relatedBoxStyle}>
            <h3 style={{ fontSize: "1rem", color: "var(--td-text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>
              Related coaching
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {post.related.map((r) => (
                <Link key={r.href} href={r.href}>
                  <span className="td-pill">{r.label} <ArrowRight className="w-4 h-4" /></span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 100px" }}>
        <div style={ctaBoxStyle}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, marginBottom: "12px" }}>
            Put this into practice
          </h2>
          <p style={{ color: "var(--td-text-secondary)", maxWidth: "560px", margin: "0 auto 28px", fontSize: "1.05rem" }}>
            Reading tips is one thing — using them under pressure is another. Book a free 30-minute diagnostic and we'll build a plan around your real work situations.
          </p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="td-btn-primary" style={bigCtaStyle}>
            <Calendar className="w-5 h-5" />
            Book Your Free Diagnostic
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <h3 style={{ fontSize: "1.4rem", fontWeight: 700, margin: "72px 0 24px" }}>Keep reading</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
          {moreArticles.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`}>
              <div className="td-card" style={miniCardStyle}>
                <div style={{ height: "150px", overflow: "hidden" }}>
                  <img src={p.image} alt={p.imageAlt} loading="lazy" className="td-card-img" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "20px" }}>
                  <span style={{ color: "var(--td-accent-primary)", fontWeight: 600, fontSize: "0.8rem" }}>{p.category}</span>
                  <h4 style={{ fontSize: "1.05rem", fontWeight: 700, lineHeight: 1.35, margin: "8px 0 0" }}>{p.title}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function renderBlock(block: BlogBlock, key: number) {
  switch (block.type) {
    case "h2":
      return <h2 key={key}>{block.text}</h2>;
    case "h3":
      return <h3 key={key}>{block.text}</h3>;
    case "p":
      return <p key={key}>{block.text}</p>;
    case "ul":
      return (
        <ul key={key}>
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={key}>
          {block.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ol>
      );
    case "quote":
      return <blockquote key={key}>{block.text}</blockquote>;
    case "cta":
      return (
        <div key={key} className="td-inline-cta">
          <p>{block.text}</p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="td-btn-primary" style={{ ...navCtaStyle, marginTop: "12px" }}>
            <Calendar className="w-4 h-4" />
            Book Free Diagnostic
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      );
    default:
      return null;
  }
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
  width: "fit-content",
};
const metaRowStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  fontSize: "0.85rem",
  color: "var(--td-text-muted)",
  flexWrap: "wrap",
};
const relatedBoxStyle: React.CSSProperties = {
  marginTop: "56px",
  paddingTop: "32px",
  borderTop: "1px solid var(--td-border)",
};
const ctaBoxStyle: React.CSSProperties = {
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
const miniCardStyle: React.CSSProperties = {
  background: "var(--td-bg-card)",
  border: "1px solid var(--td-border)",
  borderRadius: "14px",
  overflow: "hidden",
  cursor: "pointer",
};

const articleCss = `
  .td-prose { font-size: 1.0625rem; line-height: 1.8; color: var(--td-text-secondary); }
  .td-prose h2 { color: var(--td-text-primary); font-size: 1.6rem; font-weight: 700; margin: 40px 0 16px; line-height: 1.3; }
  .td-prose h3 { color: var(--td-text-primary); font-size: 1.25rem; font-weight: 700; margin: 28px 0 12px; }
  .td-prose p { margin: 0 0 20px; }
  .td-prose ul, .td-prose ol { margin: 0 0 24px; padding-left: 24px; }
  .td-prose li { margin-bottom: 10px; }
  .td-prose blockquote {
    margin: 32px 0; padding: 20px 24px;
    border-left: 3px solid var(--td-accent-primary);
    background: var(--td-bg-glass);
    border-radius: 0 12px 12px 0;
    color: var(--td-text-primary); font-style: italic; font-size: 1.1rem;
  }
  .td-inline-cta {
    margin: 36px 0; padding: 28px;
    background: radial-gradient(ellipse 80% 100% at 50% 0%, rgba(99,102,241,0.15), transparent), var(--td-bg-card);
    border: 1px solid var(--td-border); border-radius: 16px; text-align: center;
  }
  .td-inline-cta p { color: var(--td-text-primary); font-weight: 600; margin: 0; font-size: 1.05rem; }
  .td-inline-cta a { display: inline-flex !important; margin-left: auto; margin-right: auto; }
  .td-pill {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 10px 18px; border-radius: 100px;
    background: var(--td-bg-glass); border: 1px solid var(--td-border);
    color: var(--td-text-primary); font-weight: 600; font-size: 0.9rem;
    cursor: pointer; transition: all 0.2s ease;
  }
  .td-pill:hover { border-color: var(--td-accent-primary); color: var(--td-accent-primary); }
`;
