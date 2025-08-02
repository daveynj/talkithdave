import { Linkedin, Youtube, Instagram, Mail, Calendar } from "lucide-react";
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
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // header height offset
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
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
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href.substring(1))} 
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(service.href.substring(1))} 
                    className="hover:text-primary transition-colors"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
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
                <button 
                  onClick={() => scrollToSection('booking')} 
                  className="hover:text-primary transition-colors"
                >
                  Book a Lesson
                </button>
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
