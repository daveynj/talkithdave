import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { daveImages } from "../images";

const qualifications = [
  "Native English Speaker (UK)",
  "10+ Years Teaching Experience",
  "Business English Specialist",
  "Conversation Expert"
];

export default function About() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // header height offset
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-2/5">
            <img 
              src={daveImages.outdoor} 
              alt="Dave, ESL Teacher" 
              className="rounded-lg shadow-lg w-full max-w-md mx-auto object-cover"
            />
          </div>
          <div className="w-full md:w-3/5">
            <h2 className="font-heading text-3xl font-bold mb-6 text-primary">Meet Dave - Your Online English Teacher</h2>
            <p className="mb-4 text-lg">Hi there! I'm Dave, a native English teacher from England with over 10 years of teaching experience - 5 years in a kindergarten in China and 5 years teaching adults conversation and business English online.</p>
            <p className="mb-4">With a Bachelor's in Business Administration from the University of Southampton and a background in sales, I understand the importance of effective communication in both professional and personal settings.</p>
            <p className="mb-6">My teaching approach focuses on building your confidence through engaging conversations, practical vocabulary, and real-world scenarios — all in a friendly, supportive environment.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {qualifications.map((qualification, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>{qualification}</span>
                </div>
              ))}
            </div>
            
            <Button 
              onClick={() => scrollToSection('booking')}
              className="bg-secondary hover:bg-secondary/90 text-white"
            >
              Book a Conversation Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
