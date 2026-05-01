import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { motion } from "motion/react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link, useNavigate } from "react-router";

export function OurWork() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#FDFDFD] selection:bg-[#FFFF00] selection:text-black">
      <Navbar />

      <main className="w-full max-w-7xl mx-auto px-6 py-24 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2 rounded-full border-2 border-black text-black font-black uppercase tracking-widest text-sm mb-12 bg-white shadow-[4px_4px_0px_#000]"
          >
            Proof of Work
          </motion.div>

          <h1 className="text-7xl md:text-9xl font-black text-black tracking-tighter uppercase leading-none mb-8">
            Our <span className="text-transparent" style={{ WebkitTextStroke: "2px #000" }}>Portfolio</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-black/60 font-medium">
            A showcase of digital products we've crafted with precision, passion, and a touch of madness.
          </p>
        </div>

        {/* Client Projects Section */}
        <div className="w-full mb-32">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-16 uppercase tracking-tighter border-l-8 border-[#FFFF00] pl-6">
            Client <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #000" }}>Success Stories</span>
          </h2>
          <div className="grid grid-cols-1 gap-16 w-full max-w-5xl mx-auto">
            {/* Skyscape Holidays Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative bg-white rounded-[3rem] border border-gray-100 p-10 shadow-2xl shadow-gray-200/50 transition-all duration-500 flex flex-col md:flex-row gap-12 items-center overflow-hidden"
            >
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#2ECC71]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="flex-1 relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-black mb-6 uppercase tracking-tight">Skyscape Holidays</h2>
                <p className="text-xl font-medium text-black/70 mb-8 leading-relaxed italic">
                  "A modern, immersive website built for to showcase stunning travel experiences and holiday packages."
                </p>
                <a 
                  href="https://skyscapeholidays.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#2ECC71] text-white px-8 py-4 rounded-2xl font-black uppercase shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Visit Website <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              
              <div className="w-full md:w-1/2 aspect-video relative z-10">
                <div className="w-full h-full bg-gray-50 rounded-[2rem] border border-gray-100 shadow-inner flex flex-col p-3 transform transition-transform duration-700 group-hover:scale-105 group-hover:rotate-2">
                  <div className="border-b border-gray-200 pb-3 mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-xl flex items-center justify-center p-6 overflow-hidden">
                    <img src="/skyscape-logo.png" alt="Skyscape Holidays" className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 scale-90 group-hover:scale-110" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Santhosh NC Wedding Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative bg-white rounded-[3rem] border border-gray-100 p-10 shadow-2xl shadow-gray-200/50 transition-all duration-500 flex flex-col md:flex-row-reverse gap-12 items-center overflow-hidden"
            >
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#A855F7]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="flex-1 relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-black mb-6 uppercase tracking-tight">Santhosh N C</h2>
                <p className="text-xl font-medium text-black/70 mb-8 leading-relaxed italic">
                  "A beautifully crafted, emotional experience that tells a story for a truly memorable and world-class day."
                </p>
                <a 
                  href="https://wedding.santhoshnc.me/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#A855F7] text-white px-8 py-4 rounded-2xl font-black uppercase shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Visit Website <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <div className="w-full md:w-1/2 aspect-video relative z-10">
                <div className="w-full h-full bg-gray-50 rounded-[2rem] border border-gray-100 shadow-inner flex flex-col p-3 transform transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-2">
                  <div className="border-b border-gray-200 pb-3 mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-xl flex items-center justify-center overflow-hidden">
                    <img src="/wedding-preview.png" alt="Santhosh NC Wedding" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Company Products Section */}
        <div className="w-full mb-32">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-16 uppercase tracking-tighter border-l-8 border-[#FF9F1C] pl-6">
            Company <span className="text-transparent" style={{ WebkitTextStroke: "1.5px #000" }}>Products</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Flow",
                subtitle: "Project Management",
                desc: "Task & team management app for better productivity.",
                link: "https://flow-beige-zeta.vercel.app/",
                color: "#FF9F1C"
              },
              {
                title: "ChatWithPDF",
                subtitle: "AI Analysis Tool",
                desc: "AI tool to chat with PDFs and get smart answers instantly.",
                link: "https://chatwithpdf-jet.vercel.app/",
                color: "#4ECDC4"
              },
              {
                title: "Codegram ⭐",
                subtitle: "Coding Battle Platform",
                desc: "Real-time 1v1 coding battle platform to test skills.",
                link: "https://narendraanbazhagann.github.io/codegram/",
                color: "#FF6B6B"
              },
              {
                title: "Farmer Guide AI",
                subtitle: "Agriculture AI",
                desc: "AI-powered farming assistant with crop advice and disease detection.",
                link: "https://farmerguideai.lovable.app/",
                color: "#2ECC71"
              },
              {
                title: "LinkSync",
                subtitle: "Video Chat",
                desc: "Real-time random video chat to connect instantly.",
                link: "https://linksync-app-9c783.web.app/",
                color: "#3498DB"
              },
              {
                title: "MedPrescription AI",
                subtitle: "Medical AI",
                desc: "AI app that analyzes medical prescriptions for safer understanding.",
                link: "https://medprescription-ai.vercel.app/",
                color: "#E74C3C"
              }
            ].map((product, idx) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border-4 border-black p-8 rounded-[2rem] shadow-[8px_8px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div 
                    className="w-12 h-12 rounded-xl border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_#000]"
                    style={{ backgroundColor: product.color }}
                  >
                    <ExternalLink className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-black/30">Live Tool</span>
                </div>
                <h3 className="text-2xl font-black uppercase mb-1">{product.title}</h3>
                <p className="text-xs font-bold text-black/40 uppercase mb-4 tracking-wider">{product.subtitle}</p>
                <p className="text-black/70 font-medium mb-8 leading-relaxed min-h-[60px]">
                  {product.desc}
                </p>
                <a 
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-black font-black uppercase text-sm group-hover:text-[#A855F7] transition-colors"
                >
                  Launch App <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ongoing Innovation Section */}
        <div className="w-full mb-32">
          <div className="bg-black text-[#FFFF00] p-12 md:p-20 rounded-[4rem] shadow-[20px_20px_0px_rgba(0,0,0,0.1)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFFF00]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-12 tracking-tighter relative z-10">
              Ongoing <span className="text-white">Innovation</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                {
                  title: "AI SaaS Tools",
                  desc: "Building the next generation of automation and productivity platforms."
                },
                {
                  title: "Advanced RAG",
                  desc: "Developing smarter retrieval-augmented generation for deeper AI memory."
                },
                {
                  title: "Live Collaboration",
                  desc: "Real-time dashboards and apps designed for seamless team workflows."
                }
              ].map((item, idx) => (
                <div key={idx} className="border-l-2 border-[#FFFF00]/30 pl-8">
                  <div className="w-4 h-4 bg-[#FFFF00] rounded-full mb-6 animate-pulse" />
                  <h3 className="text-2xl font-black uppercase mb-4">{item.title}</h3>
                  <p className="text-[#FFFF00]/60 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 mb-24">
          <motion.button 
            onClick={() => navigate(-1)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-black text-white rounded-full font-black text-xl uppercase tracking-widest flex items-center gap-4 hover:shadow-2xl transition-all"
          >
            Back to Home
            <ArrowRight className="w-6 h-6 rotate-180" />
          </motion.button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
