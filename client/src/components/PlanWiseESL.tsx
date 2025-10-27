import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Lightbulb, Clock, Settings, Star } from "lucide-react";
import { daveImages } from "../images";

export default function PlanWiseESL() {
  return (
    <section id="planwise" className="py-12 md:py-20 bg-gradient-to-r from-primary/10 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="font-heading text-3xl font-bold mb-4 text-primary">
              The Dave Jackson Difference: <span className="text-secondary">Faster Progress with AI-Powered Lessons</span>
            </h2>
            <p className="mb-4 text-lg">
              As the <span className="font-semibold">founder and developer</span> of <a href="https://planwiseesl.com" target="_blank" rel="noopener noreferrer" className="text-secondary font-medium hover:underline">Plan Wise ESL</a> - a platform used by 500+ ESL teachers worldwide - I leverage cutting-edge AI technology to create exceptional learning experiences.
            </p>
            <p className="mb-6">
              <span className="font-semibold">Lessons are 100% personalized to your job, industry, and goals.</span> You'll receive professionally designed, CEFR-aligned lessons tailored to your exact needs and learning style. This means more relevant practice, faster progress, and English skills that directly apply to your real-world needs.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <Lightbulb className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Personalized Content</h4>
                  <p className="text-sm text-gray-600">Lessons customized to your specific interests</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Focused Learning</h4>
                  <p className="text-sm text-gray-600">More teaching time, less time wasted</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <Settings className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">CEFR-Aligned</h4>
                  <p className="text-sm text-gray-600">Perfect for your exact proficiency level</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <Star className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Proven Success</h4>
                  <p className="text-sm text-gray-600">Used by 500+ teachers worldwide</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => window.open("https://planwiseesl.com", "_blank")}
                className="bg-secondary hover:bg-secondary/90 text-white"
              >
                Explore Plan Wise ESL
              </Button>
              
              <a 
                href="https://calendly.com/daveynj113/your-first-lesson" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  Book a Lesson
                </Button>
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={daveImages.planwiseScreenshot} 
                alt="Plan Wise ESL Platform Screenshot" 
                className="w-full h-auto"
              />
              <div className="p-6 bg-gray-50">
                <h3 className="font-heading font-semibold text-lg mb-2">AI-Generated Lessons in Minutes</h3>
                <p className="text-gray-700 text-sm">
                  Complete lessons with reading, vocabulary, activities, and assessments - all tailored to your specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}