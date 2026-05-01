import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ChevronDown, HelpCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

const faqs = [
  {
    q: "When does my business need a website redesign?",
    a: "If your website feels outdated, loads slowly, isn’t mobile-friendly, or isn’t generating enquiries, it’s time for a redesign."
  },
  {
    q: "How long does it take to build a website?",
    a: "Timelines depend on complexity. A standard business website typically takes 5–10 days, while larger or custom projects may take longer. We begin once requirements are clearly defined."
  },
  {
    q: "How much does a website cost?",
    a: "Pricing depends on size, features, and design requirements. Basic websites cost less, while advanced or e-commerce platforms require higher investment. We provide a clear quote after understanding your needs."
  },
  {
    q: "What do I need to provide before starting?",
    a: "Basic business details, product/service information, images, logo, preferred colors, required pages, and reference websites (if any). We handle everything else."
  },
  {
    q: "How does website maintenance work?",
    a: "We ensure your website runs smoothly with regular monitoring, updates, security checks, and content changes when needed."
  },
  {
    q: "I have multiple branches. Can I use one website?",
    a: "Yes. We create a main website with dedicated pages for each branch, helping you manage all locations effectively."
  },
  {
    q: "How can I track website visitors?",
    a: "We integrate analytics tools so you can monitor traffic, user behavior, and overall performance."
  },
  {
    q: "Which platform is best for website development?",
    a: "It depends on your needs. Flexible platforms are ideal for most businesses, while specialized solutions work better for e-commerce. We choose the right one based on your goals."
  },
  {
    q: "What do I need to start an e-commerce store?",
    a: "You’ll need product details, images, pricing, business information, and payment setup. We take care of the rest."
  },
  {
    q: "Do I need an SEO-friendly website?",
    a: "Yes. An SEO-optimized website helps your business appear in search results and attract potential customers."
  },
  {
    q: "Does having a blog improve rankings?",
    a: "Yes. Regular content updates help improve visibility and bring in organic traffic over time."
  },
  {
    q: "Why choose us for your website?",
    a: "We focus on delivering high-performing websites with clear strategy, modern design, fast execution, and reliable support—built to help your business grow consistently."
  }
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="mb-6"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left p-6 md:p-8 border-4 border-black rounded-[2rem] transition-all flex items-center justify-between gap-4 ${
          isOpen ? "bg-[#FFFF00] shadow-none translate-x-1 translate-y-1" : "bg-white shadow-[8px_8px_0px_#000] hover:shadow-[12px_12px_0px_#000] hover:-translate-y-1"
        }`}
      >
        <span className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-tight">
          {q}
        </span>
        <ChevronDown className={`w-8 h-8 transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-8 md:p-10 bg-black text-white rounded-b-[2rem] border-x-4 border-b-4 border-black -mt-6 pt-12">
              <p className="text-lg md:text-xl font-medium leading-relaxed opacity-90">
                {a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#FDFDFD] selection:bg-[#FFFF00] selection:text-black">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        {/* Back Link */}
        <button 
          onClick={() => navigate(-1)} 
          className="inline-flex items-center gap-2 text-black/40 hover:text-black transition-colors font-bold uppercase text-sm mb-12"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Previous
        </button>
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 bg-[#FFFF00] border-4 border-black px-6 py-2 rounded-full mb-8 shadow-[4px_4px_0px_#000] font-black uppercase tracking-widest text-sm"
          >
            <HelpCircle className="w-5 h-5" /> Got Questions?
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black text-black tracking-tighter uppercase leading-none mb-8">
            Frequently Asked <span className="text-transparent" style={{ WebkitTextStroke: "2px #000" }}>Questions</span>
          </h1>
          <p className="text-xl md:text-2xl text-black/50 font-medium">
            Everything you need to know about working with Delzo.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} q={faq.q} a={faq.a} index={idx} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 bg-[#FFFF00] border-4 border-black rounded-[3rem] shadow-[16px_16px_0px_#000] text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 tracking-tighter">Still have questions?</h2>
          <p className="text-xl font-medium mb-10 opacity-70">We're here to help you build the perfect digital presence.</p>
          <a 
            href="https://wa.me/918190095181?text=Hi! I have a question about my website."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-10 py-5 rounded-full text-xl font-black uppercase shadow-2xl hover:scale-105 transition-all inline-block"
          >
            Chat with us
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
