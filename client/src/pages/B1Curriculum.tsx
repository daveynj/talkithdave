import { useState } from "react";
import { MessageCircle, Sparkles, Calendar, Zap, BookOpen, Target, ChevronUp, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const curriculumData = [
  {
    phase: 1,
    title: "Personal Life & Identity",
    subtitle: "Sessions 1-20",
    description: "Build a rock-solid foundation by describing your experiences, values, and daily life with precision.",
    icon: "graduation-cap",
    iconColor: "text-blue-600",
    color: "bg-blue-50",
    border: "border-blue-200",
    lessons: [
      { title: "Life Milestones", vocab: ["Achievement", "Memorable", "Experience", "Goal", "Significant"] },
      { title: "Personality & Traits", vocab: ["Reliable", "Outgoing", "Honest", "Patient", "Ambitious"] },
      { title: "Hobbies & Passion", vocab: ["Enthusiastic", "Hobby", "Relaxing", "Creative", "Skill"] },
      { title: "Modern Relationships", vocab: ["Connection", "Support", "Bond", "Relative", "Acquaintance"] },
      { title: "Healthy Living", vocab: ["Nutrition", "Routine", "Active", "Habit", "Benefit"] },
      { title: "Cultural Identity", vocab: ["Tradition", "Heritage", "Custom", "Celebration", "Values"] },
      { title: "The Concept of 'Home'", vocab: ["Comfortable", "Interior", "Neighborhood", "Belonging", "Atmosphere"] },
      { title: "Personal Finance", vocab: ["Expense", "Savings", "Budget", "Affordable", "Luxury"] },
      { title: "Education", vocab: ["Academic", "Subject", "Knowledge", "Degree", "Motivation"] },
      { title: "Happiness", vocab: ["Contentment", "Positive", "Well-being", "Gratitude", "Fulfillment"] },
      { title: "Daily Routines", vocab: ["Productive", "Consistency", "Efficiency", "Prioritize", "Schedule"] },
      { title: "Childhood Memories", vocab: ["Nostalgia", "Influence", "Upbringing", "Perspective", "Playful"] },
      { title: "Personal Style", vocab: ["Appearance", "Expression", "Confidence", "Trend", "Unique"] },
      { title: "Emotional Intelligence", vocab: ["Empathy", "Awareness", "Reaction", "Sensitive", "Resilient"] },
      { title: "Travel Preferences", vocab: ["Adventure", "Relaxation", "Explore", "Comfort", "Budget"] },
      { title: "Music & Mood", vocab: ["Inspiration", "Rhythm", "Uplifting", "Lyrics", "Genre"] },
      { title: "Cinema & Stories", vocab: ["Plot", "Character", "Engaging", "Mainstream", "Impactful"] },
      { title: "Sports & Teamwork", vocab: ["Competition", "Strategy", "Athletic", "Supportive", "Victory"] },
      { title: "Food Habits", vocab: ["Cuisine", "Ingredient", "Preparation", "Dietary", "Authentic"] },
      { title: "Future Ambitions", vocab: ["Vision", "Commitment", "Obstacle", "Opportunity", "Success"] }
    ]
  },
  {
    phase: 2,
    title: "Work, Business & Society",
    subtitle: "Sessions 21-40",
    description: "Bridge the gap to professional fluency by discussing the workplace, economy, and modern society.",
    icon: "briefcase",
    iconColor: "text-emerald-600",
    color: "bg-emerald-50",
    border: "border-emerald-200",
    lessons: [
      { title: "The Future of Work", vocab: ["Productivity", "Remote", "Colleague", "Deadline", "Flexibility"] },
      { title: "Customer Service", vocab: ["Complaint", "Satisfaction", "Politeness", "Feedback", "Quality"] },
      { title: "Marketing & Ads", vocab: ["Influence", "Brand", "Consumer", "Advertisement", "Persuade"] },
      { title: "City vs. Country Life", vocab: ["Urban", "Rural", "Commute", "Peaceful", "Facility"] },
      { title: "Environmental Action", vocab: ["Sustainable", "Pollution", "Recycle", "Environment", "Waste"] },
      { title: "Modern Manners", vocab: ["Polite", "Rude", "Etiquette", "Respectful", "Behavior"] },
      { title: "Global Problems", vocab: ["Issue", "Impact", "Solution", "Poverty", "Awareness"] },
      { title: "The Economy", vocab: ["Price", "Increase", "Decrease", "Market", "Currency"] },
      { title: "Leadership", vocab: ["Management", "Inspire", "Decision", "Strategy", "Responsible"] },
      { title: "Charity & Giving", vocab: ["Donation", "Volunteer", "Generous", "Cause", "Community"] },
      { title: "Job Interviews", vocab: ["Requirement", "Qualification", "Strength", "Weakness", "Professional"] },
      { title: "Workplace Ethics", vocab: ["Integrity", "Conflict", "Standards", "Fairness", "Transparency"] },
      { title: "Entrepreneurship", vocab: ["Innovation", "Investment", "Startup", "Risk", "Profit"] },
      { title: "Time Management", vocab: ["Urgent", "Productive", "Procrastinate", "Balance", "Efficient"] },
      { title: "Networking", vocab: ["Contact", "Opportunity", "Introduction", "Relationship", "Professional"] },
      { title: "Digital Marketing", vocab: ["Engagement", "Platform", "Campaign", "Strategy", "Algorithm"] },
      { title: "Urban Planning", vocab: ["Infrastructure", "Traffic", "Community", "Greenery", "Development"] },
      { title: "The Housing Market", vocab: ["Property", "Rent", "Location", "Mortgage", "Ownership"] },
      { title: "Consumerism", vocab: ["Trend", "Purchase", "Materialism", "Quality", "Necessity"] },
      { title: "Social Responsibility", vocab: ["Impact", "Contribution", "Support", "Awareness", "Ethical"] }
    ]
  },
  {
    phase: 3,
    title: "Technology, Media & Future",
    subtitle: "Sessions 41-60",
    description: "Express sophisticated opinions on AI, digital media, and the rapid evolution of technology.",
    icon: "cpu",
    iconColor: "text-purple-600",
    color: "bg-purple-50",
    border: "border-purple-200",
    lessons: [
      { title: "The Impact of AI", vocab: ["Artificial", "Automation", "Intelligent", "Progress", "Risk"] },
      { title: "Social Media", vocab: ["Platform", "Interaction", "Privacy", "Addictive", "Follower"] },
      { title: "Space Exploration", vocab: ["Universe", "Discovery", "Resource", "Mission", "Advanced"] },
      { title: "Entertainment Trends", vocab: ["Subscription", "Content", "Series", "Genre", "Popularity"] },
      { title: "News & Media", vocab: ["Source", "Reliable", "Information", "Misleading", "Journalist"] },
      { title: "Smart Homes", vocab: ["Convenient", "Automated", "Security", "Gadget", "Interface"] },
      { title: "Online Education", vocab: ["Distance", "Access", "Flexible", "Virtual", "Interactive"] },
      { title: "Transportation", vocab: ["Vehicle", "Fuel", "Efficient", "Transport", "Infrastructure"] },
      { title: "Privacy", vocab: ["Confidential", "Permission", "Tracking", "Security", "Identity"] },
      { title: "Greatest Inventions", vocab: ["Creative", "Revolution", "Device", "Effective", "Discovery"] },
      { title: "Robotics", vocab: ["Mechanism", "Complex", "Precision", "Labor", "Replacement"] },
      { title: "Virtual Reality", vocab: ["Immersive", "Simulation", "Experience", "Sensory", "Gaming"] },
      { title: "Cybersecurity", vocab: ["Protection", "Hacking", "Prevention", "Software", "Encrypted"] },
      { title: "Biotechnology", vocab: ["Genetic", "Health", "Modification", "Ethics", "Science"] },
      { title: "Renewable Energy", vocab: ["Solar", "Wind", "Sustainable", "Source", "Generation"] },
      { title: "E-Commerce", vocab: ["Online", "Transaction", "Convenience", "Delivery", "Retail"] },
      { title: "Smartphone Addiction", vocab: ["Behavior", "Distraction", "Focus", "Habit", "Digital"] },
      { title: "Streaming Culture", vocab: ["Demand", "Binge-watch", "Original", "Series", "Access"] },
      { title: "The Internet of Things", vocab: ["Connected", "Device", "Efficiency", "Network", "Data"] },
      { title: "Future Cities", vocab: ["Modern", "Intelligent", "Design", "Population", "Architecture"] }
    ]
  },
  {
    phase: 4,
    title: "Culture & Global Perspective",
    subtitle: "Sessions 61-80",
    description: "Reach the B2 threshold by exploring world cultures, abstract concepts, and history.",
    icon: "globe",
    iconColor: "text-orange-600",
    color: "bg-orange-50",
    border: "border-orange-200",
    lessons: [
      { title: "Global Tourism", vocab: ["Destination", "Tourist", "Impact", "Local", "Explore"] },
      { title: "Language Learning", vocab: ["Communication", "Fluency", "Dialect", "Native", "Barrier"] },
      { title: "The Visual Arts", vocab: ["Expression", "Abstract", "Gallery", "Meaningful", "Masterpiece"] },
      { title: "Culinary History", vocab: ["Cuisine", "Ingredient", "Flavor", "Authentic", "Recipe"] },
      { title: "Extreme Sports", vocab: ["Adrenaline", "Dangerous", "Courage", "Thrill", "Equipment"] },
      { title: "Fashion Trends", vocab: ["Style", "Trend", "Appearance", "Individual", "Industry"] },
      { title: "Global Festivals", vocab: ["Annual", "Unique", "Spirit", "Tradition", "Participant"] },
      { title: "World History", vocab: ["Historical", "Ancient", "Modern", "Influence", "Perspective"] },
      { title: "Nature Conservation", vocab: ["Natural", "Landscape", "Conservation", "Wildlife", "Stunning"] },
      { title: "The Next 50 Years", vocab: ["Prediction", "Evolution", "Transformation", "Challenge", "Optimistic"] },
      { title: "Museums & Heritage", vocab: ["Artifact", "Preserve", "Exhibit", "History", "Culture"] },
      { title: "Literature & Books", vocab: ["Author", "Narrative", "Theme", "Published", "Inspiring"] },
      { title: "World Religions", vocab: ["Belief", "Practice", "Spiritual", "Peaceful", "Unity"] },
      { title: "Global Migration", vocab: ["Opportunity", "Settlement", "Diversity", "Experience", "Society"] },
      { title: "Architecture", vocab: ["Structure", "Modernist", "Iconic", "Blueprint", "Skyscraper"] },
      { title: "Volunteerism", vocab: ["Support", "Community", "Benefit", "Generosity", "Impact"] },
      { title: "Public Holidays", vocab: ["Celebrate", "Recognition", "National", "Event", "Tradition"] },
      { title: "Photography", vocab: ["Visual", "Capture", "Perspective", "Memory", "Aesthetic"] },
      { title: "Social Ethics", vocab: ["Equality", "Justice", "Morality", "Duty", "Responsibility"] },
      { title: "The Future of Language", vocab: ["Translation", "Globalize", "Evolution", "Context", "Connection"] }
    ]
  }
];

const IconMap: Record<string, any> = {
  "graduation-cap": BookOpen,
  "briefcase": Zap,
  "cpu": Sparkles,
  "globe": Target,
  "calendar": Calendar,
  "message-circle": MessageCircle,
  "zap": Zap,
  "book-open": BookOpen,
  "target": Target,
  "chevron-up": ChevronUp,
  "chevron-down": ChevronDown,
  "sparkles": Sparkles
};

export default function B1Curriculum() {
  const [expandedPhase, setExpandedPhase] = useState(0);

  return (
    <div className="min-h-screen pb-20 bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">DJ</div>
            <div>
              <h1 className="text-lg font-bold leading-none">Talk with Dave</h1>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">ESL Mastery</p>
            </div>
          </div>
          <Button className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-md flex items-center gap-2 hover:bg-indigo-700 transition-colors">
            <MessageCircle className="w-4 h-4" /> Message Me
          </Button>
        </div>
      </header>
      {/* Hero */}
      <section className="bg-white border-b px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-1 rounded-full text-indigo-700 text-sm font-bold mb-6">
            <Sparkles className="w-4 h-4" /> Intensive One-Year Curriculum
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900 leading-tight">
            80 High-Impact <span className="text-indigo-600">Discussion Topics</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-xl mx-auto font-medium">
            Master over 400 vocabulary terms. 2 unique lessons per week. 1 year to total B2 fluency.
          </p>
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-6 px-10 rounded-2xl transition-all shadow-xl shadow-indigo-200 flex items-center gap-2 mx-auto h-auto">
            <MessageCircle className="w-5 h-5" /> Message Me for a Sample
          </Button>
        </div>
      </section>
      {/* Stats */}
      <section className="max-w-4xl mx-auto px-4 -mt-10">
        <Card className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <Calendar className="w-6 h-6 text-indigo-500 mx-auto" />
            <div className="text-3xl font-black text-slate-800">40</div>
            <div className="text-[10px] uppercase text-slate-400 font-black tracking-widest">Weeks</div>
          </div>
          <div className="space-y-1 border-l border-slate-100">
            <Zap className="w-6 h-6 text-indigo-500 mx-auto" />
            <div className="text-3xl font-black text-slate-800">80</div>
            <div className="text-[10px] uppercase text-slate-400 font-black tracking-widest">Unique Topics</div>
          </div>
          <div className="space-y-1 border-l border-slate-100">
            <BookOpen className="w-6 h-6 text-indigo-500 mx-auto" />
            <div className="text-3xl font-black text-slate-800">400+</div>
            <div className="text-[10px] uppercase text-slate-400 font-black tracking-widest">Key Terms</div>
          </div>
          <div className="space-y-1 border-l border-slate-100">
            <Target className="w-6 h-6 text-indigo-500 mx-auto" />
            <div className="text-3xl font-black text-slate-800">B2+</div>
            <div className="text-[10px] uppercase text-slate-400 font-black tracking-widest">Target Level</div>
          </div>
        </Card>
      </section>
      {/* Curriculum */}
      <section className="max-w-4xl mx-auto px-4 mt-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight uppercase">The 80-Lesson Roadmap</h3>
          <p className="text-slate-500 max-w-lg mx-auto">
            Every hour we meet, we explore a new topic. No repetition. High intensity. Fast results.
          </p>
        </div>
        <div className="space-y-6">
          {curriculumData.map((phase, idx) => (
            <div key={idx} className={`rounded-3xl border-2 ${phase.border} overflow-hidden bg-white shadow-sm transition-all ${expandedPhase === idx ? 'ring-4 ring-indigo-50' : ''}`}>
              <button 
                onClick={() => setExpandedPhase(expandedPhase === idx ? -1 : idx)}
                className={`w-full text-left px-8 py-8 flex items-center gap-6 transition-colors ${expandedPhase === idx ? phase.color : 'hover:bg-slate-50'}`}
              >
                <div className={`p-4 rounded-2xl bg-white shadow-md border ${phase.border} flex-shrink-0`}>
                  {(() => {
                    const IconComp = IconMap[phase.icon] || BookOpen;
                    return <IconComp className={`w-6 h-6 ${phase.iconColor}`} />;
                  })()}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-black text-indigo-700 bg-indigo-100/50 px-3 py-1 rounded-full uppercase tracking-tighter">{phase.subtitle}</span>
                  </div>
                  <h4 className="text-2xl font-black text-slate-800 tracking-tight">{phase.title}</h4>
                </div>
                {expandedPhase === idx ? <ChevronUp className="text-indigo-400 w-8 h-8" /> : <ChevronDown className="text-slate-300 w-8 h-8" />}
              </button>
              {expandedPhase === idx && (
                <div className="px-8 pb-12 pt-4">
                  <p className="text-slate-600 mb-8 font-medium leading-relaxed border-l-4 border-indigo-200 pl-4">{phase.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {phase.lessons.map((lesson, lIdx) => (
                      <div key={lIdx} className="group p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-indigo-100 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-3">
                          <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-[11px] font-black text-white shadow-lg shadow-indigo-100">
                            {lIdx + 1 + (idx * 20)}
                          </div>
                          <h5 className="font-bold text-slate-800 text-lg leading-tight group-hover:text-indigo-600 transition-colors">{lesson.title}</h5>
                        </div>
                        <div className="flex flex-wrap gap-1.5 ml-11">
                          {lesson.vocab.map((word, wIdx) => (
                            <span key={wIdx} className="text-[10px] px-2 py-1 bg-white border border-slate-200 rounded-md text-slate-500 uppercase font-bold tracking-tight shadow-sm">
                              {word}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* CTA Footer */}
      <section className="mt-24 px-4 max-w-4xl mx-auto">
        <div className="bg-indigo-900 rounded-[40px] p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-4xl font-black mb-6 leading-tight">Stop studying.<br/>Start speaking.</h3>
            <p className="text-indigo-200 mb-10 text-lg max-w-md mx-auto">
              I only accept 5 new students per month to ensure quality. Send me a message now to see if we're a good fit.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-indigo-900 hover:bg-indigo-50 font-black py-8 px-14 rounded-2xl transition-all flex items-center justify-center gap-3 text-xl shadow-xl mx-auto h-auto">
              <MessageCircle className="w-6 h-6" /> Message Me Now
            </Button>
            <p className="mt-8 text-indigo-400 text-xs font-black uppercase tracking-[0.2em]">
              Powered by Plan Wise ESL • Professional British Tutor
            </p>
          </div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600/30 rounded-full blur-[100px] -ml-20 -mt-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] -mr-20 -mb-20"></div>
        </div>
        <div className="text-center mt-12 text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
          <p>© 2025 Talk with Dave • Southampton • England</p>
        </div>
      </section>
    </div>
  );
}
