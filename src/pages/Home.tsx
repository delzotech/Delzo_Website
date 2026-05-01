import { Navbar } from "../components/layout/Navbar";
import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { CoreValues } from "../components/sections/CoreValues";
import { ProductSection } from "../components/sections/ProductSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { CTASection } from "../components/sections/CTASection";
import { Footer } from "../components/layout/Footer";
import { Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen p-0 relative select-none max-w-[1440px] mx-auto">
      <div className="bg-grid-paper rounded-none sm:rounded-b-[2.5rem] w-full min-h-screen overflow-hidden shadow-2xl relative flex flex-col font-sans sm:border-x-2 sm:border-b-2 border-black/10">
        <Navbar />
        <HeroSection />
        <CTASection />
        <ServicesSection />
        <CoreValues />
        <ProductSection />
        <AboutSection />
        <TestimonialsSection />
        <Footer />
      </div>

      {/* Floating Call Integration */}
      <a
        href="tel:+919087842931"
        className="fixed bottom-4 left-4 md:bottom-10 md:left-10 z-[9999] w-12 h-12 md:w-16 md:h-16 bg-blue-600 border-2 md:border-4 border-black rounded-full shadow-[4px_4px_0px_#000] md:shadow-[6px_6px_0px_#000] flex items-center justify-center hover:-translate-y-2 hover:shadow-[8px_8px_0px_#000] transition-all group animate-[bounce_3s_infinite]"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform" />
      </a>

      {/* Floating WhatsApp Integration */}
      <a
        href="https://wa.me/918190095181?text=Hi%20Delzo!%20I%20would%20like%20to%20get%20in%20touch."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-10 md:right-10 z-[9999] w-12 h-12 md:w-16 md:h-16 bg-[#25D366] border-2 md:border-4 border-black rounded-full shadow-[4px_4px_0px_#000] md:shadow-[6px_6px_0px_#000] flex items-center justify-center hover:-translate-y-2 hover:shadow-[8px_8px_0px_#000] transition-all group animate-[bounce_3s_infinite]"
        aria-label="Chat with us on WhatsApp"
      >
        {/* WhatsApp Logo SVG */}
        <svg 
          viewBox="0 0 24 24" 
          className="w-6 h-6 md:w-8 md:h-8 text-white fill-current group-hover:scale-110 transition-transform"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}
