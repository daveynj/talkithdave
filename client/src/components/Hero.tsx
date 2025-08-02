import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { daveImages } from "../images";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // header height offset
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Struggling to Sound Professional in English? Get Fluent Fast
            </h1>
            <p className="text-lg md:text-xl mb-3">
              1-on-1 personalized English lessons with Dave, your native-speaking online ESL teacher and creator of <span className="font-semibold">Plan Wise ESL</span> - teaching software used by 500+ teachers worldwide.
            </p>
            <p className="text-lg mb-6">
              Learn from someone who doesn't just teach English, but innovates how English is taught online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('booking')}
                className="bg-secondary hover:bg-secondary/90 text-white font-medium px-6 py-6 h-auto"
                size="lg"
              >
                Book Your First Lesson for $20
              </Button>
              <Button
                onClick={() => scrollToSection('about')}
                className="bg-white text-primary hover:bg-white/90 font-medium px-6 py-6 h-auto"
                size="lg"
                variant="outline"
              >
                Learn More
              </Button>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex -space-x-2">
                <Avatar className="border-2 border-white h-8 w-8">
                  <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" alt="Student" />
                  <AvatarFallback>ST</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white h-8 w-8">
                  <AvatarImage src="https://randomuser.me/api/portraits/men/42.jpg" alt="Student" />
                  <AvatarFallback>ST</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white h-8 w-8">
                  <AvatarImage src="https://randomuser.me/api/portraits/women/22.jpg" alt="Student" />
                  <AvatarFallback>ST</AvatarFallback>
                </Avatar>
              </div>
              <p className="ml-3 text-sm">Join <span className="font-bold">150+ students</span> who improved their English</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src={daveImages.formal} 
              alt="Dave, professional ESL teacher" 
              className="rounded-lg shadow-lg max-w-sm w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
