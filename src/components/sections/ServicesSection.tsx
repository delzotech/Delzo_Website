import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import {
  Code2,
  Brain,
  Workflow,
  Target,
  Palette,
  Mail,
  MessageCircle,
  X,
  ArrowRight
} from "lucide-react";

const services = [
  { id: "full-stack", icon: Code2, title: "Full Stack Development", desc: "We build fast, scalable web apps that don't break." },
  { id: "ai-solutions", icon: Brain, title: "AI Models & Solutions", desc: "Intelligent systems that actually learn and adapt." },
  { id: "automation", icon: Workflow, title: "Workflow Automation", desc: "Intelligent systems doing the hard work." },
  { id: "digital-marketing", icon: Target, title: "Digital Marketing", desc: "Turning scrolling into sales with data-driven strategy." }
];

function ServiceCard({ service, side }: { service: typeof services[0], side: 'left' | 'right' }) {
  const [showQuoteOptions, setShowQuoteOptions] = useState(false);
  const Icon = service.icon;
  
  const whatsappNumber = "918190095181";
  const email = "delzotech@gmail.com";
  const message = encodeURIComponent(`Hi Delzo! I'm interested in getting a quote for ${service.title}.`);

  return (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative w-full max-w-sm"
    >
      {/* Connecting Pipe */}
      <div className={`absolute ${side === 'left' ? 'right-[-2rem] md:right-[-6rem]' : 'left-[-2rem] md:left-[-6rem]'} top-1/2 -translate-y-1/2 w-8 md:w-24 h-6 bg-white border-y-4 border-black z-[-1]`}></div>

      {/* The Machine Node Widget */}
      <div className="bg-white border-4 border-black rounded-[2rem] p-6 md:p-8 shadow-[8px_8px_0px_#000] hover:-translate-y-2 hover:shadow-[16px_16px_0px_#000] transition-all relative overflow-hidden group min-h-[280px] flex flex-col">
        <div className={`absolute ${side === 'left' ? 'top-4 right-4 w-4 h-4 bg-[#FFFF00]' : '-top-4 -right-4 w-12 h-12 bg-black/5 rotate-45 group-hover:rotate-180 duration-700'} rounded-full border-2 border-black opacity-80 transition-all`}></div>
        
        <Icon className="w-12 h-12 mb-4 text-black group-hover:scale-110 transition-transform" strokeWidth={1.5} />
        <h3 className="text-2xl font-black mb-2 leading-tight">{service.title}</h3>
        <p className="font-medium text-black/70 mb-8 flex-1">{service.desc}</p>

        {/* Action Button Area */}
        <div className="mt-auto pt-4 flex flex-col gap-3 relative z-10">
          <Link 
            to={`/services/${service.id}`}
            className="flex items-center gap-2 text-black font-black uppercase text-sm group/btn"
          >
            Learn More <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
          </Link>

          {!showQuoteOptions ? (
            <button 
              onClick={() => setShowQuoteOptions(true)}
              className="bg-[#FFFF00] text-black px-6 py-2.5 font-black uppercase text-xs border-2 border-black shadow-[4px_4px_0px_#000] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2 w-fit"
            >
              Get Quote
            </button>
          ) : (
            <div className="flex flex-wrap gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <a 
                href={`mailto:${email}?subject=Quote Request: ${service.title}&body=${message}`}
                className="bg-white text-black p-2 rounded-lg border-2 border-black hover:bg-gray-100 transition-colors flex items-center gap-2 font-black text-[10px] uppercase shadow-[2px_2px_0px_#000]"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white p-2 rounded-lg border-2 border-black hover:opacity-90 transition-opacity flex items-center gap-2 font-black text-[10px] uppercase shadow-[2px_2px_0px_#000]"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <button 
                onClick={() => setShowQuoteOptions(false)}
                className="p-2 text-black hover:bg-gray-100 rounded-lg transition-colors border-2 border-transparent hover:border-black"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

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

              return (
                <div key={idx} className="flex items-center w-full relative">

                  {/* Left Side Container */}
                  <div className="w-1/2 flex justify-end relative pr-4 md:pr-24">
                    {isEven && <ServiceCard service={service} side="left" />}
                  </div>

                  {/* Central Valve/Junction */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-white border-4 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_#000] z-20">
                    <div className="w-8 h-8 rounded-full border-4 border-black bg-[#FFFF00] flex items-center justify-center">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                  </div>

                  {/* Right Side Container */}
                  <div className="w-1/2 flex justify-start relative pl-4 md:pl-24">
                    {!isEven && <ServiceCard service={service} side="right" />}
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
