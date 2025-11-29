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
    badgeType: "default" as const,
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
        {/* Areas of Expertise Section */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold mb-4 text-primary">Areas of Expertise</h2>
        </div>
        <div className="mb-16 max-w-3xl mx-auto bg-gray-50 rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">One Package. Complete Customization.</h3>
          <p className="mb-4 text-lg">I do not sell generic courses. When you purchase a lesson package, I build a 100% personalized curriculum for you. Your custom plan can include a mix of:</p>
          <ul className="space-y-3 text-lg">
            <li>✅ Business Negotiation & Presentation Skills</li>
            <li>✅ IELTS / TOEFL Exam Strategy</li>
            <li>✅ Executive Conversation & Soft Skills</li>
            <li>✅ Industry-Specific Vocabulary (Tech, Finance, Logistics, and more)</li>
          </ul>
          <div className="mt-8 flex justify-center">
            <a 
              href="https://calendly.com/daveynj113/your-first-lesson"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white text-lg font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-primary/90 transition-all"
              data-testid="button-book-assessment-areas"
            >
              Book Professional Assessment ($20)
            </a>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold mb-4 text-primary">The Roadmap to Executive Fluency</h2>
          <p className="font-medium text-lg text-gray-700">No random chats. No generic textbooks. A structured 3-step system.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <div className="mb-3 text-xl font-bold text-primary">Step 1: The Diagnosis (Assessment)</div>
            <div className="mb-2 font-semibold text-gray-800">"We don’t guess. We analyze."</div>
            <div>Your journey starts with a 30-minute professional consultation. We will audit your current speaking ability, identify your specific grammar and pronunciation "blind spots," and define your career goals.</div>
            <div className="mt-2 text-sm text-gray-600"><span className="font-bold">Why it’s $20:</span> This is not a sales call. It is a working session where you get an immediate evaluation of your CEFR level and a strategy to move forward.</div>
          </div>
          {/* Step 2 */}
          <div className="bg-gray-100 rounded-lg shadow p-6 flex flex-col items-center text-center border border-gray-200">
            <div className="mb-3 text-xl font-bold text-primary">Step 2: The Strategy (Your Custom Plan)</div>
            <div className="mb-2 font-semibold text-gray-800">"Built by AI. Refined by an Expert."</div>
            <div className="mb-2">Using my proprietary Plan Wise technology, I will design a 100% personalized curriculum just for you.</div>
            <ul className="mb-2 text-left list-disc ml-6 text-gray-800">
              <li><b>Your Industry:</b> Vocabulary specific to Finance, Tech, Management, or any profession/interest.</li>
              <li><b>Your Weakness:</b> Drills to fix your specific hesitation points.</li>
              <li><b>Your Goal:</b> Whether it's an interview, a presentation, or the IELTS exam, your plan is built backwards from that target.</li>
            </ul>
          </div>
          {/* Step 3 */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <div className="mb-3 text-xl font-bold text-primary">Step 3: The Transformation (The Work)</div>
            <div className="mb-2 font-semibold text-gray-800">"Consistent Execution. Real Results."</div>
            <div className="mb-2">Once your plan is ready, we begin. You purchase a lesson package, and we work systematically through your custom curriculum.</div>
            <ul className="mb-2 text-left list-disc ml-6 text-gray-800">
              <li>Every lesson builds on the last.</li>
              <li>You receive detailed feedback notes after every session.</li>
              <li>We track your progress against the goals we set in Step 1.</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <a 
            href="https://calendly.com/daveynj113/your-first-lesson"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white text-lg font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-primary/90 transition-all"
            data-testid="button-book-assessment-roadmap"
          >
            Book Professional Assessment ($20)
          </a>
        </div>
      </div>
    </section>
  );
}
