import { DelzoNavbar } from "./components/DelzoNavbar";
import { DelzoFooter } from "./components/DelzoFooter";
import { motion } from "motion/react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router";

export function OurWork() {
  return (
    <div className="min-h-screen p-0 sm:p-4 md:p-6 lg:p-8 relative select-none max-w-[1440px] mx-auto bg-[#FFFF00]">
      {/* Huge inner white canvas with informative grid lines */}
      <div className="bg-[#FFFF00] rounded-none sm:rounded-[2.5rem] w-full min-h-[calc(100vh-4rem)] overflow-hidden shadow-2xl relative flex flex-col font-sans sm:border-4 border-black"
        style={{
          backgroundImage: `radial-gradient(circle, #000 1.5px, transparent 1.5px)`,
          backgroundSize: "32px 32px",
        }}>
        
        <DelzoNavbar />

        <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-24 flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-black text-[#FFFF00] px-6 py-2 mb-8 shadow-[6px_6px_0px_rgba(255,107,107,1)] -rotate-2"
          >
            <span className="text-lg font-black tracking-widest uppercase">Proof of Work</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black text-black mb-16 text-center tracking-tighter uppercase" style={{ textShadow: "4px 4px 0px #fff" }}>
            Our Work
          </h1>

          <div className="grid grid-cols-1 gap-8 w-full max-w-4xl">
            {/* Skyscape Holidays Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10, rotate: 1 }}
              className="group bg-white border-4 border-black p-8 shadow-[12px_12px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_rgba(46,204,113,1)] transition-all flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="flex-1">
                <h2 className="text-4xl font-black text-black mb-4 uppercase tracking-tight">Skyscape Holidays</h2>
                <p className="text-xl font-medium text-black/80 mb-6 font-mono">
                  A modern, immersive website built for to showcase stunning travel experiences and holiday packages.
                </p>
                <a 
                  href="https://skyscapeholidays.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#2ECC71] text-black border-4 border-black px-6 py-3 font-black uppercase shadow-[6px_6px_0px_#000] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all"
                >
                  Visit Website <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <div className="w-full md:w-1/2 aspect-video bg-black/5 border-4 border-black relative overflow-hidden flex items-center justify-center p-4">
                <div className="w-full h-full bg-white border-2 border-black rounded-lg shadow-inner flex flex-col p-2">
                  <div className="border-b-2 border-black pb-2 mb-2 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF6B6B] border border-black"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FF9F1C] border border-black"></div>
                    <div className="w-3 h-3 rounded-full bg-[#2ECC71] border border-black"></div>
                  </div>
                  <div className="flex-1 bg-gray-100 flex items-center justify-center text-center p-4">
                    <img src="/skyscape-logo.png" alt="Skyscape Holidays" className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Santhosh NC Wedding Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10, rotate: -1 }}
              className="group bg-white border-4 border-black p-8 shadow-[12px_12px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_rgba(168,85,247,1)] transition-all flex flex-col md:flex-row-reverse gap-8 items-center"
            >
              <div className="flex-1">
                <h2 className="text-4xl font-black text-black mb-4 uppercase tracking-tight">Santhosh N C Wedding</h2>
                <p className="text-xl font-medium text-black/80 mb-6 font-mono">
                  A beautifully crafted, emotional experience that tells a story for a truly memorable and world-class day.
                </p>
                <a 
                  href="https://wedding.santhoshnc.me/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#A855F7] text-black border-4 border-black px-6 py-3 font-black uppercase shadow-[6px_6px_0px_#000] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] transition-all"
                >
                  Visit Website <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <div className="w-full md:w-1/2 aspect-video bg-black/5 border-4 border-black relative overflow-hidden flex items-center justify-center p-4">
                <div className="w-full h-full bg-white border-2 border-black rounded-lg shadow-inner flex flex-col p-2">
                  <div className="border-b-2 border-black pb-2 mb-2 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF6B6B] border border-black"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FF9F1C] border border-black"></div>
                    <div className="w-3 h-3 rounded-full bg-[#2ECC71] border border-black"></div>
                  </div>
                  <div className="flex-1 bg-gray-100 flex items-center justify-center text-center overflow-hidden">
                    <img src="/wedding-preview.png" alt="Santhosh NC Wedding" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-20">
            <Link to="/">
              <motion.button 
                whileHover={{ x: -6, y: -6 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-[#FF9F1C] text-black border-4 border-black px-8 py-4 text-xl font-black uppercase shadow-[-8px_8px_0px_#000] hover:shadow-none transition-all flex items-center gap-3"
              >
                <ArrowRight className="w-6 h-6 rotate-180 transition-transform group-hover:-translate-x-2" />
                Back to Home
              </motion.button>
            </Link>
          </div>
        </main>

        <DelzoFooter />
      </div>
    </div>
  );
}
