import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { daveImages } from "../images";
import { useLanguage } from "../hooks/useLanguage";

export default function Hero() {
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
    <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t.hero.headline}
            </h1>
            <p className="text-lg md:text-xl mb-3">
              {t.hero.subtitle}
            </p>
            <p className="text-lg mb-6">
              {t.hero.description}
            </p>
            <div className="mb-6 flex items-center">
              <div className="flex -space-x-2">
                <Avatar className="border-2 border-white h-10 w-10">
                  <AvatarImage src="https://randomuser.me/api/portraits/women/44.jpg" alt="Student" />
                  <AvatarFallback>ST</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white h-10 w-10">
                  <AvatarImage src="https://randomuser.me/api/portraits/men/42.jpg" alt="Student" />
                  <AvatarFallback>ST</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white h-10 w-10">
                  <AvatarImage src="https://randomuser.me/api/portraits/women/22.jpg" alt="Student" />
                  <AvatarFallback>ST</AvatarFallback>
                </Avatar>
              </div>
              <p className="ml-3 text-base font-medium">{t.hero.socialProof}</p>
            </div>
            <Button 
              asChild
              className="bg-yellow-400 hover:bg-yellow-500 text-primary font-bold px-10 py-8 h-auto text-xl shadow-2xl transform hover:scale-105 transition-all duration-200"
              size="lg"
            >
              <a 
                href="https://meet.brevo.com/david-jackson-1" 
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-book-lesson"
              >
                {t.hero.ctaPrimary}
              </a>
            </Button>
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
