import { Mail, Video, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold mb-4 text-primary">Get in Touch</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">Have questions? I'm here to help with your English learning journey</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 bg-gray-50 p-8 rounded-lg">
              <div className="text-center mb-6">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-2">Contact Me Directly</h3>
                <p className="text-gray-600 mb-4">For the fastest response, please email me directly:</p>
                <a 
                  href="mailto:Dave@talkwithdave.co.uk" 
                  className="text-xl text-primary hover:underline font-semibold"
                >
                  Dave@talkwithdave.co.uk
                </a>
                <div className="mt-6">
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-white"
                    onClick={() => window.location.href = "mailto:Dave@talkwithdave.co.uk"}
                  >
                    Send Email
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="bg-gray-50 p-6 rounded-lg h-full">
                <h3 className="font-heading text-xl font-semibold mb-6">Connect With Me</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <a href="mailto:Dave@talkwithdave.co.uk" className="text-primary hover:underline">
                        Dave@talkwithdave.co.uk
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Video className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Lesson Platform</h4>
                      <p>Zoom (or Tencent Meeting for Chinese students)</p>
                    </div>
                  </div>
                </div>
                
                <h4 className="font-medium mb-2">Follow Me</h4>
                <div className="flex">
                  <a 
                    href="https://x.com/DaveTeacher1" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
