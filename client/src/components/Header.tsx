import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../hooks/useLanguage";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
  customBookingText?: string;
  customBookingLink?: string;
}

export default function Header({ customBookingText, customBookingLink }: HeaderProps = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();
  
  const bookingText = "Book Professional Assessment ($20)";
  const bookingLink = customBookingLink || "https://calendly.com/daveynj113/your-first-lesson";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // header height offset
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleNavClick = (e: { preventDefault: () => void }, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <header className={`sticky top-0 z-50 w-full ${scrolled ? 'bg-white shadow-sm' : 'bg-white'} transition-all duration-200`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <div className="bg-primary text-white p-2 rounded-md">
            <span className="font-heading font-bold text-xl">TD</span>
          </div>
          <span className="font-heading font-bold text-xl md:text-2xl text-primary">
            Talk with Dave
          </span>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="font-medium hover:text-primary transition-colors">{t.nav.about}</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="font-medium hover:text-primary transition-colors">{t.nav.services}</a>
          <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')} className="font-medium hover:text-primary transition-colors">{t.nav.testimonials}</a>
          <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="font-medium hover:text-primary transition-colors">{t.nav.faq}</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="font-medium hover:text-primary transition-colors">{t.nav.contact}</a>
          <LanguageSwitcher />
          <Button 
            asChild
            className="bg-yellow-400 text-primary hover:bg-yellow-500 transition-colors font-bold shadow-md"
          >
            <a 
              href={bookingLink} 
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-header-booking"
            >
              {bookingText}
            </a>
          </Button>
        </nav>
      </div>
      
      {/* Mobile Navigation Menu */}
      <nav className={`bg-white py-4 md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto space-y-3 px-4">
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="block w-full text-left py-2 font-medium hover:text-primary transition-colors">{t.nav.about}</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="block w-full text-left py-2 font-medium hover:text-primary transition-colors">{t.nav.services}</a>
          <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')} className="block w-full text-left py-2 font-medium hover:text-primary transition-colors">{t.nav.testimonials}</a>
          <a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="block w-full text-left py-2 font-medium hover:text-primary transition-colors">{t.nav.faq}</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block w-full text-left py-2 font-medium hover:text-primary transition-colors">{t.nav.contact}</a>
          <div className="py-2">
            <LanguageSwitcher />
          </div>
          <Button 
            asChild
            className="w-full bg-yellow-400 text-primary hover:bg-yellow-500 transition-colors font-bold shadow-md"
          >
            <a 
              href={bookingLink} 
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-header-booking-mobile"
            >
              {bookingText}
            </a>
          </Button>
        </div>
      </nav>
      {/* Mobile sticky booking CTA (keeps book button visible on small screens) */}
      <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <Button
          asChild
          className="bg-yellow-400 text-primary hover:bg-yellow-500 font-bold px-6 py-3 rounded-full shadow-xl"
        >
          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-sticky-booking"
          >
            {bookingText}
          </a>
        </Button>
      </div>
    </header>
  );
}
