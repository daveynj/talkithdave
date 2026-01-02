import Header from "@/components/Header";
import { Link } from "wouter";
import { MessageCircle, Sparkles, Calendar, Zap, BookOpen, Target, ChevronRight, CheckCircle2, Star, ShieldCheck, MapPin, GraduationCap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl group-hover:scale-110 transition-transform">🇬🇧</span>
            <span className="font-bold text-xl tracking-tight">Talk with Dave</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm font-medium text-white/70 hover:text-white transition-colors">How It Works</a>
            <a href="#industries" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Industries</a>
            <a href="#testimonials" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Results</a>
            <a href="#faq" className="text-sm font-medium text-white/70 hover:text-white transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-4">
            <Button asChild className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 border-none shadow-lg shadow-indigo-500/20">
              <a href="https://calendly.com/daveynj113/your-first-lesson" target="_blank" rel="noopener noreferrer">
                Book Assessment <ChevronRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="bg-white/5 border-white/10 text-white/80 py-2 px-4 rounded-full flex items-center gap-2 w-fit">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                Trusted by 150+ Professionals Worldwide
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                Command the <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Boardroom</span> in English
              </h1>
              
              <p className="text-xl text-white/60 leading-relaxed max-w-xl">
                The 25-hour transformation program for <strong>Finance, Medical, and Sales executives</strong> who need to speak with British-level authority.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 py-2 px-4 rounded-xl text-sm">
                  <Target className="w-4 h-4 text-indigo-400" /> AI-Built Custom Curriculum
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 py-2 px-4 rounded-xl text-sm">
                  <span className="text-base">🇬🇧</span> Native UK Speaker
                </div>
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 py-2 px-4 rounded-xl text-sm">
                  <Zap className="w-4 h-4 text-purple-400" /> Industry-Specific Training
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 h-auto py-6 px-8 rounded-2xl group">
                  <a href="https://calendly.com/daveynj113/your-first-lesson" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                    <span className="text-lg font-bold">Start Your Transformation</span>
                    <span className="text-xs opacity-70 font-medium">$20 Assessment → Credited to Package</span>
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="h-auto py-6 px-8 rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                  <a href="#how-it-works">See How It Works</a>
                </Button>
              </div>

              <div className="flex items-center gap-2 text-sm text-white/40 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                100% Money-Back Guarantee on Assessment
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[2.5rem] opacity-20 blur-3xl" />
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#12121a] shadow-2xl aspect-video">
                <iframe 
                  src="https://www.youtube.com/embed/oU39nHNpSZY?rel=0&modestbranding=1" 
                  title="Meet Dave"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-6 flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-500/50">
                  <img src="https://talkwithdave.co.uk/dave_profile2.jpg" alt="Dave Jackson" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold">Dave Jackson</div>
                  <div className="text-xs text-white/50">Native UK • 10+ Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Social Proof */}
      <section className="py-12 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "150+", label: "Professionals Trained" },
              { num: "4.9", label: "Average Rating" },
              { num: "15+", label: "Countries Served" },
              { num: "10+", label: "Years Teaching" }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 mb-1 group-hover:scale-110 transition-transform duration-300">{stat.num}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-indigo-400 border-indigo-500/20 bg-indigo-500/5 px-4 py-1">The Challenge</Badge>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Your English is <span className="text-red-500">Holding You Back</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "😰", title: "Hesitating in Meetings", desc: "You have great ideas but struggle to express them with the same authority as native speakers." },
              { icon: "📧", title: "Email Anxiety", desc: "Every important email takes 3x longer because you're second-guessing your word choices." },
              { icon: "🎤", title: "Presentation Fear", desc: "You avoid speaking opportunities that could advance your career because you don't feel confident." },
              { icon: "🤝", title: "Missed Opportunities", desc: "Promotions and client relationships are going to colleagues who communicate more naturally." }
            ].map((item, i) => (
              <Card key={i} className="bg-white/5 border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-white/80"><strong>Sound familiar?</strong> These are the exact challenges my students overcome in 25 hours.</p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="how-it-works" className="py-24 bg-white/[0.02] relative">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-purple-400 border-purple-500/20 bg-purple-500/5 px-4 py-1">The Solution</Badge>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">25-Hour Transformation</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">One package. One price. Complete fluency roadmap built entirely around <em>your</em> profession.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { num: "01", title: "Diagnostic Assessment", desc: "In our first $20 session, I analyze your current level, your job requirements, and your specific communication challenges. You leave with a complete roadmap.", badge: "💡 $20 fully credited toward your package" },
              { num: "02", title: "AI-Powered Curriculum", desc: "Using proprietary AI technology, I build a 100% custom curriculum covering exactly what you need: your industry vocabulary, your meeting types, your presentation scenarios.", badge: "🤖 Everything is built for your role" },
              { num: "03", title: "25-Hour Mastery Program", desc: "Over 25 one-hour sessions, we systematically work through your curriculum. You practice real scenarios, receive immediate feedback, and build unshakeable confidence.", badge: "🏆 From hesitant to boardroom-confident" }
            ].map((step, i) => (
              <Card key={i} className="bg-white/5 border-white/10 p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row gap-8 items-start hover:bg-white/10 transition-all group">
                <div className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-purple-500 leading-none">{step.num}</div>
                <div className="space-y-4 flex-1">
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed text-lg">{step.desc}</p>
                  <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-xl text-indigo-400 text-sm font-medium">
                    {step.badge}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 h-auto py-6 px-10 rounded-2xl">
              <a href="https://calendly.com/daveynj113/your-first-lesson" target="_blank" rel="noopener noreferrer">
                <div className="flex flex-col items-center">
                  <span className="text-lg font-bold">Book Your Diagnostic Session</span>
                  <span className="text-xs opacity-70">$20 • 100% Risk-Free</span>
                </div>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-pink-400 border-pink-500/20 bg-pink-500/5 px-4 py-1">Specializations</Badge>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Built for <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Your Industry</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">I don't teach generic "Business English." I teach the exact language you need for your job.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { icon: "💼", color: "border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-500/5", title: "Finance & Banking", sub: "Investment Banking • Asset Management • Corporate Finance", topics: ["Earnings calls & investor presentations", "M&A negotiations & due diligence", "Regulatory briefings & compliance", "Client relationship management"], sample: "Leading a Q3 earnings call with analyst Q&A" },
              { icon: "🏥", color: "border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/5", title: "Medical & Healthcare", sub: "Physicians • Researchers • Healthcare Executives", topics: ["Patient consultations & explanations", "Medical conference presentations", "Research paper discussions", "Hospital administration meetings"], sample: "Presenting clinical trial results at an international conference" },
              { icon: "📈", color: "border-amber-500/20 hover:border-amber-500/50 hover:bg-amber-500/5", title: "Sales & Business Development", sub: "Account Executives • Sales Directors • Entrepreneurs", topics: ["High-stakes client pitches", "Objection handling & negotiation", "Executive-level presentations", "Contract discussions & closing"], sample: "Pitching a $2M enterprise solution to C-suite" }
            ].map((ind, i) => (
              <Card key={i} className={`bg-white/5 border-2 p-8 rounded-[2.5rem] transition-all duration-500 group ${ind.color}`}>
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">{ind.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{ind.title}</h3>
                <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-6">{ind.sub}</p>
                <ul className="space-y-4 mb-8">
                  {ind.topics.map((t, ti) => (
                    <li key={ti} className="flex items-start gap-3 text-sm text-white/60">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-xs">
                  <span className="text-white/30 font-bold uppercase mr-2">Sample:</span>
                  <span className="text-white/80 italic">"{ind.sample}"</span>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center text-white/40 font-medium italic">
            <strong>Also serving:</strong> Technology, Legal, Consulting, Academia, Government, and more.
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-indigo-400 border-indigo-500/20 bg-indigo-500/5 px-4 py-1">Investment</Badge>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Simple, <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Transparent Pricing</span></h2>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
            {/* Assessment */}
            <Card className="bg-white/5 border-white/10 p-10 rounded-[2.5rem] relative group overflow-hidden">
              <Badge className="absolute top-6 right-6 bg-white/10 text-white border-white/20">Start Here</Badge>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Diagnostic Assessment</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold opacity-50">$</span>
                    <span className="text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">20</span>
                  </div>
                  <p className="text-white/40 font-medium mt-2">30-minute deep dive</p>
                </div>
                
                <ul className="space-y-4 border-t border-white/5 pt-8">
                  {["Complete skills analysis", "Custom curriculum preview", "Personalized roadmap", "100% credited to package", "Money-back guarantee"].map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" /> {f}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" asChild className="w-full h-14 rounded-xl border-indigo-500/30 hover:bg-indigo-500/10 text-indigo-400 transition-all font-bold text-lg mt-4">
                  <a href="https://calendly.com/daveynj113/your-first-lesson" target="_blank" rel="noopener noreferrer">Book Assessment</a>
                </Button>
              </div>
            </Card>

            {/* Main Package */}
            <Card className="bg-white/5 border-indigo-500/50 p-10 rounded-[2.5rem] relative group shadow-2xl shadow-indigo-500/10 overflow-hidden ring-1 ring-indigo-500/20">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white px-6 py-2 rounded-bl-2xl font-bold text-sm tracking-tight">Most Popular</div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">25-Hour Transformation</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold opacity-50">$</span>
                    <span className="text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">750</span>
                  </div>
                  <p className="text-white/40 font-medium mt-2">Complete program • $30/hour</p>
                </div>
                
                <div className="grid gap-x-8 gap-y-4 md:grid-cols-1 pt-8 border-t border-white/5">
                  {["25 one-hour sessions", "AI-built custom curriculum", "Industry-specific training", "Roleplay & simulations", "Homework & materials", "Email & document review", "Flexible scheduling", "Progress tracking"].map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/70">
                      <CheckCircle2 className="w-5 h-5 text-indigo-400" /> {f}
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full h-14 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-500/20 font-bold text-lg mt-4">
                  <a href="https://calendly.com/daveynj113/your-first-lesson" target="_blank" rel="noopener noreferrer">Start with $20 Assessment</a>
                </Button>
                <p className="text-center text-xs text-white/30 font-medium italic">Assessment fee credited to package</p>
              </div>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto mt-16 p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-3xl flex items-center gap-6">
            <ShieldCheck className="w-16 h-16 text-emerald-500 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-lg mb-1">100% Risk-Free Assessment</h4>
              <p className="text-white/50 text-sm italic">"If you don't feel the diagnostic session was valuable, I'll refund your $20 immediately. No questions asked."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-amber-400 border-amber-500/20 bg-amber-500/5 px-4 py-1">Success Stories</Badge>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">What <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">Professionals</span> Say</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { author: "Kevin L.", role: "Investment Analyst • Hong Kong", quote: "Dave's approach is completely different from any English course I've taken. He understood my job as an investment analyst and built lessons around my actual daily tasks. After 3 months, I led my first earnings call in English with complete confidence.", initials: "KL", featured: true },
              { author: "Michael W.", role: "Software Engineer • China", quote: "Dave is really friendly and patient. He explains the background behind idioms and phrases, and discusses cultural differences. Not only the content but his teaching style helps tremendously.", initials: "MW" },
              { author: "Dr. Yuki T.", role: "Medical Researcher • Japan", quote: "The AI curriculum was a game-changer. Every lesson felt relevant to my work in medical research. Dave even helped me prepare for an international conference presentation.", initials: "YT" },
              { author: "Hana P.", role: "Sales Director • South Korea", quote: "I was skeptical about online lessons, but Dave made every session count. His focus on sales communication directly improved my close rate with international clients.", initials: "HP" }
            ].map((t, i) => (
              <Card key={i} className={`bg-white/5 border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all ${t.featured ? 'md:col-span-2' : ''}`}>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, si) => <Star key={si} className="w-5 h-5 text-amber-500 fill-amber-500" />)}
                </div>
                <blockquote className="text-lg text-white/80 leading-relaxed italic mb-8">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold">{t.author}</div>
                    <div className="text-xs text-white/40">{t.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[3rem] opacity-20 blur-3xl group-hover:opacity-30 transition-opacity" />
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10">
                <img src="https://talkwithdave.co.uk/dave_profile2.jpg" alt="Dave Jackson" className="w-full aspect-[4/5] object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
                <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-black/50 backdrop-blur-md border border-white/20 py-2 px-4 rounded-xl text-sm font-bold">
                  <span>🇬🇧</span> Native UK Speaker
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Badge variant="outline" className="text-indigo-400 border-indigo-500/20 bg-indigo-500/5 px-4 py-1">Your Coach</Badge>
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">Meet Dave Jackson</h2>
              <div className="space-y-6 text-white/60 text-lg leading-relaxed">
                <p>
                  I'm a native British English speaker with over <strong>10 years of teaching experience</strong> and a <strong>Business Administration degree from the University of Southampton</strong>.
                </p>
                <p>
                  What sets me apart isn't my credentials—it's my approach. I don't believe in generic "Business English" courses. I understand your specific job, your specific challenges, and build a curriculum that solves your specific problems.
                </p>
                <p>
                  I've helped investment bankers lead earnings calls, doctors present at international conferences, and sales executives close multi-million dollar deals.
                </p>
              </div>
              <div className="grid gap-4 pt-4">
                {[
                  { icon: GraduationCap, text: "BA Business Administration, University of Southampton" },
                  { icon: Calendar, text: "10+ Years Teaching Experience" },
                  { icon: Globe, text: "150+ Professionals Trained" }
                ].map((cred, i) => (
                  <div key={i} className="flex items-center gap-4 text-sm font-medium text-white/80">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                      <cred.icon className="w-5 h-5 text-indigo-400" />
                    </div>
                    {cred.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-indigo-400 border-indigo-500/20 bg-indigo-500/5 px-4 py-1">Questions</Badge>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Questions</span></h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "What happens in the $20 diagnostic session?", a: "In this 30-minute session, I assess your current English level, understand your job requirements, and identify your specific communication challenges. By the end, you'll have a clear roadmap. The $20 is fully credited toward your package if you continue." },
              { q: "What if I'm not satisfied with the assessment?", a: "If you don't feel the session was valuable, I'll refund your $20 immediately. No questions asked. My goal is to find the perfect fit between my coaching and your needs." },
              { q: "How does the AI-built curriculum work?", a: "I use custom-designed AI prompts to analyze your industry, job title, and daily communication tasks. The result is a set of 25 unique lessons that use the exact vocabulary and scenarios you encounter at work." },
              { q: "What is the typical class schedule?", a: "Most students find 1-2 sessions per week ideal. However, the 25-hour program is flexible to accommodate your busy executive schedule. We can adjust the pace based on your needs." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white/5 border border-white/10 rounded-2xl px-8 py-2 hover:bg-white/10 transition-all border-none overflow-hidden">
                <AccordionTrigger className="text-lg font-bold hover:no-underline py-4">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-white/60 text-lg leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="relative rounded-[3rem] bg-[#12121a] border border-white/10 p-12 md:p-20 text-center overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/10 via-transparent to-purple-600/10" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 space-y-10">
              <h3 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
                Stop studying.<br/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Start commanding.</span>
              </h3>
              
              <p className="text-xl text-white/50 max-w-xl mx-auto leading-relaxed">
                Unlock your true potential as a global executive. The first step is a risk-free 30-minute diagnostic session.
              </p>

              <div className="flex flex-col items-center gap-6">
                <Button size="lg" asChild className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 h-auto py-8 px-16 rounded-2xl shadow-2xl shadow-indigo-500/20 group">
                  <a href="https://calendly.com/daveynj113/your-first-lesson" target="_blank" rel="noopener noreferrer">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-black">Book Assessment Now</span>
                      <span className="text-sm opacity-70 font-medium">$20 Risk-Free • Credited to Package</span>
                    </div>
                  </a>
                </Button>
                
                <div className="flex items-center gap-8 text-white/30 text-xs font-bold uppercase tracking-[0.3em]">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500/50" /> 25-Hour Mastery</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500/50" /> Native British Coach</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500/50" /> 100% Custom</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black/40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-2 opacity-50">
              <span className="text-xl">🇬🇧</span>
              <span className="font-bold text-sm tracking-tighter uppercase">Talk with Dave</span>
            </div>
            
            <div className="flex items-center gap-8 text-white/40 text-sm font-medium">
              <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              <a href="#industries" className="hover:text-white transition-colors">Industries</a>
              <a href="#testimonials" className="hover:text-white transition-colors">Results</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </div>

            <div className="text-white/30 text-[10px] font-bold uppercase tracking-widest text-center md:text-right">
              © 2025 Dave Jackson • Southampton, England • Professional British Coaching
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
