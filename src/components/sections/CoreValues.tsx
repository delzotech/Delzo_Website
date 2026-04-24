import { motion } from "motion/react";
import { Zap, Brain, TrendingUp, Target } from "lucide-react";

const values = [
  {
    title: "Built for warp speed",
    subtitle: "We build fast. Ship faster.",
    description: "No 'soon'. Just working products.",
    icon: <Zap className="w-8 h-8" />,
    color: "#FFFF00"
  },
  {
    title: "AI-native DNA",
    subtitle: "AI built in — not added later.",
    description: "Systems that actually learn and adapt.",
    icon: <Brain className="w-8 h-8" />,
    color: "#FF9F1C"
  },
  {
    title: "Limitless Scaling",
    subtitle: "Built to scale from day one.",
    description: "From 10 users to 10,000 — no rebuilds.",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "#FF6B6B"
  },
  {
    title: "Zero Fluff",
    subtitle: "No slides. Just shipped products.",
    description: "Execution over talk.",
    icon: <Target className="w-8 h-8" />,
    color: "#A855F7"
  }
];

export function CoreValues() {
  return (
    <section className="py-24 md:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-6 py-2 rounded-full border-2 border-black text-black font-black uppercase tracking-widest text-sm mb-8 bg-white shadow-[4px_4px_0px_#000]"
          >
            The Delzo Standard
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-black text-black tracking-tighter uppercase leading-none">
            Why Work <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #000" }}>With Us?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {values.map((value, idx) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white border-4 border-black p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-[12px_12px_0px_#000] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all flex flex-col md:flex-row gap-8 items-start"
            >
              <div 
                className="w-16 h-16 md:w-24 md:h-24 shrink-0 rounded-2xl border-4 border-black flex items-center justify-center shadow-[6px_6px_0px_#000] group-hover:rotate-12 transition-transform"
                style={{ backgroundColor: value.color }}
              >
                {value.icon}
              </div>
              
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-black text-black mb-3 uppercase tracking-tight">
                  {value.title}
                </h3>
                <p className="text-xl font-bold text-black/80 mb-2 font-mono">
                  {value.subtitle}
                </p>
                <p className="text-lg font-medium text-black/40 font-sans italic">
                  {value.description}
                </p>
              </div>

              {/* Decorative Dot */}
              <div className="absolute top-8 right-8 w-4 h-4 rounded-full border-2 border-black" style={{ backgroundColor: value.color }} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
