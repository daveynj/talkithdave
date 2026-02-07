import { Star, MessageCircle } from "lucide-react";

export function ProfessionalTestimonials() {
    const testimonials = [
        {
            name: "Kevin L.",
            role: "Investment Analyst",
            location: "Hong Kong",
            quote: "Dave's approach is completely different. He understood my job as an investment analyst and built lessons around my actual daily tasks. After 3 months, I led my first earnings call in English.",
            rating: 5
        },
        {
            name: "Dr. Yuki T.",
            role: "Medical Researcher",
            location: "Japan",
            quote: "The AI curriculum was a game-changer. Every lesson felt relevant to my work in medical research. Dave even helped me prepare for an international conference presentation.",
            rating: 5
        },
        {
            name: "Hana P.",
            role: "Sales Director",
            location: "South Korea",
            quote: "I was skeptical about online lessons, but Dave made every session count. His focus on sales communication directly improved my close rate with international clients.",
            rating: 5
        }
    ];

    return (
        <section style={{
            padding: '120px 24px',
            background: 'var(--bg-primary)',
            position: 'relative'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 16px',
                        background: 'var(--bg-glass)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '100px',
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        marginBottom: '24px'
                    }}>
                        <MessageCircle className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                        <span>SUCCESS STORIES</span>
                    </div>

                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800 }}>
                        What Professionals <span className="gradient-text">Say</span>
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '32px'
                }}>
                    {testimonials.map((t, i) => (
                        <div key={i} style={{
                            padding: '40px',
                            background: 'var(--bg-card)',
                            border: '1px solid var(--border-color)',
                            borderRadius: 'var(--radius-lg)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                            transition: 'transform 0.3s ease',
                            cursor: 'default'
                        }}>
                            <div style={{ display: 'flex', gap: '4px' }}>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4" style={{ fill: '#fbbf24', color: '#fbbf24' }} />
                                ))}
                            </div>

                            <blockquote style={{
                                fontSize: '1.125rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.6,
                                flex: 1,
                                fontStyle: 'italic'
                            }}>
                                "{t.quote}"
                            </blockquote>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                borderTop: '1px solid var(--border-color)',
                                paddingTop: '24px'
                            }}>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    background: 'var(--accent-gradient)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700,
                                    fontSize: '1.125rem',
                                    color: 'white'
                                }}>
                                    {t.name.substring(0, 2)}
                                </div>
                                <div>
                                    <div style={{ fontWeight: 700, color: 'white' }}>{t.name}</div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                                        {t.role} · {t.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
