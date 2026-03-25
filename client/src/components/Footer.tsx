import { Linkedin, Youtube, Instagram, Mail, Calendar } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "../hooks/useLanguage";

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.testimonials, href: "#testimonials" },
    { name: t.nav.faq, href: "#faq" },
    { name: t.nav.contact, href: "#contact" }
  ];

  const services = [
    { name: t.services.conversation.title, href: "#services" },
    { name: t.services.business.title, href: "#services" },
    { name: t.services.interview.title, href: "#services" },
    { name: t.footer.examPrep, href: "#services" },
    { name: t.footer.customLessons, href: "#services" }
  ];

  const professionLinks = [
    { name: "Software Engineers", href: "/esl-lessons-for-software-engineers" },
    { name: "Finance Professionals", href: "/esl-lessons-for-finance-professionals" },
    { name: "Business Executives", href: "/esl-lessons-for-business-executives" },
    { name: "Nurses", href: "/esl-lessons-for-nurses" },
    { name: "Engineers", href: "/esl-lessons-for-engineers" },
    { name: "Doctors", href: "/esl-lessons-for-doctors" },
    { name: "Lawyers", href: "/esl-lessons-for-lawyers" },
    { name: "IT Professionals", href: "/esl-lessons-for-it-professionals" },
    { name: "Hospitality", href: "/esl-lessons-for-hospitality-professionals" },
    { name: "Marketing", href: "/esl-lessons-for-marketing-professionals" },
    { name: "Teachers", href: "/esl-lessons-for-teachers" },
    { name: "HR Professionals", href: "/esl-lessons-for-hr-professionals" },
    { name: "Architects", href: "/esl-lessons-for-architects" },
    { name: "Pharmacists", href: "/esl-lessons-for-pharmacists" },
    { name: "Accountants", href: "/esl-lessons-for-accountants" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // header height offset
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: { preventDefault: () => void }, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary text-white p-2 rounded-md">
                <span className="font-heading font-bold text-xl">TD</span>
              </div>
              <h2 className="font-heading font-bold text-xl">Talk with Dave</h2>
            </div>
            <p className="mb-4">Personalized online English lessons with a native English teacher.</p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-white hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href.substring(1))} 
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    onClick={(e) => handleNavClick(e, service.href.substring(1))} 
                    className="hover:text-primary transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialized Courses — crawlable <Link> tags to profession pages */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Specialized Courses</h3>
            <ul className="space-y-2">
              {professionLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <a href="mailto:hello@talkwithdave.co.uk" className="hover:text-primary transition-colors">
                  hello@talkwithdave.co.uk
                </a>
              </li>
              <li className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-primary" />
                <a 
                  href="https://calendly.com/daveynj113/your-first-lesson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Book a Lesson
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Talk with Dave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
