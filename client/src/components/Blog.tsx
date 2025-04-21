import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "10 Tips to Improve Your English Conversation Skills",
    description: "Practical strategies to help you become more confident when speaking English in everyday situations.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    link: "#"
  },
  {
    title: "The Essential Guide to Business English Vocabulary",
    description: "Key terms and phrases to help you communicate effectively in professional settings.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    link: "#"
  },
  {
    title: "5 Best Apps to Supplement Your English Learning",
    description: "A review of helpful mobile applications that can boost your English skills between lessons.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80",
    link: "#"
  }
];

export default function Blog() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold mb-4 text-primary">ESL Learning Resources</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">Helpful articles and resources to improve your English</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-heading text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{post.description}</p>
              </CardContent>
              <CardFooter>
                <a href={post.link} className="text-primary font-medium hover:underline">Read More</a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  );
}
