import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
    MessageCircle,
    CheckCircle,
    TrendingUp,
    Users,
    Calendar,
    Sparkles,
    Home,
    AlertTriangle,
    Star,
    Clock,
    Globe,
    Award,
    ArrowRight,
    Play,
    Shield
} from "lucide-react";
import { LessonEmbed } from "@/components/LessonEmbed";
import { ProfessionCurriculum } from "@/components/ProfessionCurriculum";
import { ProfessionalBio } from "@/components/ProfessionalBio";
import { ProfessionalTestimonials } from "@/components/ProfessionalTestimonials";
import type { ProfessionData } from "@/data/professionData";

interface ProfessionalLandingPageProps {
    data: ProfessionData;
}

export function ProfessionalLandingPage({ data }: ProfessionalLandingPageProps) {
    const [showStickyCTA, setShowStickyCTA] = useState(false);

    // SEO and page title
    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);

        document.title = data.metaTitle;

        // Update meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', data.metaDescription);

        // Add Open Graph tags for social sharing
        const ogTags = [
            { property: 'og:title', content: data.metaTitle },
            { property: 'og:description', content: data.metaDescription },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: window.location.href },
        ];

        ogTags.forEach(tag => {
            let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
            if (!ogTag) {
                ogTag = document.createElement('meta');
                ogTag.setAttribute('property', tag.property);
                document.head.appendChild(ogTag);
            }
            ogTag.setAttribute('content', tag.content);
        });

        // Add schema.org structured data
        const schemas = [
            {
                "@context": "https://schema.org",
                "@type": "Course",
                "name": data.title,
                "description": data.metaDescription,
                "provider": {
                    "@type": "EducationalOrganization",
                    "name": "Talk with Dave",
                    "url": window.location.origin
                },
                "courseCode": `ESL-${data.slug}`,
                "hasCourseInstance": {
                    "@type": "CourseInstance",
                    "courseMode": "online",
                    "courseWorkload": "25 hours",
                    "instructor": {
                        "@type": "Person",
                        "name": "Dave Jackson",
                        "jobTitle": "Executive English Coach",
                        "nationality": "British",
                        "alumniOf": {
                            "@type": "CollegeOrUniversity",
                            "name": "University of Southampton"
                        },
                        "hasCredential": [
                            {
                                "@type": "EducationalOccupationalCredential",
                                "name": "TEFL Certificate"
                            },
                            {
                                "@type": "EducationalOccupationalCredential",
                                "name": "Bachelor's in Business Administration"
                            }
                        ]
                    }
                },
                "audience": {
                    "@type": "EducationalAudience",
                    "audienceType": data.profession
                },
                "teaches": `Professional English communication skills for ${data.profession}`,
                "educationalLevel": "Professional",
                "inLanguage": "en",
                "offers": [
                    {
                        "@type": "Offer",
                        "name": "Free Diagnostic Session",
                        "price": "0",
                        "priceCurrency": "USD",
                        "description": "100% risk-free 30-minute diagnostic assessment. No obligation.",
                        "url": "https://calendly.com/daveynj113/your-first-lesson"
                    },
                    {
                        "@type": "Offer",
                        "name": "25-Hour Transformation Program",
                        "price": "850",
                        "priceCurrency": "USD",
                        "description": "25 personalised one-on-one lessons ($30/hour). AI-built curriculum tailored to your job, industry, and goals."
                    }
                ],
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5.0",
                    "bestRating": "5",
                    "ratingCount": "150"
                }
            },
            {
                "@context": "https://schema.org",
                "@type": "Service",
                "name": `English Coaching for ${data.profession}`,
                "provider": {
                    "@type": "Person",
                    "name": "Dave Jackson",
                    "url": "https://talkwithdave.co.uk"
                },
                "description": `Personalised 1-on-1 English coaching for ${data.profession}. Every lesson is custom-built using AI (PlanWise ESL) and personally taught by Dave Jackson, a native British coach with 10+ years experience.`,
                "serviceType": "Online English Coaching",
                "areaServed": "Worldwide",
                "termsOfService": "https://talkwithdave.co.uk"
            }
        ];

        schemas.forEach((schema, index) => {
            const id = `schema-profession-${index}`;
            let scriptTag = document.getElementById(id);
            if (!scriptTag) {
                scriptTag = document.createElement('script');
                scriptTag.id = id;
                scriptTag.setAttribute('type', 'application/ld+json');
                document.head.appendChild(scriptTag);
            }
            scriptTag.textContent = JSON.stringify(schema);
        });

        // Show sticky CTA on scroll
        const handleScroll = () => {
            setShowStickyCTA(window.scrollY > 600);
        };
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            document.title = 'Talk with Dave | Professional ESL Coaching';
            window.removeEventListener('scroll', handleScroll);
            schemas.forEach((_, index) => {
                const el = document.getElementById(`schema-profession-${index}`);
                if (el) el.remove();
            });
        };
    }, [data]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const calendlyUrl = 'https://calendly.com/daveynj113/your-first-lesson';

    return (
        <>
            {/* CSS Variables matching Homepage */}
            <style dangerouslySetInnerHTML={{
                __html: `
                :root {
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
                    --shadow-glow: 0 0 40px rgba(99, 102, 241, 0.3);
                    --radius-md: 12px;
                    --radius-lg: 20px;
                }
                
                .gradient-text {
                    background: var(--accent-gradient);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                .btn-primary {
                    background: var(--accent-gradient);
                    box-shadow: var(--shadow-glow);
                }
                
                .btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 0 60px rgba(99, 102, 241, 0.5);
                }
                
                @keyframes slideUp {
                    from { transform: translateY(100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .animate-slideUp { animation: slideUp 0.3s ease-out; }
            `}} />

            <div style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)', minHeight: '100vh', fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>

                {/* Sticky CTA Bar */}
                {showStickyCTA && (
                    <div className="animate-slideUp" style={{
                        position: 'fixed',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: 50,
                        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                        padding: '12px 24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '16px',
                        boxShadow: '0 -4px 20px rgba(0,0,0,0.3)'
                    }}>
                        <span style={{ fontWeight: 600 }}>Ready to get started?</span>
                        <Button
                            asChild
                            style={{ background: 'white', color: '#6366f1', fontWeight: 700 }}
                        >
                            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <Calendar className="w-4 h-4 mr-2" />
                                Schedule Your Free Consultation
                            </a>
                        </Button>
                    </div>
                )}

                {/* Navigation */}
                <nav style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    padding: '16px 24px',
                    background: 'rgba(10, 10, 15, 0.8)',
                    backdropFilter: 'blur(20px)',
                    borderBottom: '1px solid var(--border-color)'
                }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <Link href="/">
                                <Button variant="ghost" size="icon" style={{ borderRadius: '50%' }}>
                                    <Home className="w-5 h-5" />
                                </Button>
                            </Link>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    background: 'var(--accent-gradient)',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700
                                }}>
                                    DJ
                                </div>
                                <div>
                                    <div style={{ fontWeight: 700, fontSize: '1.125rem' }}>Talk with Dave</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                        Professional ESL
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a
                            href={calendlyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '12px 24px',
                                borderRadius: 'var(--radius-md)',
                                fontWeight: 600,
                                border: 'none',
                                cursor: 'pointer',
                                color: 'white',
                                transition: 'all 0.3s ease',
                                textDecoration: 'none'
                            }}
                        >
                            <Calendar className="w-4 h-4" />
                            Schedule Your Free Consultation
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </nav>

                {/* Hero Section */}
                <section style={{
                    position: 'relative',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '140px 24px 80px',
                    overflow: 'hidden'
                }}>
                    {/* Background gradients */}
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: `
                            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.3), transparent),
                            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(139, 92, 246, 0.15), transparent),
                            radial-gradient(ellipse 40% 30% at 20% 80%, rgba(168, 85, 247, 0.1), transparent)
                        `,
                        zIndex: 0
                    }} />

                    <div style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '60px',
                        alignItems: 'center',
                        position: 'relative',
                        zIndex: 1
                    }}>
                        {/* Left Content */}
                        <div style={{ maxWidth: '600px' }}>
                            {/* Badge */}
                            <div style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '8px 16px',
                                background: 'var(--bg-glass)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '100px',
                                fontSize: '0.875rem',
                                marginBottom: '24px'
                            }}>
                                <Sparkles className="w-4 h-4" style={{ color: 'var(--warning)' }} />
                                <span>Professional 1-on-1 Coaching</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#f59e0b' }}>
                                    <Star className="w-4 h-4" style={{ fill: '#f59e0b' }} /> 5.0
                                </span>
                            </div>

                            {/* Title */}
                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                                fontWeight: 800,
                                lineHeight: 1.1,
                                marginBottom: '24px'
                            }}>
                                {data.h1.split(' ').map((word, i) =>
                                    i === 0 || word.toLowerCase() === 'english' ?
                                        <span key={i} className="gradient-text">{word} </span> :
                                        <span key={i}>{word} </span>
                                )}
                            </h1>

                            {/* Subtitle */}
                            <p style={{
                                fontSize: '1.25rem',
                                color: 'var(--text-secondary)',
                                marginBottom: '32px',
                                lineHeight: 1.7
                            }}>
                                {data.heroSubtitle}
                            </p>

                            {/* Features */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
                                {[
                                    { icon: Globe, text: 'Online Worldwide' },
                                    { icon: Clock, text: 'Flexible Schedule' },
                                    { icon: Award, text: 'TESOL Certified' }
                                ].map((f, i) => (
                                    <div key={i} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '10px 16px',
                                        background: 'var(--bg-glass)',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: 'var(--radius-md)',
                                        fontSize: '0.875rem'
                                    }}>
                                        <f.icon className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                                        {f.text}
                                    </div>
                                ))}
                            </div>

                            {/* CTAs */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
                                <a
                                    href={calendlyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        padding: '20px 40px',
                                        borderRadius: 'var(--radius-md)',
                                        fontWeight: 600,
                                        fontSize: '1.125rem',
                                        border: 'none',
                                        cursor: 'pointer',
                                        color: 'white',
                                        transition: 'all 0.3s ease',
                                        textDecoration: 'none'
                                    }}
                                >
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <Calendar className="w-5 h-5" />
                                        Schedule Your Free Consultation
                                        <ArrowRight className="w-5 h-5" />
                                    </span>
                                    <span style={{ fontSize: '0.75rem', opacity: 0.8, marginTop: '4px' }}>
                                        No commitment required
                                    </span>
                                </a>
                                <button
                                    onClick={() => scrollToSection('lesson-preview')}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '16px 32px',
                                        background: 'transparent',
                                        border: '2px solid var(--accent-primary)',
                                        borderRadius: 'var(--radius-md)',
                                        color: 'var(--accent-primary)',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <Play className="w-4 h-4" />
                                    See Sample Lesson
                                </button>
                            </div>

                            {/* Guarantee */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                                <CheckCircle className="w-4 h-4" style={{ color: 'var(--success)' }} />
                                100% free consultation · Custom curriculum · Native British tutor
                            </div>
                        </div>

                        {/* Right Side - Video/Image placeholder */}
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ position: 'relative', width: '100%', maxWidth: '500px' }}>
                                {/* Glow effect */}
                                <div style={{
                                    position: 'absolute',
                                    inset: '-20px',
                                    background: 'var(--accent-gradient)',
                                    borderRadius: 'var(--radius-lg)',
                                    opacity: 0.3,
                                    filter: 'blur(40px)',
                                    zIndex: -1
                                }} />

                                {/* Video/Image container */}
                                <div style={{
                                    background: 'var(--bg-secondary)',
                                    borderRadius: 'var(--radius-lg)',
                                    border: '1px solid var(--border-color)',
                                    padding: '40px',
                                    textAlign: 'center'
                                }}>
                                    <div style={{
                                        fontSize: '4rem',
                                        marginBottom: '24px'
                                    }}>🎯</div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>
                                        Your Path to Fluency
                                    </h3>
                                    <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0 }}>
                                        {[
                                            '25 personalized lessons',
                                            'Industry-specific vocabulary',
                                            'Real-world practice scenarios',
                                            'Flexible scheduling worldwide'
                                        ].map((item, i) => (
                                            <li key={i} style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '12px',
                                                padding: '12px 0',
                                                borderBottom: i < 3 ? '1px solid var(--border-color)' : 'none',
                                                color: 'var(--text-secondary)'
                                            }}>
                                                <CheckCircle className="w-5 h-5" style={{ color: 'var(--success)' }} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Social Proof Bar */}
                <section style={{
                    padding: '40px 24px',
                    background: 'var(--bg-secondary)',
                    borderTop: '1px solid var(--border-color)',
                    borderBottom: '1px solid var(--border-color)'
                }}>
                    <div style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '48px',
                        flexWrap: 'wrap'
                    }}>
                        {[
                            { value: '500+', label: 'Lessons Delivered' },
                            { value: '15+', label: 'Countries' },
                            { value: '5.0', label: 'Average Rating', icon: Star },
                            { value: '100%', label: 'Personalized' }
                        ].map((stat, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: i < 3 ? '48px' : '0' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                                        {stat.value}
                                        {stat.icon && <Star className="w-6 h-6" style={{ fill: '#f59e0b', color: '#f59e0b' }} />}
                                    </div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        {stat.label}
                                    </div>
                                </div>
                                {i < 3 && <div style={{ width: '1px', height: '40px', background: 'var(--border-color)' }} />}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Benefits Section */}
                <section style={{ padding: '120px 24px', background: 'var(--bg-primary)' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <span style={{
                                display: 'inline-block',
                                padding: '8px 16px',
                                background: 'var(--bg-glass)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '100px',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                color: 'var(--accent-primary)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                marginBottom: '16px'
                            }}>
                                Tailored For Your Career
                            </span>
                            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
                                Why {data.profession} <span className="gradient-text">Choose This Program</span>
                            </h2>
                            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                                Every lesson is designed around the real communication challenges you face
                            </p>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '24px',
                            marginBottom: '48px'
                        }}>
                            {data.benefits.map((benefit, i) => (
                                <div key={i} style={{
                                    padding: '32px',
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: 'var(--radius-lg)',
                                    transition: 'all 0.3s ease',
                                    cursor: 'default'
                                }}>
                                    <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                                        <div style={{
                                            width: '40px',
                                            height: '40px',
                                            background: 'rgba(16, 185, 129, 0.1)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            <CheckCircle className="w-5 h-5" style={{ color: 'var(--success)' }} />
                                        </div>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>{benefit}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Challenges Section */}
                <section style={{ padding: '120px 24px', background: 'var(--bg-secondary)' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
                                Do Any of These <span className="gradient-text">Sound Familiar?</span>
                            </h2>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '24px',
                            marginBottom: '48px'
                        }}>
                            {data.commonChallenges.map((challenge, i) => (
                                <div key={i} style={{
                                    padding: '24px',
                                    background: 'var(--bg-card)',
                                    border: '1px solid rgba(239, 68, 68, 0.3)',
                                    borderRadius: 'var(--radius-md)'
                                }}>
                                    <div style={{ display: 'flex', gap: '16px' }}>
                                        <AlertTriangle className="w-6 h-6" style={{ color: 'var(--danger)', flexShrink: 0 }} />
                                        <p style={{ color: 'var(--text-secondary)' }}>{challenge}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Solution CTA */}
                        <div style={{
                            padding: '40px',
                            background: 'rgba(16, 185, 129, 0.1)',
                            border: '1px solid rgba(16, 185, 129, 0.3)',
                            borderRadius: 'var(--radius-lg)',
                            textAlign: 'center'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
                                <Shield className="w-8 h-8" style={{ color: 'var(--success)' }} />
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Good News!</h3>
                            </div>
                            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px' }}>
                                Your customized 25-lesson curriculum will address each of these challenges with practical, profession-specific English skills.
                            </p>
                            <a
                                href={calendlyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '16px 32px',
                                    borderRadius: 'var(--radius-md)',
                                    fontWeight: 600,
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: 'white',
                                    textDecoration: 'none'
                                }}
                            >
                                <Calendar className="w-5 h-5" />
                                Get Your Custom Curriculum
                            </a>
                        </div>
                    </div>
                </section>

                {/* Curriculum Section */}
                <section id="curriculum" style={{ padding: '120px 24px', background: 'var(--bg-primary)' }}>
                    <ProfessionCurriculum curriculum={data.curriculum} profession={data.profession} />
                </section>

                {/* Lesson Preview Section */}
                <section id="lesson-preview" style={{ padding: '120px 24px', background: 'var(--bg-secondary)' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', marginBottom: '60px' }}>
                        <span className="gradient-text" style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                            Interactive Demo
                        </span>
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, margin: '16px 0' }}>
                            Preview Course Material
                        </h2>
                        <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                            Explore sample material used in our 1-on-1 sessions. I guide you through interactive modules like this to master {data.profession.toLowerCase()} concepts.
                        </p>
                    </div>
                    <LessonEmbed lesson={data.firstLesson} />
                </section>

                {/* Meet Your Tutor - EEAT Bio */}
                <ProfessionalBio />

                {/* Professional Testimonials - EEAT Social Proof */}
                <ProfessionalTestimonials />

                {/* How It Works */}
                <section style={{ padding: '120px 24px', background: 'var(--bg-primary)' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800 }}>
                                How It <span className="gradient-text">Works</span>
                            </h2>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            {[
                                { num: '01', icon: Calendar, title: 'Free Consultation', desc: 'Discuss your goals and create your personalized 25-lesson curriculum' },
                                { num: '02', icon: Users, title: '1-on-1 Sessions', desc: 'Weekly sessions focused on your specific professional English needs' },
                                { num: '03', icon: TrendingUp, title: 'See Results', desc: 'Advance your career with improved communication and confidence' }
                            ].map((step, i) => (
                                <div key={i} style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'auto 1fr',
                                    gap: '32px',
                                    padding: '40px',
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: 'var(--radius-lg)'
                                }}>
                                    <div className="gradient-text" style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1 }}>
                                        {step.num}
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <step.icon className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                                            {step.title}
                                        </h3>
                                        <p style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section id="contact-cta" style={{
                    padding: '120px 24px',
                    background: `
                        radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99, 102, 241, 0.4), transparent),
                        radial-gradient(ellipse 60% 40% at 80% 60%, rgba(139, 92, 246, 0.2), transparent),
                        var(--bg-secondary)
                    `,
                    textAlign: 'center'
                }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800, marginBottom: '24px' }}>
                            Ready to Master <span className="gradient-text">Professional English?</span>
                        </h2>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '40px' }}>
                            Join {data.profession.toLowerCase()} worldwide who have advanced their careers.
                            Schedule your <strong style={{ color: 'white' }}>free consultation</strong> today.
                        </p>
                        <a
                            href={calendlyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                            style={{
                                display: 'inline-flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '24px 48px',
                                borderRadius: 'var(--radius-md)',
                                fontWeight: 600,
                                fontSize: '1.25rem',
                                border: 'none',
                                cursor: 'pointer',
                                color: 'white',
                                textDecoration: 'none'
                            }}
                        >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <Calendar className="w-6 h-6" />
                                Schedule Your Free Consultation
                                <ArrowRight className="w-6 h-6" />
                            </span>
                            <span style={{ fontSize: '0.875rem', opacity: 0.8, marginTop: '8px' }}>
                                No commitment · Custom curriculum · Native British tutor
                            </span>
                        </a>
                    </div>
                </section>

                {/* Footer */}
                <footer style={{
                    padding: '60px 24px 40px',
                    background: 'var(--bg-tertiary)',
                    borderTop: '1px solid var(--border-color)'
                }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
                            <div>
                                <div style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '16px' }}>Talk with Dave</div>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                                    Executive English coaching for professionals who need to speak with authority.
                                </p>
                            </div>
                            <div>
                                <div style={{ fontWeight: 600, marginBottom: '16px' }}>Specialized Courses</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <Link href="/esl-lessons-for-software-engineers" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.875rem' }}>Software Engineers</Link>
                                    <Link href="/esl-lessons-for-finance-professionals" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.875rem' }}>Finance Professionals</Link>
                                    <Link href="/esl-lessons-for-business-executives" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.875rem' }}>Business Executives</Link>
                                    <Link href="/esl-lessons-for-nurses" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.875rem' }}>Nurses</Link>
                                    <Link href="/esl-lessons-for-engineers" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.875rem' }}>Engineers</Link>
                                </div>
                            </div>
                            <div>
                                <div style={{ fontWeight: 600, marginBottom: '16px' }}>Quick Links</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.875rem' }}>Home</Link>
                                    <a href="https://calendly.com/daveynj113/your-first-lesson" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.875rem' }}>Book a Session</a>
                                    <a href="mailto:Dave@talkwithdave.co.uk" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.875rem' }}>Dave@talkwithdave.co.uk</a>
                                </div>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center', paddingTop: '24px', borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                            © {new Date().getFullYear()} Talk with Dave · Professional ESL Coaching · Southampton, England
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
