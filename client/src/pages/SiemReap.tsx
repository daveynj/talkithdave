import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Briefcase, Users, MapPin } from "lucide-react";
import { siemReapTranslations } from "@/data/siemReapTranslations";
import { daveImages } from "../images";

function SiemReapHero() {
  const { title, subtitle, description } = siemReapTranslations.hero;
  return (
    <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6" />
              <Badge variant="secondary" className="text-sm">
                Based in Siem Reap
              </Badge>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {title}
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 opacity-90">
              {subtitle}
            </h2>
            <div className="space-y-4 text-base md:text-lg">
              {description.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src={daveImages.outdoor} 
              alt="Dave, professional English teacher in Siem Reap" 
              className="rounded-lg shadow-2xl max-w-sm w-full object-cover"
              data-testid="img-dave-siemreap"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SiemReapServices() {
  const { title, description, types } = siemReapTranslations.services;
  const icons = [MessageCircle, Briefcase, Users];
  
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          {title}
        </h2>
        <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          {description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {types.map((service, index) => {
            const Icon = icons[index];
            return (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300" data-testid={`card-service-${index}`}>
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SiemReapBooking() {
  const { title, description, cta, link } = siemReapTranslations.booking;
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
            {description}
          </p>
          <Button 
            asChild
            className="bg-yellow-400 hover:bg-yellow-500 text-primary font-bold px-10 py-8 h-auto text-xl shadow-2xl transform hover:scale-105 transition-all duration-200"
            size="lg"
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-book-assessment"
            >
              {cta}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function SiemReap() {
  useEffect(() => {
    document.title = siemReapTranslations.title;
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <SiemReapHero />
        <SiemReapServices />
        <SiemReapBooking />
      </main>
      <Footer />
    </div>
  );
}
