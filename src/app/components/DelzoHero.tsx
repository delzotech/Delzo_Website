import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Zap, Brain, Cpu, Rocket, ArrowRight, Cog, Fingerprint } from "lucide-react";
import { Link } from "react-router";

export function DelzoHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const stickerBase = "absolute z-20 cursor-grab active:cursor-grabbing select-none";

  const letters = [
    { char: "D", pattern: "dots", color: "#FF6B6B" },
    { char: "E", pattern: "sliders", color: "#4ECDC4" },
    { char: "L", pattern: "scanlines", color: "#FFFFFF" },
    { char: "Z", pattern: "lightning", color: "#FF9F1C" },
    { char: "O", pattern: "pulse", color: "#2ECC71" },
  ];

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[95vh] pt-48 pb-32 flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-[#FFFF00] border-b-8 border-black font-['Space_Grotesk',sans-serif]"
      style={{
        backgroundImage: `radial-gradient(circle, #000 1.5px, transparent 1.5px)`,
        backgroundSize: "32px 32px",
      }}
    >
      {/* Interactive Achievements & Pillars */}
      <motion.div
        drag
        dragConstraints={ref}
        initial={{ rotate: -15, scale: 0 }}
        animate={isInView ? { rotate: -15, scale: 1 } : { scale: 0 }}
        whileHover={{ scale: 1.1, rotate: -10 }}
        className={`${stickerBase} top-[12%] left-[5%] md:left-[8%] hidden md:block`}
      >
        <div className="bg-[#FF6B6B] border-4 border-black p-5 shadow-[8px_8px_0px_rgba(0,0,0,1)] flex items-center gap-3">
          <Brain className="w-8 h-8 fill-black text-black" />
          <div className="text-left leading-tight">
            <span className="font-black text-xs uppercase block text-black opacity-60 font-mono">NODE SYSTEM</span>
            <span className="font-black text-xl tracking-tighter uppercase text-black">Neural Arch</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        drag
        dragConstraints={ref}
        initial={{ rotate: 10, scale: 0 }}
        animate={isInView ? { rotate: 10, scale: 1 } : { scale: 0 }}
        whileHover={{ scale: 1.1, rotate: 15 }}
        className={`${stickerBase} top-[18%] right-[5%] md:right-[12%] hidden md:block`}
      >
        <div className="bg-[#4ECDC4] border-4 border-black p-5 shadow-[8px_8px_0px_rgba(0,0,0,1)] rounded-full flex flex-col items-center min-w-[120px]">
          <div className="bg-white border-2 border-black p-3 rounded-full mb-2">
            <Cpu className="w-10 h-10 text-black animate-pulse" />
          </div>
          <span className="font-black text-sm uppercase text-black tracking-widest font-mono">AI OPTIMIZED</span>
        </div>
      </motion.div>

      <motion.div
        drag
        dragConstraints={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
        className={`${stickerBase} bottom-[15%] left-[6%] hidden md:block`}
      >
        <div className="relative group">
          <div className="bg-white border-4 border-black px-8 py-5 shadow-[12px_12px_0px_rgba(0,0,0,1)] group-hover:shadow-[16px_16px_0px_rgba(46,204,113,1)] transition-all">
            <p className="font-black text-2xl text-black">BUILT BY <br /> INNOVATORS</p>
          </div>
          <div className="absolute -top-3 -right-3 w-8 h-8 bg-[#FFFF00] border-2 border-black rounded-full flex items-center justify-center">
            <Fingerprint className="w-4 h-4 text-black" />
          </div>
        </div>
      </motion.div>

      <motion.div
        drag
        dragConstraints={ref}
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
        className={`${stickerBase} bottom-[25%] right-[8%] hidden md:block`}
      >
        <div className="bg-[#FF9F1C] border-4 border-black p-4 shadow-[8px_8px_0px_rgba(0,0,0,1)] flex items-center gap-4 text-black font-black">
          <div className="bg-black text-[#FFFF00] p-2">
            <Cog className="w-6 h-6 animate-spin duration-[3s]" />
          </div>
          <span className="uppercase text-lg">Next-Gen Robotics</span>
        </div>
      </motion.div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          className="inline-block bg-black text-[#FFFF00] px-4 md:px-6 py-2 mb-8 md:mb-12 shadow-[4px_4px_0px_rgba(255,107,107,1)] md:shadow-[6px_6px_0px_rgba(255,107,107,1)] -rotate-2"
        >
          <span className="text-sm md:text-lg font-black tracking-widest uppercase">Creativity Unleashed</span>
        </motion.div>

        {/* Unique Animated "DELZO" Branding */}
        <div className="flex justify-center flex-wrap gap-2 sm:gap-4 md:gap-8 mb-8 md:mb-16 px-2 md:px-4">
          {letters.map((l, i) => (
            <motion.div
              key={l.char}
              initial={{ y: 100, opacity: 0, rotate: i * 5 }}
              animate={isInView ? { y: 0, opacity: 1, rotate: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: i * 0.1
              }}
              whileHover={{
                scale: 1.15,
                rotate: (Math.random() - 0.5) * 10,
                y: -10
              }}
              className="relative group cursor-pointer"
            >
              <div
                className="text-[4rem] sm:text-[6rem] md:text-[14rem] font-black leading-none text-white transition-all duration-300"
                style={{
                  WebkitTextStroke: "4px black",
                  textShadow: "10px 10px 0px #000",
                }}
              >
                {l.char}
              </div>

              {/* Unique Letter Overlays */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {l.pattern === "dots" && (
                  <div className="w-full h-full bg-[#FF6B6B]/20" style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)', backgroundSize: '10px 10px' }} />
                )}
                {l.pattern === "scanlines" && (
                  <div className="w-full h-full bg-black/10 overflow-hidden">
                    <motion.div
                      animate={{ y: ["-100%", "100%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="w-full h-2 bg-white/40 shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                    />
                  </div>
                )}
                {l.pattern === "lightning" && (
                  <Zap className="w-24 h-24 text-[#FFFF00] fill-current animate-pulse stroke-black stroke-[3px]" />
                )}
                {l.pattern === "pulse" && (
                  <div className="w-20 h-20 rounded-full border-4 border-black animate-ping" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* New Purple-themed Tagline Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Pulsing Purple Glow Backdrop */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-24 bg-[#A855F7] blur-[100px] -z-10 rounded-full"
          />

          <div className="relative group">
            {/* Tagline Box with Purple Accents */}
            <div className="bg-white border-4 border-black p-4 md:p-8 shadow-[8px_8px_0px_rgba(168,85,247,1)] md:shadow-[12px_12px_0px_rgba(168,85,247,1)] -rotate-1 group-hover:rotate-0 transition-transform duration-300">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-[900] text-black leading-none tracking-tighter uppercase flex flex-col items-center">
                <span className="flex items-center gap-4">
                  Think It
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="text-[#A855F7]"
                  >
                    <Cog className="w-10 h-10 md:w-16 md:h-16" />
                  </motion.span>
                </span>
                <span className="text-[#A855F7] mt-2 block underline decoration-8 decoration-black underline-offset-[12px]">
                  We Delzo It
                </span>
              </h2>
            </div>

            {/* Unique "Purple-ish" Animated Stickers */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-10 -right-6 md:-right-12 bg-[#A855F7] border-2 border-black p-3 shadow-[4px_4px_0px_#000] rotate-12 hidden md:block"
            >
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-white fill-current" />
            </motion.div>
          </div>

          {/* Decorative Sparkle */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 180] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -bottom-8 -left-8 text-black hidden md:block"
          >
            <Rocket className="w-12 h-12" />
          </motion.div>
        </motion.div>


        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 mt-12 md:mt-20">
          <Link to="/our-work">
            <motion.button
              whileHover={{ x: 6, y: 6 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-[#2ECC71] text-black border-4 border-black px-8 py-4 md:px-12 md:py-6 text-xl md:text-2xl font-black uppercase shadow-[6px_6px_0px_#000] md:shadow-[10px_10px_0px_#000] hover:shadow-none transition-all flex items-center gap-2 md:gap-3"
            >
              Our Work
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:translate-x-2 text-black" />
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Decorative Dotted Border Bottom */}
      <div className="absolute bottom-0 w-full h-4 bg-black flex gap-2 justify-center items-center overflow-hidden">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-[#FFFF00] animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
        ))}
      </div>
    </section>
  );
}




