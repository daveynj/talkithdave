import { Mail, Twitter } from "lucide-react";
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
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:flex-1 p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-100">
              <div className="text-center">
                <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Email Me</h3>
                <a 
                  href="mailto:Dave@talkwithdave.co.uk" 
                  className="text-primary hover:underline font-medium block mb-5"
                >
                  Dave@talkwithdave.co.uk
                </a>
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white w-full md:w-auto"
                  onClick={() => window.location.href = "mailto:Dave@talkwithdave.co.uk"}
                >
                  Send Email
                </Button>
              </div>
            </div>
            
            <div className="md:flex-1 p-8 md:p-10">
              <div className="text-center">
                <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                  <Twitter className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Follow Me</h3>
                <p className="text-gray-600 mb-5">Stay updated with teaching tips and resources</p>
                <a 
                  href="https://x.com/DaveTeacher1" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-primary text-white px-6 py-2 font-medium hover:bg-primary/90 transition-colors"
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
