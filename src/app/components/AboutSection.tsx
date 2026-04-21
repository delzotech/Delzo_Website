import { motion } from "motion/react";
import { Linkedin, Globe } from "lucide-react";

export function AboutSection() {
  const founders = [
    {
      name: "Narendra A",
      role: "Co-Founder & CTO",
      bio: "Tech visionary building scalable neural architectures and automated robotic systems.",
      image: "NA",
      type: "robot", // Used to render specific graphics
      linkedin: "https://www.linkedin.com/in/narendra-anbazhagan2106/"
    },
    {
      name: "Deekshana C S",
      role: "Co-Founder & CAIO",
      bio: "AI strategist optimizing machine learning models with precision-tuned algorithms taking output to the cutting edge.",
      image: "DS",
      type: "sliders",
      linkedin: "https://www.linkedin.com/in/deekshana-c-s-921564292/",
      portfolio: "https://deekshanacs-portfolio.vercel.app/"
    },
  ];

  return (
    <section id="about" className="relative py-32 bg-transparent overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <div className="inline-block bg-[#FFFF00] border-2 border-black text-black px-6 py-2 rounded-full mb-6 shadow-[2px_2px_0px_#000]">
            <span style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700 }}>The Brains</span>
          </div>
          <h2
            className="text-5xl md:text-7xl mb-6 tracking-tighter"
            style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 900, color: "#030213" }}
          >
            Built by <span className="text-transparent" style={{ WebkitTextStroke: "2px #000" }}>Innovators</span>
          </h2>
          <p
            className="text-xl text-black/70 max-w-2xl mx-auto font-medium"
          >
            We're a team of builders, thinkers, and problem-solvers obsessed with turning complex machinery into intuitive reality.
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Hollow/Sketchy Card Background */}
              <div className="relative bg-white border-4 border-black rounded-[2rem] p-8 shadow-[8px_8px_0px_#000] overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-[12px_12px_0px_#FFFF00]">

                {/* Internal Sketch Graphic based on role */}
                <div className="absolute top-6 right-6 opacity-30 group-hover:opacity-100 transition-opacity">
                  {founder.type === 'robot' ? (
                    <svg width="80" height="80" viewBox="0 0 100 100" className="animate-[pulse_3s_ease-in-out_infinite]">
                      {/* Robot Head Sketch */}
                      <rect x="25" y="30" width="50" height="40" rx="4" fill="#FFFF00" stroke="#000" strokeWidth="3" />
                      <circle cx="40" cy="45" r="5" fill="#000" />
                      <circle cx="60" cy="45" r="5" fill="#000" />
                      <line x1="35" y1="60" x2="65" y2="60" stroke="#000" strokeWidth="3" strokeLinecap="round" />
                      <circle cx="50" cy="20" r="4" fill="none" stroke="#000" strokeWidth="3" />
                      <line x1="50" y1="24" x2="50" y2="30" stroke="#000" strokeWidth="3" />
                      {/* Antenna waves */}
                      <path d="M 40 10 Q 50 0 60 10" fill="none" stroke="#000" strokeWidth="2" strokeDasharray="3 3" />
                    </svg>
                  ) : (
                    <svg width="80" height="80" viewBox="0 0 100 100">
                      {/* Audio/AI Mixing Sliders */}
                      <rect x="10" y="20" width="80" height="60" fill="none" stroke="#000" strokeWidth="3" rx="4" />

                      {/* Slider Paths */}
                      <line x1="25" y1="30" x2="25" y2="70" stroke="#000" strokeWidth="2" />
                      <line x1="50" y1="30" x2="50" y2="70" stroke="#000" strokeWidth="2" />
                      <line x1="75" y1="30" x2="75" y2="70" stroke="#000" strokeWidth="2" />

                      {/* Slider Knobs (Animated via CSS motion path roughly via pure CSS transforms) */}
                      <g>
                        <rect x="18" y="50" width="14" height="8" rx="2" fill="#FFFF00" stroke="#000" strokeWidth="2">
                          <animate attributeName="y" values="30;60;45;30" dur="4s" repeatCount="indefinite" />
                        </rect>
                        <rect x="43" y="35" width="14" height="8" rx="2" fill="#FFFF00" stroke="#000" strokeWidth="2">
                          <animate attributeName="y" values="60;30;50;60" dur="3s" repeatCount="indefinite" />
                        </rect>
                        <rect x="68" y="55" width="14" height="8" rx="2" fill="#FFFF00" stroke="#000" strokeWidth="2">
                          <animate attributeName="y" values="40;60;30;40" dur="5s" repeatCount="indefinite" />
                        </rect>
                      </g>
                    </svg>
                  )}
                </div>

                {/* Profile Badge Loop */}
                <div className="relative mb-8 mt-4">
                  <div className="relative w-24 h-24 rounded-full bg-[#FFFF00] flex items-center justify-center border-4 border-black z-10 shadow-[4px_4px_0px_#000]">
                    <span
                      className="text-3xl text-black"
                      style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 900 }}
                    >
                      {founder.image}
                    </span>
                  </div>
                </div>

                {/* Info Text */}
                <h3
                  className="text-3xl text-black mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 900 }}
                >
                  {founder.name}
                </h3>
                <div
                  className="text-black bg-[#FFFF00] border-2 border-black rounded-lg px-3 py-1 inline-flex mb-4 text-sm font-bold shadow-[2px_2px_0px_#000]"
                >
                  {founder.role}
                </div>
                <p
                  className="text-black/70 mb-8 font-medium pr-12 min-h-[4rem]"
                >
                  {founder.bio}
                </p>

                <div className="flex gap-4">
                  {founder.linkedin && (
                    <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border-2 border-black hover:bg-[#FFFF00] hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000] transition-all flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-black" fill="currentColor" />
                    </a>
                  )}
                  {"portfolio" in founder && founder.portfolio && (
                    <a href={founder.portfolio} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white border-2 border-black hover:bg-[#FFFF00] hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000] transition-all flex items-center justify-center">
                      <Globe className="w-5 h-5 text-black" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

