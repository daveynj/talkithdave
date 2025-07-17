import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const firstLessonBenefits = [
  "Assessment of your current English level",
  "Discussion of your learning goals",
  "Engaging conversation practice",
  "Personalized learning plan"
];

const packages = [
  {
    name: "4 Lessons Package",
    price: "$76",
    savings: "Save 5% compared to single lessons"
  },
  {
    name: "8 Lessons Package",
    price: "$144",
    savings: "Save 10% compared to single lessons"
  },
  {
    name: "12 Lessons Package",
    price: "$204",
    savings: "Save 15% compared to single lessons"
  }
];

export default function Booking() {
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
          <h2 className="font-heading text-3xl font-bold mb-4">Book Your English Lesson</h2>
          <p className="max-w-2xl mx-auto text-lg">Take the first step toward English fluency today</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-8">
              <h3 className="font-heading text-xl font-bold mb-4">Your First Lesson</h3>
              <p className="mb-6">Start your English journey with a personalized 30-minute conversation session for just $20.</p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2">What to expect:</h4>
                <ul className="space-y-2">
                  {firstLessonBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-accent mt-0.5 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a 
                href="https://meet.brevo.com/david-jackson-1" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center"
              >
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                  Book Your Lesson
                </Button>
              </a>
            </div>
            
            <div className="w-full md:w-1/2 bg-gray-50 p-8">
              <h3 className="font-heading text-xl font-bold mb-4">Package Options</h3>
              
              <div className="space-y-4 mb-6">
                {packages.map((pkg, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-md hover:border-primary transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">{pkg.name}</h4>
                      <span className="font-bold">{pkg.price}</span>
                    </div>
                    <p className="text-sm text-gray-700">{pkg.savings}</p>
                  </div>
                ))}
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
