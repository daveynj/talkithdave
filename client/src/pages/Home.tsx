import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Services from "@/components/Services";
import PlanWiseESL from "@/components/PlanWiseESL";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <About />
        <Services />
        <PlanWiseESL />
        <Testimonials />
        <Process />
        <FAQ />
        <Booking />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
