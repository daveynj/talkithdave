import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do the online lessons work?",
    answer: "Lessons are conducted via Zoom, Microsoft Teams, or your preferred video platform. You'll receive a link before your scheduled session. All you need is a reliable internet connection, a device with a camera and microphone, and a quiet space."
  },
  {
    question: "What level of English do I need to take lessons?",
    answer: "I work with students at all levels, from beginners to advanced. For complete beginners, I recommend starting with shorter sessions focused on basic conversation skills. The most important thing is your willingness to practice and learn!"
  },
  {
    question: "How do I make a payment?",
    answer: "Payments can be made securely through PayPal, credit card, or bank transfer. You'll receive payment instructions after booking your lesson. Payment should be completed at least 24 hours before your scheduled lesson."
  },
  {
    question: "What if I need to reschedule or cancel?",
    answer: "I understand that schedules can change. You can reschedule or cancel a lesson up to 24 hours before the scheduled time without any penalty. For cancellations with less than 24 hours' notice, the full lesson fee applies."
  },
  {
    question: "Do you provide learning materials?",
    answer: "Yes, I provide customized learning materials based on your needs and interests. After each lesson, I'll share relevant resources, vocabulary lists, and practice exercises to help reinforce what we've covered."
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
