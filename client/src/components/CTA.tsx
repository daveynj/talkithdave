import { Button } from "@/components/ui/button";

export default function CTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // header height offset
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-20 bg-primary text-white text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Ready to Improve Your English?</h2>
        <p className="text-lg md:text-xl mb-8">Start your journey to English fluency with personalized lessons tailored to your goals.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            className="bg-white text-primary hover:bg-white/90 px-8 py-6 h-auto"
            size="lg"
          >
            <a 
              href="https://meet.brevo.com/david-jackson-1" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your First Lesson
            </a>
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-primary px-8 py-6 h-auto"
            size="lg"
            variant="outline"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
