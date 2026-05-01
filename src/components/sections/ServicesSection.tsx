import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import {
  Code2,
  Brain,
  Workflow,
  Target,
  ArrowRight
} from "lucide-react";

const services = [
  { id: "full-stack", icon: Code2, title: "Website Development", desc: "We build fast, scalable web apps that don't break." },
  { id: "ai-solutions", icon: Brain, title: "AI Models & Solutions", desc: "Intelligent systems that actually learn and adapt." },
  { id: "automation", icon: Workflow, title: "Workflow Automation", desc: "Intelligent systems doing the hard work." },
  { id: "digital-marketing", icon: Target, title: "Digital Marketing", desc: "Turning scrolling into sales with data-driven strategy." }
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white border-4 border-black rounded-[2.5rem] p-6 md:p-8 shadow-[8px_8px_0px_#000] hover:-translate-y-2 hover:shadow-[16px_16px_0px_#000] transition-all relative overflow-hidden group flex flex-col min-h-[350px]"
    >
      {/* Decorative background element */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FFFF00]/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
      
      <div className="bg-[#FFFF00] w-16 h-16 rounded-2xl border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_#000] group-hover:rotate-6 transition-transform">
        <Icon className="w-8 h-8 text-black" strokeWidth={2} />
      </div>
      
      <h3 className="text-3xl font-black mb-3 leading-tight uppercase tracking-tighter">{service.title}</h3>
      <p className="text-lg font-medium text-black/70 mb-8 flex-1 leading-relaxed">{service.desc}</p>

      {/* Action Area */}
      <div className="mt-auto flex flex-col gap-3">
        <Link 
          to={`/services/${service.id}`}
          className="w-full bg-black text-[#FFFF00] px-8 py-4 font-black uppercase text-sm border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,0.2)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center justify-center gap-3"
        >
          See more details <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
        </Link>
        
        <a 
          href={`https://wa.me/918190095181?text=Hi! I'm interested in getting a quote for ${service.title}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-white text-black px-4 py-2 font-black uppercase text-[10px] md:text-xs border-2 border-black hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 tracking-widest"
        >
          Get Quote
        </a>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="relative py-12 md:py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Modern Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-block bg-black text-[#FFFF00] px-4 py-1.5 rounded-lg mb-6 font-black uppercase tracking-widest text-xs">
              Our Expertise
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-black uppercase leading-[0.9]">
              Strategic <br /> <span className="text-transparent" style={{ WebkitTextStroke: "2px #000" }}>Solutions</span>
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-black/60 font-medium max-w-md leading-snug"
          >
            We don't just build features. We build the digital backbone of your entire business operation.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
