import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Lightbulb, Sparkles } from "lucide-react";

const aiFacts = [
  "The first workable artificial intelligence programs were written in 1951 to play checkers and chess.",
  "AI systems can now diagnose certain diseases with higher accuracy than human specialists.",
  "The concept of 'Artificial Intelligence' was officially coined at the Dartmouth Conference in 1956.",
  "In 1997, IBM's DeepBlue defeated world chess champion Garry Kasparov, a historic AI milestone.",
  "Modern machine learning algorithms can predict 3D protein structures, revolutionizing modern biology.",
  "Self-driving cars use AI to process up to 4,000 GB of sensory data every single day.",
  "Generative AI models train on trillions of words to understand human language context.",
  "By 2025, it's estimated that AI will power 95% of all customer interactions globally."
];

export function ProductSection() {
  const [currentFact, setCurrentFact] = useState("");

  useEffect(() => {
    // Pick a random fact on component mount
    const randomIndex = Math.floor(Math.random() * aiFacts.length);
    setCurrentFact(aiFacts[randomIndex]);
  }, []);

  return (
    <section id="product" className="relative py-12 md:py-16 bg-transparent overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#FFFF00] border-2 border-black text-black px-6 py-2 rounded-full mb-6 shadow-[2px_2px_0px_#000]">
            <span style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700 }}>Delzo's corner</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-7xl mb-6 tracking-tighter text-[#030213]"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 900 }}
          >
            Building the future of{" "}
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #000" }}>AI tools</span>
          </h2>
          <p
            className="text-lg md:text-xl text-black/70 max-w-3xl mx-auto font-medium"
          >
            A robust ecosystem that combines automation, intelligence, and lightning speed to transform how businesses operate.
          </p>
        </motion.div>

        {/* Cartoonistic Squared Box with Animations */}
        <motion.div
          initial={{ rotate: -2, scale: 0.95, opacity: 0 }}
          whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="relative max-w-4xl mx-auto mt-12 md:mt-20"
        >
          {/* Decorative shapes behind the box */}
          <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute -top-12 -right-10 w-24 h-24 border-[4px] border-black border-dashed rounded-full -z-10 hidden md:block"
          ></motion.div>
          
          <motion.div 
             animate={{ y: [0, -15, 0] }}
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             className="absolute -bottom-8 -left-8 w-16 h-16 bg-black rounded-lg -z-10 hidden md:block"
          ></motion.div>

          {/* The Main Squared Box */}
          <div className="bg-white border-4 border-black rounded-3xl p-6 md:p-16 shadow-[12px_12px_0px_#000] md:shadow-[16px_16px_0px_#000] relative overflow-hidden group hover:-translate-y-2 hover:shadow-[20px_20px_0px_#FFFF00] transition-all duration-300">
            
            {/* Animated internal accent graphics */}
            <div className="absolute -top-16 -right-16 w-32 md:w-48 h-32 md:h-48 bg-[#FFFF00] rounded-full border-4 border-black opacity-30 group-hover:scale-150 group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>
            
            <svg width="60" height="60" viewBox="0 0 100 100" className="absolute bottom-4 right-4 md:bottom-8 md:right-8 animate-[spin_6s_linear_infinite] opacity-20 group-hover:opacity-60 transition-opacity w-10 h-10 md:w-[60px] md:h-[60px]">
               <polygon points="50,10 60,40 90,50 60,60 50,90 40,60 10,50 40,40" fill="none" stroke="#000" strokeWidth="4"/>
            </svg>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#FFFF00] border-4 border-black rounded-xl mb-6 md:mb-8 flex items-center justify-center shadow-[4px_4px_0px_#000] group-hover:rotate-12 transition-transform">
                <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-black" strokeWidth={2} />
              </div>

              <h3 
                className="text-2xl md:text-4xl text-black mb-4 md:mb-6 flex items-center gap-2 md:gap-3"
                style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 900 }}
              >
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-[#FFFF00] stroke-black" strokeWidth={2} />
                Tit Bit's
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-[#FFFF00] stroke-black" strokeWidth={2} />
              </h3>

              <div className="relative">
                <div className="text-4xl md:text-6xl text-black/10 absolute -top-4 md:-top-8 -left-4 md:-left-8 font-serif">"</div>
                <p 
                  className="text-xl md:text-3xl text-black font-medium leading-relaxed max-w-2xl px-2 md:px-4"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {currentFact || "Loading knowledge core..."}
                </p>
                <div className="text-4xl md:text-6xl text-black/10 absolute -bottom-12 md:-bottom-16 -right-4 md:-right-8 font-serif">"</div>
              </div>
              
              <p className="mt-8 md:mt-12 text-black/50 text-[10px] md:text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-[#FFFF00] border border-black animate-pulse"></span>
                 Changes every refresh
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


