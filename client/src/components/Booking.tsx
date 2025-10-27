import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function Booking() {
  const { t } = useLanguage();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // header height offset
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="booking" className="py-12 md:py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 text-white">
          <h2 className="font-heading text-3xl font-bold mb-4">{t.booking.title}</h2>
          <p className="max-w-2xl mx-auto text-lg">{t.booking.subtitle}</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-8">
              <h3 className="font-heading text-xl font-bold mb-4">{t.booking.firstLessonTitle}</h3>
              <p className="mb-6">{t.booking.description}</p>
              
              <div className="mb-6">
                <ul className="space-y-2">
                  {t.booking.firstLessonBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-accent mt-0.5 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a 
                href="https://calendly.com/daveynj113/your-first-lesson" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center"
              >
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                  {t.booking.button}
                </Button>
              </a>
            </div>
            
            <div className="w-full md:w-1/2 bg-gray-50 p-8">
              <h3 className="font-heading text-xl font-bold mb-4">Package Options</h3>
              
              <div className="space-y-4 mb-6">
                <p className="text-gray-600">Package options available after your first lesson</p>
              </div>
              
              <p className="text-sm text-gray-700 mb-4">
                Packages are valid for 3 months from the date of purchase. Contact me directly to purchase a package after your first lesson.
              </p>
              
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full border border-primary text-primary hover:bg-primary hover:text-white"
                variant="outline"
              >
                Ask About Packages
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
