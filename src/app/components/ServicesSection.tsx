import { motion } from "motion/react";
import {
  Code2,
  Brain,
  Workflow,
  Gamepad2,
  TrendingUp,
  Megaphone,
  Palette,
} from "lucide-react";

const services = [
  { icon: Code2, title: "Full Stack Development", desc: "Scalable web applications built solidly." },
  { icon: Brain, title: "AI Models & Solutions", desc: "Custom machine learning integration." },
  { icon: Workflow, title: "Workflow Automation", desc: "Intelligent systems doing the hard work." },
  { icon: Gamepad2, title: "Game Development", desc: "Next-gen immersive platforms." },
  { icon: Palette, title: "Branding Design", desc: "Memorable brand identities." }
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-32 bg-transparent overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Header Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32 relative"
        >
          <div className="inline-block bg-white border-2 border-black text-black px-6 py-2 rounded-full mb-6 font-bold tracking-tight shadow-[4px_4px_0px_#000]">
            The Assembly Line
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-black">
            Our Digital Pipeline
          </h2>
          {/* Start of Pipeline Pipe drops from here */}
          <svg className="absolute left-1/2 -ml-6 -bottom-32 w-12 h-32" viewBox="0 0 48 128" fill="none">
            <path d="M24 0 L24 128" stroke="black" strokeWidth="6" strokeLinecap="round" strokeDasharray="12 12" />
            <circle cx="24" cy="64" r="10" fill="white" stroke="black" strokeWidth="4" />
            <circle cx="24" cy="64" r="3" fill="#FFFF00" />
          </svg>
        </motion.div>

        {/* Pipeline Container */}
        <div className="relative">

          {/* The main central pipe */}
          <div className="absolute left-1/2 top-0 bottom-0 w-8 -ml-4 bg-white border-x-4 border-black z-0 rounded-full"></div>
          {/* Animated flowing substance inside the pipe */}
          <motion.div
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-0 w-4 h-32 -ml-2 bg-[#FFFF00] rounded-full z-0 opacity-80"
          ></motion.div>

          {/* Service Nodes */}
          <div className="relative z-10 flex flex-col gap-24 py-10">
            {services.map((service, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = service.icon;

              return (
                <div key={idx} className="flex items-center w-full relative">

                  {/* Left Side Container */}
                  <div className="w-1/2 flex justify-end relative pr-8 md:pr-24">
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative w-full max-w-sm"
                      >
                        {/* Connecting Pipe */}
                        <div className="absolute right-[-2rem] md:right-[-6rem] top-1/2 -translate-y-1/2 w-8 md:w-24 h-6 bg-white border-y-4 border-black z-[-1]"></div>

                        {/* The Machine Node Widget */}
                        <div className="bg-white border-4 border-black rounded-[2rem] p-8 shadow-[8px_8px_0px_#000] hover:-translate-y-1 hover:shadow-[12px_12px_0px_#000] transition-all relative overflow-hidden group">
                          <div className="absolute top-4 right-4 w-4 h-4 rounded-full border-2 border-black bg-[#FFFF00]"></div>
                          <Icon className="w-12 h-12 mb-4 text-black group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                          <h3 className="text-2xl font-black mb-2">{service.title}</h3>
                          <p className="font-medium text-black/70">{service.desc}</p>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Central Valve/Junction */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-white border-4 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_#000] z-20">
                    <div className="w-8 h-8 rounded-full border-4 border-black bg-[#FFFF00] flex items-center justify-center">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                  </div>

                  {/* Right Side Container */}
                  <div className="w-1/2 flex justify-start relative pl-8 md:pl-24">
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative w-full max-w-sm"
                      >
                        {/* Connecting Pipe */}
                        <div className="absolute left-[-2rem] md:left-[-6rem] top-1/2 -translate-y-1/2 w-8 md:w-24 h-6 bg-white border-y-4 border-black z-[-1]"></div>

                        {/* The Machine Node Widget */}
                        <div className="bg-white border-4 border-black rounded-[2rem] p-8 shadow-[8px_8px_0px_#000] hover:-translate-y-1 hover:shadow-[12px_12px_0px_#000] transition-all relative overflow-hidden group">
                          {/* Inner Gear Visual */}
                          <div className="absolute -top-4 -right-4 w-12 h-12 bg-black/5 border-2 border-black rounded-full opacity-50 block rotate-45 group-hover:rotate-180 transition-all duration-700"></div>

                          <Icon className="w-12 h-12 mb-4 text-black group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                          <h3 className="text-2xl font-black mb-2">{service.title}</h3>
                          <p className="font-medium text-black/70">{service.desc}</p>
                        </div>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

          {/* Bottom Pipe Drain */}
          <div className="absolute left-1/2 -ml-16 bottom-[-8rem] w-32 h-32 flex flex-col items-center z-10">
            <div className="w-12 h-8 bg-white border-4 border-black rounded-b-xl border-t-0 shadow-[4px_4px_0px_#000]"></div>
            <motion.div
              animate={{ y: [0, 20], opacity: [1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mt-2 w-4 h-12 bg-[#FFFF00] rounded-full border-2 border-black"
            ></motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}


