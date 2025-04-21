import { 
  ContactMessage, 
  InsertContactMessage, 
  BlogPost, 
  InsertBlogPost,
  Testimonial,
  InsertTestimonial
} from "@shared/schema";

// Storage interface
export interface IStorage {
  // Contact message methods
  getContactMessages(): Promise<ContactMessage[]>;
  getContactMessage(id: number): Promise<ContactMessage | undefined>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  
  // Blog post methods
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  // Testimonial methods
  getTestimonials(): Promise<Testimonial[]>;
  getTestimonial(id: number): Promise<Testimonial | undefined>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

// Memory storage implementation
export class MemStorage implements IStorage {
  private contactMessages: Map<number, ContactMessage>;
  private blogPosts: Map<number, BlogPost>;
  private testimonials: Map<number, Testimonial>;
  private contactMessageId: number;
  private blogPostId: number;
  private testimonialId: number;

  constructor() {
    this.contactMessages = new Map();
    this.blogPosts = new Map();
    this.testimonials = new Map();
    this.contactMessageId = 1;
    this.blogPostId = 1;
    this.testimonialId = 1;
    
    // Initialize with sample testimonials
    this.initializeTestimonials();
    // Initialize with sample blog posts
    this.initializeBlogPosts();
  }

  // Contact message methods
  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }

  async getContactMessage(id: number): Promise<ContactMessage | undefined> {
    return this.contactMessages.get(id);
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.contactMessageId++;
    const newMessage: ContactMessage = { 
      ...message, 
      id, 
      createdAt: new Date() 
    };
    this.contactMessages.set(id, newMessage);
    return newMessage;
  }
  
  // Blog post methods
  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values());
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.slug === slug);
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const id = this.blogPostId++;
    const newPost: BlogPost = { 
      ...post, 
      id, 
      createdAt: new Date() 
    };
    this.blogPosts.set(id, newPost);
    return newPost;
  }
  
  // Testimonial methods
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async getTestimonial(id: number): Promise<Testimonial | undefined> {
    return this.testimonials.get(id);
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.testimonialId++;
    const newTestimonial: Testimonial = { 
      ...testimonial, 
      id 
    };
    this.testimonials.set(id, newTestimonial);
    return newTestimonial;
  }
  
  // Initialize with sample data
  private initializeTestimonials() {
    const sampleTestimonials: InsertTestimonial[] = [
      {
        name: "Kevin",
        location: "from China",
        rating: "5",
        testimonial: "Dave is really friendly and patient. He explains the background behind idioms and phrases, and discusses cultural differences. Not only the content of the course itself but also his teaching style helps tremendously.",
        imageUrl: "https://randomuser.me/api/portraits/men/72.jpg"
      },
      {
        name: "Christy",
        location: "from South Korea",
        rating: "5",
        testimonial: "He leads natural conversations. We talked smiling all through the lesson. Despite having many lessons, he didn't seem tired at all. I appreciate his kind teaching and great manner of listening.",
        imageUrl: "https://randomuser.me/api/portraits/women/60.jpg"
      },
      {
        name: "Francesco",
        location: "from Italy",
        rating: "4.5",
        testimonial: "Great lessons. Dave is really prepared and focused on achieving results. Overall I've had a great experience in which I improved my English skills significantly.",
        imageUrl: "https://randomuser.me/api/portraits/men/36.jpg"
      },
      {
        name: "Lily",
        location: "from China",
        rating: "5",
        testimonial: "Dave is very responsible and tailors his lessons to my English level. It's great to learn from him and the feedback after each lesson is very detailed and helpful!",
        imageUrl: "https://randomuser.me/api/portraits/women/33.jpg"
      },
      {
        name: "Sero",
        location: "from Hong Kong",
        rating: "5",
        testimonial: "Dave is very experienced and knowledgeable. A charming personality with excellent insight on IELTS matters, and a super amazing teacher to chat with casually.",
        imageUrl: "https://randomuser.me/api/portraits/men/55.jpg"
      }
    ];
    
    sampleTestimonials.forEach(testimonial => {
      this.createTestimonial(testimonial);
    });
  }
  
  private initializeBlogPosts() {
    const sampleBlogPosts: InsertBlogPost[] = [
      {
        title: "10 Tips to Improve Your English Conversation Skills",
        slug: "improve-english-conversation-skills",
        description: "Practical strategies to help you become more confident when speaking English in everyday situations.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
      },
      {
        title: "The Essential Guide to Business English Vocabulary",
        slug: "business-english-vocabulary-guide",
        description: "Key terms and phrases to help you communicate effectively in professional settings.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
      },
      {
        title: "5 Best Apps to Supplement Your English Learning",
        slug: "best-english-learning-apps",
        description: "A review of helpful mobile applications that can boost your English skills between lessons.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
      }
    ];
    
    sampleBlogPosts.forEach(post => {
      this.createBlogPost(post);
    });
  }
}

export const storage = new MemStorage();
