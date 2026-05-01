import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { motion, AnimatePresence } from "motion/react";
import { Users, Rocket, Code, Zap, ArrowRight, Star, X, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router";
import { useState } from "react";

export function Collab() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Construct mailto link as a fallback or use for direct automation
    const subject = `Collab Application: ${data.name} (${data.track})`;
    const body = `
      Name: ${data.name}
      Email: ${data.email}
      University: ${data.university}
      Track: ${data.track}
      Project/GitHub Link: ${data.projectLink}
      Message: ${data.message}
    `.trim();

    window.location.href = `mailto:delzo.admin@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] selection:bg-[#FFFF00] selection:text-black">
      <Navbar />

      <main className="w-full max-w-[90rem] mx-auto px-6 py-24">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-[#FFFF00] border-4 border-black px-6 py-2 rounded-full mb-12 shadow-[6px_6px_0px_#000] font-black uppercase tracking-widest text-sm"
          >
            <Star className="w-5 h-5 fill-black" />
            Students & Creators
          </motion.div>

          <h1 className="text-6xl md:text-9xl font-black text-black tracking-tighter uppercase leading-none mb-8">
            Build the <span className="text-transparent" style={{ WebkitTextStroke: "2px #000" }}>Future</span> <br />
            With Delzo
          </h1>
          
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-black/60 font-medium leading-relaxed">
            Stop watching from the sidelines. Join our lab, work on real-world products, 
            and gain the experience that textbooks can't give you.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          {[
            {
              icon: Code,
              title: "Real Codebases",
              desc: "Get your hands dirty with modern stacks. No 'Hello World' projects here.",
              color: "#FF6B6B"
            },
            {
              icon: Rocket,
              title: "Live Products",
              desc: "Work on products used by thousands. From AI tools to SaaS platforms.",
              color: "#4ECDC4"
            },
            {
              icon: Users,
              title: "Direct Mentorship",
              desc: "Collaborate directly with the Delzo core team. Learn by doing.",
              color: "#A855F7"
            }
          ].map((perk, idx) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border-4 border-black p-10 rounded-[3rem] shadow-[12px_12px_0px_#000] relative overflow-hidden group"
            >
              <div 
                className="w-16 h-16 rounded-2xl border-4 border-black flex items-center justify-center mb-8 shadow-[6px_6px_0px_#000]"
                style={{ backgroundColor: perk.color }}
              >
                <perk.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-3xl font-black uppercase mb-4">{perk.title}</h3>
              <p className="text-black/60 font-medium text-lg leading-relaxed">
                {perk.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Current Open Tracks */}
        <div className="mb-40">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                Active <span className="text-[#A855F7]">Collab Tracks</span>
              </h2>
              <p className="text-xl text-black/50 font-medium">
                Choose your path and start contributing to our ongoing innovation pipeline.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                track: "AI & RAG Systems",
                focus: "LLMs, Vector Databases, Python",
                status: "Open",
                bg: "bg-[#FFFF00]/10"
              },
              {
                track: "Frontend Engineering",
                focus: "React, Tailwind, Motion, Design Systems",
                status: "Limited",
                bg: "bg-[#4ECDC4]/10"
              },
              {
                track: "Product Marketing",
                focus: "Content Strategy, Growth, Community",
                status: "Open",
                bg: "bg-[#FF6B6B]/10"
              },
              {
                track: "Backend & DevOps",
                focus: "Node.js, AWS, Scalable Architecture",
                status: "Waitlist",
                bg: "bg-black/5"
              }
            ].map((track, idx) => (
              <motion.div
                key={track.track}
                whileHover={{ scale: 1.02 }}
                onClick={() => setIsModalOpen(true)}
                className={`p-8 border-4 border-black rounded-[2.5rem] flex items-center justify-between gap-6 cursor-pointer ${track.bg}`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-black uppercase">{track.track}</h3>
                    <span className={`px-3 py-1 rounded-full border-2 border-black text-[10px] font-black uppercase ${track.status === 'Open' ? 'bg-[#2ECC71]' : 'bg-gray-200'}`}>
                      {track.status}
                    </span>
                  </div>
                  <p className="text-black/60 font-bold uppercase text-xs tracking-widest">{track.focus}</p>
                </div>
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-[#FFFF00] shrink-0">
                  <ArrowRight className="w-6 h-6" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black text-white p-12 md:p-24 rounded-[4rem] text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFFF00]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#A855F7]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          
          <Zap className="w-20 h-20 text-[#FFFF00] mx-auto mb-10 animate-pulse" />
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
            Ready to <span className="text-[#FFFF00]">Launch?</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/60 font-medium mb-12 max-w-2xl mx-auto">
            We are looking for hungry, curious minds to join our mission. No formal resumes required—just show us what you've built.
          </p>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-4 bg-[#FFFF00] text-black px-12 py-6 rounded-full font-black text-2xl uppercase tracking-widest shadow-[0_0_40px_rgba(255,255,0,0.3)] hover:scale-105 transition-all"
          >
            Apply to Join <ArrowRight className="w-8 h-8" />
          </button>
        </motion.div>

        {/* Application Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              
              <motion.div 
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                className="relative bg-white border-8 border-black rounded-[3rem] w-full max-w-2xl overflow-hidden shadow-[20px_20px_0px_#FFFF00]"
              >
                <div className="p-8 md:p-12">
                  <div className="flex justify-between items-center mb-10">
                    <h2 className="text-4xl font-[900] uppercase tracking-tighter">Application Form</h2>
                    <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                      <X className="w-8 h-8" />
                    </button>
                  </div>

                  {isSubmitted ? (
                    <div className="text-center py-20">
                      <CheckCircle2 className="w-24 h-24 text-[#2ECC71] mx-auto mb-6" />
                      <h3 className="text-3xl font-black uppercase mb-4">Redirecting to Email...</h3>
                      <p className="text-black/60 font-medium">Please send the draft email that just opened!</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest">Full Name</label>
                          <input required name="name" className="w-full border-4 border-black p-4 rounded-2xl font-bold focus:bg-[#FFFF00]/10 outline-none" placeholder="Enter your name" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest">Email Address</label>
                          <input required name="email" type="email" className="w-full border-4 border-black p-4 rounded-2xl font-bold focus:bg-[#FFFF00]/10 outline-none" placeholder="email@example.com" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest">College / University</label>
                        <input required name="university" className="w-full border-4 border-black p-4 rounded-2xl font-bold focus:bg-[#FFFF00]/10 outline-none" placeholder="Where do you study?" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest">Interested Track</label>
                          <select name="track" className="w-full border-4 border-black p-4 rounded-2xl font-bold focus:bg-[#FFFF00]/10 outline-none appearance-none">
                            <option>AI & RAG Systems</option>
                            <option>Frontend Engineering</option>
                            <option>Backend & DevOps</option>
                            <option>Product Marketing</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest">Project/GitHub Link</label>
                          <input required name="projectLink" className="w-full border-4 border-black p-4 rounded-2xl font-bold focus:bg-[#FFFF00]/10 outline-none" placeholder="Link to your best work" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest">Tell us why you want to join</label>
                        <textarea name="message" rows={3} className="w-full border-4 border-black p-4 rounded-2xl font-bold focus:bg-[#FFFF00]/10 outline-none resize-none" placeholder="A short note..." />
                      </div>

                      <button type="submit" className="w-full bg-black text-[#FFFF00] py-6 rounded-2xl font-black text-xl uppercase tracking-widest shadow-[8px_8px_0px_rgba(0,0,0,0.2)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                        Launch Application
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <div className="flex justify-center mt-32">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-3 text-black font-black uppercase tracking-widest hover:translate-x-2 transition-transform"
          >
            <ArrowRight className="w-6 h-6 rotate-180" />
            Back to Home
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
