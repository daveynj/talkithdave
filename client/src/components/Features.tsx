import { MessageCircle, GraduationCap, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <MessageCircle className="h-6 w-6 text-primary" />,
    title: "Authentic Conversations",
    description: "Practice with natural, flowing conversations on topics that interest you."
  },
  {
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    title: "Tailored Learning",
    description: "Lessons designed for your specific goals, interests, and proficiency level."
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-primary" />,
    title: "Continuous Progress",
    description: "Track your improvement with regular feedback and personalized guidance."
  }
];

export default function Features() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-md transition-shadow">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
