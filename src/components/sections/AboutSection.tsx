import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function AboutSection() {
  const TextNode = ({ content, stroke = false }: { content: string, stroke?: boolean }) => (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`font-black tracking-tighter leading-none select-none px-1 md:px-4 shrink-0 flex items-center justify-center ${content.toLowerCase() === 'innovators' ? 'text-4xl sm:text-7xl md:text-8xl lg:text-[10rem]' : 'text-5xl sm:text-8xl md:text-[10rem] lg:text-[12rem]'}`}
      style={{ 
        fontFamily: "Space Grotesk, sans-serif", 
        WebkitTextStroke: stroke ? "2px #000" : "none", 
        color: stroke ? "transparent" : "#030213" 
      }}
    >
      {content}
    </motion.span>
  );

  return (
    <section className="relative py-12 bg-white overflow-hidden">
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6">
        
        <div className="flex flex-col items-center gap-4 md:gap-8 w-full text-center">
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-12">
            <TextNode content="Built" />
            <TextNode content="by" stroke={true} />
          </div>
          
          <div className="flex justify-center items-center">
            <TextNode content="Innovators" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mb-8"
          >
            <Link to="/team">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-black text-white px-12 py-6 rounded-full text-2xl font-black uppercase shadow-2xl shadow-orange-500/20 hover:shadow-orange-500/40 transition-all flex items-center gap-4"
              >
                Meet our team
                <ArrowRight className="w-8 h-8 transition-transform group-hover:translate-x-2" />
              </motion.button>
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
