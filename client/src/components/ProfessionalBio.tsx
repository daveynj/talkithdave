import { Play, Award, Globe, GraduationCap } from "lucide-react";
// We need to import the photo. Assuming the path from Home.tsx is correct relative to src
// Home.tsx uses: import davePhoto from "@assets/my_professional_photo_1767370992057.png";
// @assets alias should work here too.
import davePhoto from "@assets/my_professional_photo_1767370992057.png";

export function ProfessionalBio() {
    return (
        <section style={{
            padding: '120px 24px',
            background: 'var(--bg-secondary)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(300px, 400px) 1fr',
                    gap: '80px',
                    alignItems: 'center'
                }}>
                    {/* Video/Image Column */}
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            position: 'absolute',
                            inset: '-20px',
                            background: 'var(--accent-gradient)',
                            borderRadius: 'var(--radius-lg)',
                            opacity: 0.2,
                            filter: 'blur(40px)',
                            zIndex: 0
                        }}></div>

                        <div style={{
                            position: 'relative',
                            zIndex: 1,
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                            border: '1px solid var(--border-color)',
                            background: 'var(--bg-card)',
                            boxShadow: 'var(--shadow-lg)'
                        }}>
                            {/* Video Embed */}
                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                <iframe
                                    src="https://www.youtube.com/embed/oU39nHNpSZY?rel=0&modestbranding=1"
                                    title="Meet Dave"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        border: 'none'
                                    }}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <div style={{
                                padding: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                background: 'rgba(255, 255, 255, 0.02)',
                                borderTop: '1px solid var(--border-color)'
                            }}>
                                <img
                                    src={davePhoto}
                                    alt="Dave Jackson"
                                    style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        border: '2px solid var(--accent-primary)'
                                    }}
                                />
                                <div>
                                    <div style={{ fontWeight: 700, color: 'white' }}>Dave Jackson</div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Founding Tutor · Talk with Dave</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div>
                        <div style={{
                            display: 'inline-block',
                            padding: '8px 16px',
                            background: 'var(--bg-glass)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '100px',
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            color: 'var(--accent-primary)',
                            marginBottom: '24px'
                        }}>
                            YOUR INSTRUCTOR
                        </div>

                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 800,
                            marginBottom: '24px',
                            lineHeight: 1.2
                        }}>
                            Not a Generic Tutor.<br />
                            <span className="gradient-text">A Strategic Partner.</span>
                        </h2>

                        <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.7 }}>
                            I am a native British English speaker with over <strong>10 years of teaching experience</strong> and a <strong>Business Administration degree from the University of Southampton</strong>.
                        </p>

                        <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: 1.7 }}>
                            I don't teach from textbooks. I analyze your specific job role—whether you're pushing code, closing deals, or managing patients—and build a curriculum that solves your actual daily communication problems.
                        </p>

                        <div style={{ display: 'grid', gap: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{
                                    width: '40px', height: '40px',
                                    borderRadius: '10px',
                                    background: 'rgba(99, 102, 241, 0.1)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <GraduationCap className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600, color: 'white' }}>BA Business Administration</div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>University of Southampton</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{
                                    width: '40px', height: '40px',
                                    borderRadius: '10px',
                                    background: 'rgba(99, 102, 241, 0.1)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <Award className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600, color: 'white' }}>TESOL Certified</div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Specialized in Business English</div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{
                                    width: '40px', height: '40px',
                                    borderRadius: '10px',
                                    background: 'rgba(99, 102, 241, 0.1)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <Globe className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600, color: 'white' }}>Global Experience</div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Trained professionals from 15+ countries</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
