import { Mail, Twitter, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../hooks/useLanguage";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold mb-4 text-primary">{t.contact.title}</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">{t.contact.subtitle}</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Primary Booking Card - Takes 2 columns on large screens */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-yellow-400/20 px-4 py-2 rounded-full">
                  <span className="font-bold text-primary">$20</span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary">{t.booking.firstLessonTitle}</h3>
              </div>
              
              <p className="text-gray-700 mb-6 text-lg">
                {t.booking.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {t.booking.firstLessonBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                asChild
                className="w-full md:w-auto bg-yellow-400 hover:bg-yellow-500 text-primary font-bold px-10 py-6 h-auto text-lg shadow-lg"
                size="lg"
              >
                <a 
                  href="https://calendly.com/daveynj113/your-first-lesson" 
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-book-trial"
                >
                  Book Professional Assessment ($20)
                </a>
              </Button>
              
              <p className="text-sm text-gray-500 mt-4">
                All lessons are conducted via video call. Choose a time that works for you.
              </p>
            </div>
            
            {/* Right Column - Email and Twitter stacked */}
            <div className="space-y-6">
              {/* Email Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Email Me</h3>
                <a
                  href="mailto:Dave@talkwithdave.co.uk"
                  className="text-sm text-gray-600 hover:underline block mb-3 break-all"
                >
                  Dave@talkwithdave.co.uk
                </a>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.location.href = "mailto:Dave@talkwithdave.co.uk"}
                  data-testid="button-email"
                >
                  Send Email
                </Button>
              </div>
              
              {/* Twitter Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                  <Twitter className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Follow Me</h3>
                <p className="text-gray-600 mb-4 text-sm">Stay updated with teaching tips</p>
                <a 
                  href="https://x.com/DaveTeacher1" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-primary text-white px-6 py-2 font-medium hover:bg-primary/90 transition-colors w-full"
                  data-testid="link-twitter"
                >
                  @DaveTeacher1
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
