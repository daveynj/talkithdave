import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const services = [
  {
    badge: "Most Popular",
    badgeType: "primary",
    title: "Conversation Practice",
    description: "Improve your speaking fluency through natural, engaging conversations on topics that interest you.",
    price: "$20",
    duration: "30 minutes",
    features: [
      "Personalized feedback",
      "Natural speaking practice",
      "Vocabulary enrichment",
      "Confidence building"
    ],
    buttonVariant: "default" as const
  },
  {
    badge: "Professional",
    badgeType: "muted" as const,
    title: "Business English",
    description: "Master professional communication for meetings, presentations, emails, and workplace interactions.",
    price: "$20",
    duration: "30 minutes",
    features: [
      "Professional vocabulary",
      "Email writing skills",
      "Meeting participation",
      "Presentation practice"
    ],
    buttonVariant: "outline" as const
  },
  {
    badge: "Specialized",
    badgeType: "muted" as const,
    title: "Interview Preparation",
    description: "Prepare for job interviews with mock sessions, feedback, and strategies to impress employers.",
    price: "$20",
    duration: "30 minutes",
    features: [
      "Mock interviews",
      "Common question practice",
      "Industry-specific preparation",
      "Detailed feedback"
    ],
    buttonVariant: "outline" as const
  }
];

export default function Services() {
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
          <h2 className="font-heading text-3xl font-bold mb-4 text-primary">My Teaching Services</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">Choose the perfect option that fits your English learning goals</p>
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
                  onClick={() => scrollToSection('booking')}
                  className={`w-full ${service.buttonVariant === 'default' ? 'bg-secondary text-white hover:bg-secondary/90' : 'border-secondary text-secondary hover:bg-secondary hover:text-white'}`}
                  variant={service.buttonVariant}
                >
                  Book Now
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
