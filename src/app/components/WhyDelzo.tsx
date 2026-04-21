import { motion } from "motion/react";
import { Zap, Cpu, Rocket, Target } from "lucide-react";

export function WhyDelzo() {
  const reasons = [
    {
      icon: Zap,
      statement: "Built for warp speed",
      description: "We don't do 'soon'. We build, ship, and iterate faster than the competition can even schedule a meeting.",
    },
    {
      icon: Cpu,
      statement: "AI-native DNA",
      description: "No cheap wrappers here. We engineer deep, intelligent pipelines that adapt, learn, and conquer complex logic.",
    },
    {
      icon: Rocket,
      statement: "Limitless Scaling",
      description: "From local prototypes to global infrastructure. Our architectures expand flawlessly as your user base explodes.",
    },
    {
      icon: Target,
      statement: "Zero Fluff",
      description: "Real products. Real code. We prioritize relentless execution over endless theoretical whiteboard sessions.",
    },
  ];

  return (
    <section className="relative py-32 bg-transparent overflow-hidden">

      {/* Decorative Blueprint Background Shapes */}
      <motion.div
        className="absolute -top-10 -left-10 w-40 h-40 border-4 border-black opacity-10 rounded-full"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-[#FFFF00] border-2 border-black text-black px-6 py-2 rounded-full mb-6 shadow-[2px_2px_0px_#000]">
            <span style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700 }}>Why Choose Us</span>
          </div>
          <h2
            className="text-6xl md:text-8xl mb-6 tracking-tighter"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 900, color: "#030213" }}
          >
            Built <span className="text-white" style={{ WebkitTextStroke: "3px #000" }}>different</span>
          </h2>
        </motion.div>

        {/* Statements Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                className="group cursor-default"
              >
                {/* Sketch Card */}
                <div className="relative bg-white border-4 border-black rounded-[2rem] p-8 md:p-12 shadow-[12px_12px_0px_#000] overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[16px_16px_0px_#FFFF00]">

                  {/* Background creative highlight */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FFFF00] rounded-full border-4 border-black opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 z-0"></div>

                  <div className="relative z-10">
                    {/* Icon Block */}
                    <div className="mb-8 inline-flex">
                      <div className="w-16 h-16 rounded-2xl bg-[#FFFF00] border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_#000] group-hover:rotate-12 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-black" strokeWidth={2.5} />
                      </div>
                    </div>

                    {/* Content */}
                    <h3
                      className="text-3xl md:text-4xl text-black mb-4 leading-tight"
                      style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 900 }}
                    >
                      {reason.statement}
                    </h3>
                    <p
                      className="text-lg md:text-xl text-black/70 font-medium leading-relaxed"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {reason.description}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


