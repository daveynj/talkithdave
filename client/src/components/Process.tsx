import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "1",
    title: "Book a Lesson",
    description: "Choose a convenient time slot through my online booking system."
  },
  {
    number: "2",
    title: "Share Your Goals",
    description: "Tell me about your learning objectives and areas you want to improve."
  },
  {
    number: "3",
    title: "Enjoy Learning",
    description: "Engage in personalized lessons tailored to help you reach your goals."
  }
];

export default function Process() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // header height offset
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold mb-4 text-primary">How We'll Work Together</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">A simple process designed to maximize your learning experience</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <span className="font-heading font-bold text-2xl text-primary">{step.number}</span>
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gray-50 p-6 rounded-lg">
            <h3 className="font-heading text-xl font-semibold mb-4 text-center">Your First Lesson</h3>
            <p className="text-center mb-6">In our first session, we'll get to know each other, assess your current English level, and develop a personalized learning plan.</p>
            <div className="text-center">
              <Button 
                asChild
                className="bg-secondary hover:bg-secondary/90 text-white"
              >
                <a 
                  href="https://meet.brevo.com/david-jackson-1" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Your First Lesson for $20
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
