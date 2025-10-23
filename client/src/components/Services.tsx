import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export default function Services() {
  const { t } = useLanguage();

const services = [
  {
    badge: "Most Popular",
    badgeType: "primary",
    title: t.services.conversation.title,
    description: t.services.conversation.description,
    price: t.services.price,
    duration: t.services.duration,
    features: t.services.includes,
    buttonVariant: "default" as const
  },
  {
    badge: "Professional",
    badgeType: "muted" as const,
    title: t.services.business.title,
    description: t.services.business.description,
    price: t.services.price,
    duration: t.services.duration,
    features: t.services.includes,
    buttonVariant: "outline" as const
  },
  {
    badge: "Specialized",
    badgeType: "muted" as const,
    title: t.services.interview.title,
    description: t.services.interview.description,
    price: t.services.price,
    duration: t.services.duration,
    features: t.services.includes,
    buttonVariant: "outline" as const
  }
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
    <section id="services" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold mb-4 text-primary">{t.services.title}</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">{t.services.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col h-full hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-4">
                  <Badge variant={service.badgeType} className="font-semibold">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold">{service.price}</span>
                  <span className="text-gray-700 ml-1">/ {service.duration}</span>
                </div>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <Check className="h-4 w-4 text-accent mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  asChild
                  className={`w-full ${service.buttonVariant === 'default' ? 'bg-secondary text-white hover:bg-secondary/90' : 'border-secondary text-secondary hover:bg-secondary hover:text-white'}`}
                  variant={service.buttonVariant}
                >
                  <a 
                    href="https://meet.brevo.com/david-jackson-1" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.services.cta}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-gray-50 p-6 rounded-lg max-w-3xl mx-auto">
          <h3 className="font-heading text-xl font-semibold mb-4 text-center">Looking for something specific?</h3>
          <p className="text-center mb-4">I offer custom packages tailored to your unique needs, including exam preparation (IELTS, TOEFL), pronunciation training, and more.</p>
          <div className="text-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Contact Me for Custom Options
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
