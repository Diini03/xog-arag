
import { Hero } from "@/components/Hero";
import { SeriesATimeTrap } from "@/components/SeriesATimeTrap";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { ROICalculator } from "@/components/ROICalculator";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SeriesATimeTrap />
      <Services />
      <ROICalculator />
      <FAQ />
      <About />
      <Contact />
      <Footer />
      <CookieBanner />
      <Chatbot />
    </div>
  );
};

export default Index;
