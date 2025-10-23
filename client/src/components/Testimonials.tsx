import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Kevin",
    location: "from China",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Dave is really friendly and patient. He explains the background behind idioms and phrases, and discusses cultural differences. Not only the content of the course itself but also his teaching style helps tremendously."
  },
  {
    name: "Christy",
    location: "from South Korea",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    rating: 5,
    text: "He leads natural conversations. We talked smiling all through the lesson. Despite having many lessons, he didn't seem tired at all. I appreciate his kind teaching and great manner of listening."
  },
  {
    name: "Francesco",
    location: "from Italy",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    rating: 4.5,
    text: "Great lessons. Dave is really prepared and focused on achieving results. Overall I've had a great experience in which I improved my English skills significantly."
  },
  {
    name: "Lily",
    location: "from China",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5,
    text: "Dave is very responsible and tailors his lessons to my English level. It's great to learn from him and the feedback after each lesson is very detailed and helpful!"
  },
  {
    name: "Sero",
    location: "from Hong Kong",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    rating: 5,
    text: "Dave is very experienced and knowledgeable. A charming personality with excellent insight on IELTS matters, and a super amazing teacher to chat with casually."
  }
];

import { useLanguage } from "../hooks/useLanguage";

export default function Testimonials() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleResize = () => {
    if (window.innerWidth < 640) {
      setSlidesToShow(1);
    } else if (window.innerWidth < 1024) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => 
      Math.min(prev + 1, testimonials.length - slidesToShow)
    );
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // header height offset
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="fill-yellow-400 text-yellow-400 h-4 w-4" />);
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="text-yellow-400 h-4 w-4" />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star className="fill-yellow-400 text-yellow-400 h-4 w-4" />
          </div>
        </div>
      );
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="text-yellow-400 h-4 w-4" />);
    }
    
    return stars;
  };

  return (
    <section id="testimonials" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold mb-4 text-primary">What My Students Say</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">Hear from people who have transformed their English skills</p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              ref={sliderRef}
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`w-full flex-shrink-0 px-4`}
                  style={{ flex: `0 0 ${100 / slidesToShow}%` }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-heading font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-gray-600">{testimonial.location}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex text-yellow-400">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                      <p className="italic text-gray-700">"{testimonial.text}"</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white text-primary hover:bg-gray-100 p-2 rounded-full md:-left-5 h-auto w-auto"
            size="icon"
            variant="ghost"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous</span>
          </Button>
          
          <Button
            onClick={nextSlide}
            disabled={currentSlide >= testimonials.length - slidesToShow}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white text-primary hover:bg-gray-100 p-2 rounded-full md:-right-5 h-auto w-auto"
            size="icon"
            variant="ghost"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next</span>
          </Button>
        </div>

        <div className="mt-12 text-center">
          <Button 
            asChild
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 h-auto text-lg font-semibold shadow-lg"
            size="lg"
          >
            <a 
              href="https://meet.brevo.com/david-jackson-1" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Ready to Join Them? Book Your Trial Lesson
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
