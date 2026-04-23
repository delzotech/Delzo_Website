import { motion } from "motion/react";
import { Linkedin, Globe } from "lucide-react";

export function AboutSection() {
  const founders = [
    {
      name: "Narendra A",
      role: "Co-Founder & CTO",
      bio: "Tech visionary building scalable neural architectures and automated robotic systems.",
      image: "NA",
      type: "robot",
      gender: "male",
      linkedin: "https://www.linkedin.com/in/narendra-anbazhagan2106/",
      portfolio: "https://naren-portfolio.me"
    },
    {
      name: "Deekshana C S",
      role: "Co-Founder & CAIO",
      bio: "AI strategist optimizing machine learning models with precision-tuned algorithms taking output to the cutting edge.",
      image: "DS",
      type: "sliders",
      gender: "female",
      linkedin: "https://www.linkedin.com/in/deekshana-c-s-921564292/",
      portfolio: "https://deekshanacs-portfolio.vercel.app/"
    },
    {
      name: "Dharsini J",
      role: "Core Team",
      bio: "Driving innovation in AI and automated systems.",
      image: "DJ",
      type: "robot",
      gender: "female",
      linkedin: "https://www.linkedin.com/in/dharsini-jayaprakash-a23b7a2a2/"
    },
    {
      name: "Dhinesha G",
      role: "Core Team",
      bio: "Building robust architectures for next-generation tech.",
      image: "DG",
      type: "sliders",
      gender: "female",
      linkedin: "https://www.linkedin.com/in/dhinesha-g-673601292/"
    },
    {
      name: "Hardhik V",
      role: "Core Team",
      bio: "Focusing on performance optimization and scalable solutions.",
      image: "HV",
      type: "robot",
      gender: "male",
      linkedin: "https://www.linkedin.com/in/hardhik-v-bb55bb290/"
    },
    {
      name: "Kavinkumar S",
      role: "Core Team",
      bio: "Developing intuitive interfaces and seamless interactions.",
      image: "KS",
      type: "sliders",
      gender: "male",
      linkedin: "https://www.linkedin.com/in/kavin-kumar-subramaniam-02496b2a3/"
    },
    {
      name: "Keerthikumar R",
      role: "Core Team",
      bio: "Engineering backend systems and data pipelines.",
      image: "KR",
      type: "robot",
      gender: "male",
      linkedin: "https://www.linkedin.com/in/keerthi-kumar-r-8a965b2a5/"
    },
    {
      name: "Sandhya Verma M",
      role: "Core Team",
      bio: "Ensuring quality and reliability across all products.",
      image: "SM",
      type: "sliders",
      gender: "female",
      linkedin: "https://www.linkedin.com/in/sandhya-verma-553101292/"
    }
  ];

  const FounderCard = ({ founder, color }: { founder: typeof founders[0], color: string }) => (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      whileHover="hover"
      variants={{
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
        hover: { y: -8, scale: 1.02 }
      }}
      className="relative border-2 md:border-4 border-black rounded-xl md:rounded-[2rem] px-2 md:px-6 py-1.5 md:py-5 shadow-[3px_3px_0px_#000] md:shadow-[6px_6px_0px_#000] flex items-center justify-between gap-1.5 md:gap-4 shrink min-w-0 w-full max-w-[160px] sm:max-w-[200px] md:max-w-[340px]"
      style={{ backgroundColor: color }}
    >
      <div className="text-left overflow-hidden relative z-10 shrink min-w-0 flex-1">
        <h3 className="text-[10px] sm:text-sm md:text-xl font-black text-black leading-tight mb-0.5 md:mb-1 truncate" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
          {founder.name}
        </h3>
        <div className="text-black/80 font-bold text-[7px] sm:text-[9px] md:text-sm tracking-wide uppercase truncate">
          {founder.role}
        </div>
      </div>
      <div className="flex gap-1 md:gap-2 shrink-0 relative z-10 ml-1">
        {founder.linkedin && (
          <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 rounded-full bg-white border md:border-2 border-black hover:bg-black hover:text-white transition-colors flex items-center justify-center shrink-0">
            <Linkedin className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-current" fill="currentColor" />
          </a>
        )}
        {"portfolio" in founder && founder.portfolio && (
          <a href={founder.portfolio} target="_blank" rel="noopener noreferrer" className="w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 rounded-full bg-white border md:border-2 border-black hover:bg-black hover:text-white transition-colors flex items-center justify-center shrink-0">
            <Globe className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-current" />
          </a>
        )}
      </div>
    </motion.div>
  );

  const TextNode = ({ content, stroke = false }: { content: string, stroke?: boolean }) => (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`font-black tracking-tighter leading-none select-none px-1 md:px-4 shrink-0 flex items-center justify-center ${content.toLowerCase() === 'innovators' ? 'text-xl sm:text-4xl md:text-7xl lg:text-[6rem]' : 'text-2xl sm:text-5xl md:text-[6rem] lg:text-[8rem]'}`}
      style={{ 
        fontFamily: "Space Grotesk, sans-serif", 
        WebkitTextStroke: stroke ? "1px #000" : "none", 
        color: stroke ? "transparent" : "#030213" 
      }}
    >
      {content}
    </motion.span>
  );

  return (
    <section id="about" className="relative py-16 md:py-32 bg-transparent overflow-hidden">
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-1 sm:px-2 md:px-8">
        
        {/* Mixed Text and Card Grid aligned by rows */}
        <div className="flex flex-col items-center gap-2 md:gap-10 w-full">
          
          {/* Row 1 */}
          <div className="flex justify-center items-center flex-nowrap gap-1.5 md:gap-8 w-full px-1 md:px-0">
            <FounderCard founder={founders[0]} color="#FFFF00" />
            <TextNode content="Built" />
            <FounderCard founder={founders[1]} color="#FFFF00" />
          </div>
          
          {/* Row 2 */}
          <div className="flex justify-center items-center flex-nowrap gap-1.5 md:gap-8 w-full px-1 md:px-0">
            <FounderCard founder={founders[2]} color="#FFFF00" />
            <FounderCard founder={founders[3]} color="#FFFF00" />
            <TextNode content="by" />
          </div>

          {/* Row 3 */}
          <div className="flex justify-center items-center flex-nowrap gap-1.5 md:gap-8 w-full px-1 md:px-0">
            <TextNode content="the" />
            <FounderCard founder={founders[4]} color="#FFFF00" />
            <FounderCard founder={founders[5]} color="#FFFF00" />
          </div>

          {/* Row 4 */}
          <div className="flex justify-center items-center flex-nowrap gap-1.5 md:gap-8 w-full px-1 md:px-0">
            <FounderCard founder={founders[6]} color="#FFFF00" />
            <TextNode content="Innovators" stroke={true} />
            <FounderCard founder={founders[7]} color="#FFFF00" />
          </div>

        </div>

      </div>
    </section>
  );
}

