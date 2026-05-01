import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { CheckCircle2, Globe, Users, Zap } from "lucide-react";

const stats = [
  {
    label: "Projects Completed",
    value: 50,
    suffix: "+",
    icon: CheckCircle2,
    color: "#FF6B6B"
  },
  {
    label: "Websites Delivered",
    value: 30,
    suffix: "+",
    icon: Globe,
    color: "#4ECDC4"
  },
  {
    label: "Active Clients",
    value: 20,
    suffix: "+",
    icon: Users,
    color: "#A855F7"
  },
  {
    label: "Performance Score",
    value: 99,
    suffix: "%",
    icon: Zap,
    color: "#2ECC71"
  }
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = (ref.current !== null); // Simplified view check for now, will use effect

  useEffect(() => {
    const controls = animate(count, value, { duration: 5, ease: "easeOut" });
    return controls.stop;
  }, [count, value]);

  return (
    <div className="flex items-center justify-center">
      <motion.span className="text-5xl md:text-7xl font-black tracking-tighter">{rounded}</motion.span>
      <span className="text-4xl md:text-6xl font-black text-[#A855F7]">{suffix}</span>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 bg-white border-b-8 border-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div 
                className="w-16 h-16 rounded-2xl border-4 border-black flex items-center justify-center mb-6 shadow-[6px_6px_0px_#000] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all"
                style={{ backgroundColor: stat.color }}
              >
                <stat.icon className="w-8 h-8 text-black" />
              </div>
              
              <CountUp value={stat.value} suffix={stat.suffix} />
              
              <p className="mt-4 font-black uppercase text-sm md:text-base tracking-widest text-black/40 group-hover:text-black transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
