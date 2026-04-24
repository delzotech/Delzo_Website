import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { motion } from "motion/react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router";

export function OurWork() {
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

        <div className="grid grid-cols-1 gap-16 w-full max-w-5xl">
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

        <div className="mt-32 mb-24">
          <Link to="/">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-black text-white rounded-full font-black text-xl uppercase tracking-widest flex items-center gap-4 hover:shadow-2xl transition-all"
            >
              Back to Home
              <ArrowRight className="w-6 h-6 rotate-180" />
            </motion.button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
