import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are you a qualified native English teacher?",
    answer: "Yes, I'm a native English speaker from the UK with over 10 years of teaching experience. I have a Bachelor's degree in Business Administration from the University of Southampton and specialize in ESL conversation practice, business English, and interview preparation. I'm also the creator of Plan Wise ESL, an AI-powered lesson planning platform used by 500+ ESL teachers worldwide."
  },
  {
    question: "What makes you different from other online English teachers?",
    answer: "As both an experienced ESL teacher and EdTech innovator, I combine traditional teaching methods with cutting-edge technology. I've taught in China for 5 years and online for 5 years, giving me deep cultural understanding. My business background provides authentic expertise for professional English training, and I use my own AI-powered platform to create personalized lessons."
  },
  {
    question: "How much do your lessons cost and what do I get?",
    answer: "All my lessons are $20 for 30 minutes, whether it's conversation practice, business English, or interview preparation. This includes personalized feedback, customized learning materials created with my Plan Wise ESL platform, homework assignments, and progress tracking. I offer package deals for multiple lessons with additional savings."
  },
  {
    question: "Can you help me with business English and job interviews?",
    answer: "Absolutely! With my business degree and professional experience, I specialize in business English including email writing, presentation skills, meeting participation, and professional communication. For interview preparation, I conduct mock interviews, teach industry-specific vocabulary, and provide detailed feedback to help you succeed."
  },
  {
    question: "What level of English do I need to start lessons?",
    answer: "I work with students at all levels, from complete beginners to advanced speakers. For beginners, I use simple vocabulary and visual aids. For advanced students, we focus on nuanced communication, idioms, and cultural context. My lessons are always tailored to your current level and learning goals."
  },
  {
    question: "How do online lessons work and what platform do you use?",
    answer: "Lessons are conducted via Zoom (or Tencent Meeting for Chinese students). You'll receive a meeting link before your session. All you need is internet connection, device with camera/microphone, and a quiet space. I provide all learning materials and use screen sharing for interactive activities."
  },
  {
    question: "Do you provide learning materials and homework?",
    answer: "Yes! As creator of Plan Wise ESL, I generate personalized lesson materials, vocabulary lists, practice exercises, and homework assignments tailored to your specific needs and interests. All materials are professional-quality and designed to accelerate your learning between sessions."
  },
  {
    question: "What if I need to reschedule or have technical issues?",
    answer: "You can reschedule up to 24 hours before your lesson without penalty. I'm very flexible with international students across different time zones. For technical issues, I provide full support and alternative platforms if needed. Student satisfaction is my priority."
  }
];

export default function FAQ() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // header height offset
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="faq" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold mb-4 text-primary">Frequently Asked Questions</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">Find answers to common questions about my teaching services</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm overflow-hidden mb-4 px-0">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                  <h3 className="font-heading font-semibold text-left">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="mb-4">Have a question that's not answered here?</p>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="inline-block text-primary font-medium hover:underline"
          >
            Contact me for more information
          </button>
        </div>
      </div>
    </section>
  );
}
