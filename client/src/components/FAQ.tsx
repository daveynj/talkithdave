import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "../hooks/useLanguage";

export default function FAQ() {
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
    <section id="faq" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold mb-4 text-primary">{t.faq.title}</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">{t.faq.subtitle}</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <Accordion type="single" collapsible className="w-full">
            {t.faq.questions.map((faq, index) => (
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
          <p className="mb-4">{t.faq.contactPrompt}</p>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="inline-block text-primary font-medium hover:underline"
          >
            {t.faq.contactCta}
          </button>
        </div>
      </div>
    </section>
  );
}