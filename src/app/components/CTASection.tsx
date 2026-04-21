import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Lightbulb } from "lucide-react";
import { useState, useEffect } from "react";

const scenes = [
  "/scene1_sketch.png", // Walking with milkshake/coffee
  "/scene2_sketch.png", // Lightbulb spark idea
  "/scene3_sketch.png", // Opening laptop in park
  "/scene4_sketch.png", // Zoomed on screen showing Delzo logo
];

export function CTASection() {
  const [step, setStep] = useState(0);

  const startSequence = () => {
    setStep(0);
    const t1 = setTimeout(() => setStep(1), 2500);
    const t2 = setTimeout(() => setStep(2), 5000);
    const t3 = setTimeout(() => setStep(3), 7500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  };

  useEffect(() => {
    const cleanup = startSequence();
    return cleanup;
  }, []);

  return (
    <section
      id="contact"
      className="relative pt-20 md:pt-24 pb-12 md:pb-16 bg-transparent overflow-hidden rounded-t-[2.5rem] border-b-4 border-black"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-white border-2 md:border-4 border-black text-black px-4 py-1.5 md:px-6 md:py-2 rounded-full mb-6 md:mb-8 shadow-[4px_4px_0px_#000] font-black uppercase tracking-widest text-[10px] md:text-sm relative"
        >
          <span className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full animate-pulse absolute -top-1 -right-1" />
          Live Storyboard
        </motion.div>

        {/* The Movie Frame */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full bg-white border-4 border-black shadow-[12px_12px_0px_#000] md:shadow-[16px_16px_0px_#000] rounded-2xl md:rounded-3xl overflow-hidden mb-8 aspect-video flex flex-col justify-center items-center hover:scale-[1.01] transition-transform duration-300"
        >
          <AnimatePresence mode="wait">
            {/* STEP 0: WALKING WITH MILKSHAKE/COFFEE */}
            {step === 0 && (
              <motion.div
                key="step0"
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                <motion.img
                  src={scenes[0]}
                  initial={{ x: "-3%", scale: 1.05 }}
                  animate={{ x: "3%", y: [0, "-1%", 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="w-full h-full object-cover"
                  alt="Walking with milkshake"
                />
                <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 bg-black text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md font-bold text-[10px] md:text-sm tracking-widest uppercase shadow-[4px_4px_0px_rgba(255,255,255,0.2)]">
                  A typical commute...
                </div>
              </motion.div>
            )}

            {/* STEP 1: IDEA STRIKES */}
            {step === 1 && (
              <motion.div
                key="step1"
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 120, damping: 15 }}
              >
                <motion.img
                  src={scenes[1]}
                  className="w-full h-full object-cover"
                  alt="Idea strikes"
                />

                {/* Lightbulb Overlay */}
                <motion.div
                  initial={{ y: 50, scale: 0, opacity: 0 }}
                  animate={{ y: 0, scale: [1, 1.3, 1], opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    delay: 0.2,
                  }}
                  className="absolute top-[15%] left-1/2 -translate-x-1/2 bg-white border-4 border-black rounded-full p-3 md:p-4 shadow-[0_0_50px_#FFFF00] z-20 flex items-center justify-center -rotate-12"
                >
                  <Lightbulb
                    className="w-8 h-8 md:w-12 md:h-12 text-black"
                    strokeWidth={3}
                    fill="#FFFF00"
                  />
                </motion.div>

                <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 bg-black text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md font-bold text-[10px] md:text-sm tracking-widest uppercase shadow-[4px_4px_0px_#FFFF00]">
                  The Spark Hits!
                </div>
              </motion.div>
            )}

            {/* STEP 2: PARK LAPTOP MODE */}
            {step === 2 && (
              <motion.div
                key="step2"
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, ease: "circOut" }}
              >
                <motion.img
                  src={scenes[2]}
                  initial={{ scale: 1, filter: "brightness(1)", y: 0 }}
                  animate={{
                    scale: 1.1,
                    filter: "brightness(0.9)",
                    y: "-2%",
                  }}
                  transition={{ duration: 2.5, ease: "easeOut" }}
                  className="w-full h-full object-cover"
                  alt="Sitting in park with laptop"
                />
                <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 bg-black text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md font-bold text-[10px] md:text-sm tracking-widest uppercase border border-white/20">
                  Action Mode in the Park
                </div>
              </motion.div>
            )}

            {/* STEP 3: DELZO SCREEN REVEAL + CTA BUTTON */}
            {step === 3 && (
              <motion.div
                key="step3"
                className="absolute inset-0 w-full h-full flex flex-col justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Background image blurred */}
                <motion.img
                  src={scenes[3]}
                  initial={{ scale: 1.4, filter: "blur(0px)" }}
                  animate={{ scale: 1, filter: "blur(8px)" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt="Delzo screen"
                />
                <div className="absolute inset-0 bg-black/50 z-0" />

                {/* CTA overlay */}
                <motion.a
                  href="mailto:delzo.admin@gmail.com"
                  initial={{ opacity: 0, scale: 0.6, y: 50, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                    delay: 0.4,
                  }}
                  className="relative z-10 group flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 bg-[#FFFF00] border-4 border-black shadow-[10px_10px_0px_#000] md:shadow-[20px_20px_0px_#000] rounded-2xl md:rounded-[2.5rem] px-6 py-4 md:px-14 md:py-8 hover:shadow-[14px_14px_0px_#FFF] md:hover:shadow-[25px_25px_0px_#FFF] hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-10 h-10 md:w-16 md:h-16 bg-white border-2 md:border-4 border-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 shadow-[2px_2px_0px_#000] md:shadow-[4px_4px_0px_#000]"
                  >
                    <Sparkles
                      className="w-5 h-5 md:w-8 md:h-8 text-black fill-black"
                      strokeWidth={2}
                    />
                  </motion.div>
                  <div className="text-center md:text-left">
                    <span className="block text-black/70 font-black uppercase tracking-widest text-[9px] md:text-sm mb-1 group-hover:text-black">
                      Idea verified. Action mode.
                    </span>
                    <span
                      className="block text-lg sm:text-xl md:text-4xl font-black text-black tracking-tight leading-none"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      Reach out to Delzo
                    </span>
                  </div>
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
